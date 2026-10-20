#!/usr/bin/env node
// Validates taste notes written by the Curator. Usage: node check-note.mjs <note.md> [more.md ...]
import { readFileSync } from "node:fs";

const KINDS = ["website", "app", "component", "repo", "poster", "screenshot", "font", "palette", "other"];
const LABELS = ["What it is:", "Why I like it:", "Steal this:", "Avoid:", "Observed:"];
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function check(file) {
  const errs = [];
  let text;
  try {
    text = readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  } catch (e) {
    return [`cannot read file: ${e.message}`];
  }
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return ["missing frontmatter block (--- ... ---) at top of file"];
  const fm = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  const body = m[2];

  if (fm.type !== "loved") errs.push(`type must be "loved" (got "${fm.type ?? ""}")`);
  if (!fm.source) errs.push("source is required");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.captured ?? "") || isNaN(Date.parse(fm.captured)))
    errs.push("captured must be a real date, YYYY-MM-DD");
  if (!KINDS.includes(fm.kind)) errs.push(`kind must be one of: ${KINDS.join(", ")}`);

  const t = (fm.tags ?? "").match(/^\[(.*)\]$/);
  if (!t) errs.push("tags must be an inline list, e.g. tags: [dark-ui, bold-type]");
  else {
    const tags = t[1].split(",").map((s) => s.trim()).filter(Boolean);
    if (tags.length < 1 || tags.length > 6) errs.push(`tags needs 1-6 entries (got ${tags.length})`);
    for (const tag of tags) if (!KEBAB.test(tag)) errs.push(`tag "${tag}" is not lowercase-kebab-case`);
    if (new Set(tags).size !== tags.length) errs.push("duplicate tags");
  }

  if (!/^# \S.*$/m.test(body)) errs.push("missing H1 title (# Name)");
  for (const label of LABELS) {
    if (!new RegExp(`^${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "m").test(body))
      errs.push(`missing label "${label}"`);
  }
  if (fm.kind === "font" && !/^Get it:/m.test(body)) errs.push('kind font needs a "Get it:" line (source and license, or "unknown")');
  if (fm.kind === "palette" && !/^Colors:/m.test(body)) errs.push('kind palette needs a "Colors:" line (hex values with roles)');
  const why = body.match(/^Why I like it:[ \t]*(.*)$/m);
  if (why && !why[1].trim()) errs.push('"Why I like it:" is empty (write the user\'s words, or "not given")');
  return errs;
}

const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node check-note.mjs <note.md> [...]");
  process.exit(2);
}
let bad = 0;
for (const f of files) {
  const errs = check(f);
  if (errs.length) {
    bad++;
    console.error(`FAIL ${f}`);
    for (const e of errs) console.error(`  - ${e}`);
  } else console.log(`ok   ${f}`);
}
process.exit(bad ? 1 : 0);
