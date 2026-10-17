# Catalog entry template

Every repo in the arsenal has one file at `catalog/<id>.md`. The id is a short lowercase slug (letters, digits, hyphens) and doubles as the vendor cache folder name.

The frontmatter is machine-read by `scripts/build-index.mjs`, which validates every entry and regenerates `INDEX.md`. Keep each frontmatter value on one line, and write lists inline as `[a, b, c]`.

```markdown
---
id: <slug, same as the filename>
url: https://github.com/<owner>/<repo>
category: <exactly one id from standards/taxonomy.json>
tags: [<up to 8 lowercase-kebab-case tags>]
stack: [<languages, frameworks, build tooling>]
license: <exact SPDX name, plus any carve-out in a few words>
status: surface-vetted | deep-vetted
vetted: <YYYY-MM-DD>
summary: <one line, under 220 characters, saying what it is and what it is good for>
---

## Design character
<the look and feel this repo produces, in concrete terms: typography, density, motion, color behavior. Say "not verified" if you did not see it rendered.>

## Best for
<concrete situations where this is the right pick>

## Avoid when
<concrete situations where this is the wrong pick>

## What's inside
<an inventory: the main folders, components, or asset groups, with the paths worth taking. For big libraries, name the groups and a few notable items and say where the full list lives.>

## How to use
<install or copy instructions, the import pattern, and anything non-obvious. Write in your own words; one snippet of five lines or fewer at most.>

## Gotchas
<browser support, peer dependencies, bundle weight, paid-tier boundaries, build quirks, staleness>

## Overlaps and pairings
<other catalog entries in the same space and when to prefer each; entries this pairs well with>

## Not verified yet
<honest list of unknowns that affect use. "None" only if deep-vetted and complete.>

## License and attribution
<what the license requires, any separately licensed parts, and what a build must record in ATTRIBUTIONS.md>
```

## Rules

- Every field comes from evidence you actually read. Unknowns go in "Not verified yet", never guessed.
- One category per entry. If two fit, pick the one a designer would search first and mention the other in "Overlaps and pairings".
- Reuse existing tags before inventing new ones. Check the tags already used in `catalog/`.
- No license, or a license that forbids reuse: no entry.
- `deep-vetted` requires that the repo was cloned and something was built or run. Say what, in "Not verified yet" or "Gotchas".
- Keep "Best for" and "Avoid when" specific enough that the Quartermaster can match them to a brief.
