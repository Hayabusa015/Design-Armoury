---
id: phosphor-icons
url: https://github.com/phosphor-icons/core
category: icons-illustration
tags: [icons, svg, react, vue, multi-weight, duotone, open-source]
stack: [svg, typescript, react, vue, web-components]
license: MIT
status: surface-vetted
vetted: 2026-10-17
summary: Flexible icon family (about 1,240 icons) in multiple weights including duotone, with React, Vue, and web packages built on this core SVG and catalog repo.
---

## Design character
Icons that come in several weights, including duotone, so the same icon can be light for chrome and heavier for emphasis. Not verified: the full weight list and how it looks, as only the repo page was read.

## Best for
Interfaces that want expressive icons with weight variety, such as duotone accents on feature cards or glass panels, while staying in one family.

## Avoid when
Svelte is the framework (no official package, only community ones of unknown upkeep); the project needs the smallest possible icon dependency.

## What's inside
This repo is the core: SVG files grouped by weight under `assets/<weight>/` and catalog data (tags, categories, versions). Official packages: `@phosphor-icons/react`, `@phosphor-icons/vue`, `@phosphor-icons/web`, `@phosphor-icons/webcomponents`.

## How to use
Install the framework package (for example `@phosphor-icons/react`); use `@phosphor-icons/core` only for raw SVG and catalog data.

## Gotchas
- `.svg` imports may need type declarations in your build.
- The `codepoint` field is only stable from 2.1.0; duotone icons use two codepoints.
- Svelte packages are community-made.

## Overlaps and pairings
- `lucide` is the single-weight alternative; pick this one when weight or duotone variety is part of the design.
- The UI UX Pro Max database uses Phosphor as its curated icon source (`ui-ux-pro-max-skill`).

## Not verified yet
Exact weights, total icon count, bundle size, and the official packages' own licenses (this repo is MIT).

## License and attribution
MIT, Phosphor Icons. Keep the notice; record package and version in `ATTRIBUTIONS.md`.
