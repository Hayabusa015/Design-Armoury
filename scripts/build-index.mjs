#!/usr/bin/env node
// Validates every catalog entry and regenerates INDEX.md.
//
// Usage: node scripts/build-index.mjs [armory-root] [--check]
//   armory-root  the armory checkout (default: current directory)
//   --check      validate and exit non-zero if INDEX.md is out of date; writes nothing
//
// No dependencies. Frontmatter values must be single-line scalars or inline lists like [a, b].

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const root = resolve(args.find((a) => !a.startsWith('--')) ?? process.cwd());

const catalogDir = join(root, 'catalog');
const taxonomyPath = join(root, 'standards', 'taxonomy.json');
const indexPath = join(root, 'INDEX.md');

const errors = [];
const warnings = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);

if (!existsSync(taxonomyPath)) {
  console.error(`Missing ${taxonomyPath}`);
  process.exit(1);
}
const categories = JSON.parse(readFileSync(taxonomyPath, 'utf8')).categories ?? {};

const REQUIRED_FIELDS = ['id', 'url', 'category', 'tags', 'stack', 'license', 'status', 'vetted', 'summary'];
const REQUIRED_HEADINGS = [
  'Design character',
  'Best for',
  'Avoid when',
  "What's inside",
  'How to use',
  'Gotchas',
  'Overlaps and pairings',
  'Not verified yet',
  'License and attribution',
];
const STATUSES = ['surface-vetted', 'deep-vetted'];
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function parseValue(raw) {
  const v = raw.trim();
  if (v.startsWith('[') && v.endsWith(']')) {
    return v
      .slice(1, -1)
      .split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return v.replace(/^["']|["']$/g, '');
}

function parseEntry(text) {
  if (!text.startsWith('---\n')) return null;
  const end = text.indexOf('\n---', 4);
  if (end === -1) return null;
  const fm = {};
  for (const line of text.slice(4, end).split('\n')) {
    if (!line.trim()) continue;
    const i = line.indexOf(':');
    if (i === -1) continue;
    fm[line.slice(0, i).trim()] = parseValue(line.slice(i + 1));
  }
  return { fm, body: text.slice(end + 4) };
}

const normUrl = (u) => String(u).toLowerCase().replace(/\.git$/, '').replace(/\/+$/, '');

const files = existsSync(catalogDir)
  ? readdirSync(catalogDir).filter((f) => f.endsWith('.md')).sort()
  : [];
const entries = [];
const seenUrls = new Map();

for (const file of files) {
  const stem = file.slice(0, -3);
  const parsed = parseEntry(readFileSync(join(catalogDir, file), 'utf8'));
  if (!parsed) {
    fail(file, 'missing or unterminated frontmatter (the file must start with ---)');
    continue;
  }
  const { fm, body } = parsed;

  for (const f of REQUIRED_FIELDS) {
    const val = fm[f];
    if (val === undefined || val === '' || (Array.isArray(val) && val.length === 0)) {
      fail(file, `missing required field "${f}"`);
    }
  }

  if (fm.id !== undefined && fm.id !== stem) fail(file, `id "${fm.id}" must match the filename "${stem}"`);
  if (!KEBAB.test(stem)) fail(file, 'filename must be lowercase letters, digits, and hyphens');
  if (fm.url && !/^https:\/\/github\.com\/[^/\s]+\/[^/\s]+\/?$/.test(String(fm.url))) {
    fail(file, `url must look like https://github.com/owner/repo (got "${fm.url}")`);
  }
  if (fm.url) {
    const key = normUrl(fm.url);
    if (seenUrls.has(key)) fail(file, `duplicate url, already used by ${seenUrls.get(key)}`);
    else seenUrls.set(key, file);
  }
  if (fm.category && !categories[fm.category]) {
    fail(file, `category "${fm.category}" is not in standards/taxonomy.json (valid: ${Object.keys(categories).join(', ')})`);
  }
  if (Array.isArray(fm.tags)) {
    if (fm.tags.length > 8) fail(file, `at most 8 tags (has ${fm.tags.length})`);
    for (const t of fm.tags) if (!KEBAB.test(t)) fail(file, `tag "${t}" must be lowercase-kebab-case`);
  } else if (fm.tags !== undefined) {
    fail(file, 'tags must be an inline list like [a, b]');
  }
  if (fm.stack !== undefined && !Array.isArray(fm.stack)) fail(file, 'stack must be an inline list like [a, b]');
  if (fm.status && !STATUSES.includes(fm.status)) fail(file, `status must be one of: ${STATUSES.join(', ')}`);
  if (fm.vetted && !/^\d{4}-\d{2}-\d{2}$/.test(fm.vetted)) fail(file, 'vetted must be YYYY-MM-DD');
  if (fm.summary && String(fm.summary).length > 220) fail(file, `summary is ${String(fm.summary).length} characters; keep it under 220`);

  const headings = new Set([...body.matchAll(/^## (.+?)\s*$/gm)].map((m) => m[1]));
  for (const h of REQUIRED_HEADINGS) if (!headings.has(h)) fail(file, `missing section "## ${h}"`);

  entries.push({ file, fm });
}

if (errors.length) {
  console.error(`Catalog has ${errors.length} problem${errors.length === 1 ? '' : 's'}:\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

// Info: tags used exactly once are worth a look for near-duplicates.
const tagCounts = new Map();
for (const { fm } of entries) for (const t of fm.tags) tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
const singletons = [...tagCounts].filter(([, n]) => n === 1).map(([t]) => t);

const cell = (s) => String(s).replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const byCategory = new Map();
for (const e of entries) {
  if (!byCategory.has(e.fm.category)) byCategory.set(e.fm.category, []);
  byCategory.get(e.fm.category).push(e);
}

const lines = [
  '# Design Armory Index',
  '',
  '<!-- GENERATED by scripts/build-index.mjs from catalog/*.md. Do not edit by hand. -->',
  '',
  `${entries.length} ${entries.length === 1 ? 'repo' : 'repos'} in ${byCategory.size} ${byCategory.size === 1 ? 'category' : 'categories'}. Each id links to its full entry in \`catalog/\`.`,
  '',
  '`surface-vetted` means read from the repo page and README. `deep-vetted` means cloned, with something built or run.',
  '',
  'Add repos with `/design-armory:intake <url>`. Entry format: `standards/catalog-entry-template.md`. Categories: `standards/taxonomy.json`.',
  '',
];
for (const cat of Object.keys(categories).filter((c) => byCategory.has(c))) {
  lines.push(`## ${cat}`, '', `_${categories[cat]}_`, '', '| id | summary | tags | stack | license | status |', '| --- | --- | --- | --- | --- | --- |');
  for (const { file, fm } of byCategory.get(cat).sort((a, b) => a.fm.id.localeCompare(b.fm.id))) {
    lines.push(
      `| [${fm.id}](catalog/${file}) | ${cell(fm.summary)} | ${cell(fm.tags.join(', '))} | ${cell(fm.stack.join(', '))} | ${cell(fm.license)} | ${cell(fm.status)} |`,
    );
  }
  lines.push('');
}
const output = lines.join('\n');

const current = existsSync(indexPath) ? readFileSync(indexPath, 'utf8') : '';
const changed = current !== output;

if (checkOnly) {
  if (changed) {
    console.error('INDEX.md is out of date. Run: node scripts/build-index.mjs');
    process.exit(1);
  }
  console.log(`OK: ${entries.length} entries valid, INDEX.md is current.`);
} else {
  if (changed) writeFileSync(indexPath, output);
  console.log(`${changed ? 'Wrote' : 'No change to'} INDEX.md: ${entries.length} entries in ${byCategory.size} categories.`);
}
if (singletons.length) console.log(`Tags used once (check for near-duplicates): ${singletons.join(', ')}`);
