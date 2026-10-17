---
id: lucide
url: https://github.com/lucide-icons/lucide
category: icons-illustration
tags: [icons, svg, react, vue, svelte, shadcn, open-source]
stack: [svg, typescript, react, vue, svelte, solid, preact, angular, astro]
license: ISC
status: surface-vetted
vetted: 2026-10-17
summary: Open-source SVG icon set (1,600+ icons) with official packages for React, Vue, Svelte, Solid, Preact, Angular, Astro, React Native, plus static SVG and a Figma plugin.
---

## Design character
Clean, consistent line icons, a community fork of Feather. Not verified: stroke and grid details, since only the repo page was read.

## Best for
The default icon set for React, Tailwind and shadcn builds; any project that needs one consistent line-icon style with tree-shakeable packages.

## Avoid when
Brand or company logos are needed (Lucide does not accept brand logos); a filled, duotone, or multi-weight style is wanted (see `phosphor-icons`).

## What's inside
1,600+ SVG icons. Packages: `lucide`, `lucide-react`, `@lucide/vue`, `@lucide/svelte`, `lucide-solid`, `lucide-preact`, `lucide-react-native`, `@lucide/angular`, `@lucide/astro`, `lucide-static`, and a Figma plugin.

## How to use
Install the package for the framework in use and import icons by name. Install, sizing, stroke, and tree-shaking instructions live at lucide.dev/guide (not read during vetting).

## Gotchas
- No brand logos, by policy.
- Customization and tree-shaking behaviour were not read; check the docs.

## Overlaps and pairings
- `phosphor-icons` offers multiple weights including duotone; `heroicons` is a smaller Tailwind-family set.
- Lucide is the icon set most shadcn-style projects already use; see `shadcn-ui`.

## Not verified yet
Exact icon names needed for a build, stroke-width options, bundle impact, and whether the Feather origin adds any attribution requirement beyond the ISC notice.

## License and attribution
ISC; keep the notice when copying source. Record package and version in `ATTRIBUTIONS.md`.
