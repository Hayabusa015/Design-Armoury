---
id: ui-ux-pro-max-skill
url: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
category: tooling
tags: [agent-skill, claude-code, design-system, styles, palettes, font-pairings, ux-guidelines]
stack: [python, markdown, claude-code, tailwind, react, nextjs, shadcn]
license: MIT (open-source version; a separate Premium product exists)
status: surface-vetted
vetted: 2026-10-17
summary: Agent skill with a searchable design database (79 styles, 192 palettes, 74 font pairings, 119 UX rules) and a reasoning engine that proposes a design system for a product type, across 22 stacks.
---

## Design character
Not a look of its own. It is a reference database and rule engine that recommends a style, palette, type pairing, effects, and anti-patterns for a given product type. Not verified: quality of its recommendations, since nothing was run during vetting.

## Best for
Starting a build when no style is decided: product-type-driven suggestions, palette and font-pair lookups, UX checklists, landing-page patterns, and stack-specific guidance (React, Next.js, Astro, Vue, Svelte, shadcn/ui, Tailwind, SwiftUI, Flutter and others).

## Avoid when
Taste is already set: Matt's `Philosophy.md` and any `Brand/` note should win over generated suggestions. Also avoid letting it write a master design file that overrides existing brand tokens.

## What's inside
Per the README: 79 styles (50 active), 192 colour palettes, 74 font pairings plus a catalog of 1,934 approved Google Fonts, 192 industry reasoning rules, 25 chart types, 119 UX guidelines, 34 landing-page patterns, 105 icon rows, and 22 stack rule sets. Search scripts are Python (standard library, no network calls). `--persist` saves a master design file with optional page overrides.

## How to use
Install is via the Claude Code marketplace plugin `ui-ux-pro-max`, or the `ui-ux-pro-max-cli` package (`uipro init --ai claude`). The skill auto-activates when a UI task is described. The README asks AI agents not to install software and to ask the user, so the user should run the install. Use as a reference for idea generation; run its search scripts for palettes, fonts, and style options and feed the results to the Draftsman.

## Gotchas
- Needs Python 3.
- Claude Code may hit an output-token limit on big tasks; the README suggests splitting tasks.
- Marketplace installs before v2.5.1 failed because of symlinks.
- Human-readable output truncates fields at 300 characters; use `--json`.
- Premium version (brand identity, asset generation, token architecture) is separate; do not copy paid content.
- Two skills that both auto-activate on UI tasks can pull in different directions. Decide which one leads.

## Overlaps and pairings
- `awesome-design-md` covers real brand design systems; this one generates generic recommendations by product type.
- Its styles list may include glassmorphism-style entries; check against the glass recipe in `Philosophy.md` and the glass repos (`liquid-glass-react`, `shadcn-glass-ui`, `glace`).
- Font pairings feed the vault `Fonts/` notes; verify licenses there.

## Not verified yet
Quality and originality of its recommendations, how it behaves alongside the Armory crew, how recently the databases were updated (the README mentions a weekly refresh workflow that does not auto-merge), and its star count beyond the roughly 136.6k shown. Recommendations from it are untested against Matt's taste.

## License and attribution
MIT for the open-source repo. If any data (palettes, font pairings) is copied into a project, record repo URL, path, and license in `ATTRIBUTIONS.md`.
