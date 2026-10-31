---
id: itshover
url: https://github.com/itshover/itshover
category: icons-illustration
tags: [icons, animated-components, react, shadcn, svg, copy-paste, registry, animation]
stack: [typescript, react, motion, svg, shadcn-registry]
license: Apache-2.0 (LICENSE file; README bullet and package.json say MIT, the LICENSE file governs)
status: surface-vetted
vetted: 2026-10-31
summary: About 260 hover-animated SVG line icons as copy-paste React components built on motion/react, installable one at a time through the shadcn CLI registry. Includes ~29 brand logos.
---

## Design character
24x24 outline icons, 2px round-capped strokes, `currentColor` by default, in the Tabler visual family (the paths carry Tabler's `M0 0h24v24H0z` frame). Each icon has a short, purposeful micro-animation on hover (about 0.2 to 0.4s nudges, wiggles, and draws, e.g. the copy icon's front sheet shifts 2px and back). Not verified: the animations were read in source, not seen rendered.

## Best for
Buttons, nav items, toolbars, and feature grids in React/Next/shadcn builds where icons should react to hover; landing pages that want a lively touch without a full animation library; AI-tool UIs (it has animated Anthropic, OpenAI, Gemini, Cursor, Ollama and similar marks).

## Avoid when
Non-React stacks; a large or complete icon vocabulary is needed (about 260 icons versus 1,600+ in `lucide`); motion-sensitive or calm UIs, since there is no built-in reduced-motion handling; pages with hundreds of icons, where a motion runtime per icon is wasteful; filled, duotone, or multi-weight styles.

## What's inside
- `icons/`: one `<name>-icon.tsx` per icon (about 263), plus `types.ts` (shared `AnimatedIconProps` and `AnimatedIconHandle`) and `index.ts` (exports and `ICON_LIST`).
- Groups: UI essentials (arrows, chevrons, checks, layout and sidebar toggles), letters A to Z, charts, currency and crypto, devices and connectivity, emoji faces, social (GitHub, Discord, LinkedIn, X, YouTube), tech (Docker, Node, Python, TypeScript), and `brand-*` logos (about 29).
- `registry.json` and `public/r/*.json`: the shadcn registry the CLI installs from.
- The rest (`app/`, `components/`, `actions/`, `lib/`) is the itshover.com Next.js site, not needed in a build.
- Browse the full list at itshover.com/icons.

## How to use
Add icons one by one with the shadcn CLI, which copies the component source into the project; or install `motion` and copy files from `icons/` along with `icons/types.ts`. Props are `size`, `color`, `strokeWidth`, `className`. Animation runs on hover of the icon itself; to trigger it from a parent (e.g. hovering the whole button), hold a ref and call `startAnimation()` / `stopAnimation()`.

```
npx shadcn@latest add https://itshover.com/r/copy-icon.json
```

## Gotchas
- Requires `motion` (motion/react) and React 18+; every icon is a client component.
- Each icon wraps the SVG in a `motion.div` with `inline-flex cursor-pointer`, so it always shows a pointer cursor and the wrapper, not the `svg`, receives `className`. Adjust when placing inside buttons or links.
- No `prefers-reduced-motion` handling found in `icons/` (zero matches for `useReducedMotion`). Add `MotionConfig reducedMotion="user"` or gate the handlers.
- No accessible name or `aria-hidden` is set on the SVG; label the parent control and mark the icon decorative.
- Hover-only by default: no animation on keyboard focus or touch unless the parent calls the ref methods.
- License mismatch between README/package.json (MIT) and LICENSE (Apache-2.0).
- Young, single-maintainer project (version 0.1.0); last commit 2026-09-26.

## Overlaps and pairings
- `lucide`: far larger static set; prefer it as the base vocabulary and use itshover for a handful of accent icons. Mixing works visually since both are 24px, 2px-stroke outline styles, but check the specific glyphs side by side.
- `phosphor-icons`: pick it for weights, fills, duotone; `heroicons`: smaller static Tailwind-family set.
- Pairs with `shadcn-ui` (same CLI and registry flow) and `motion` (same animation engine, already a dependency). `magicui` is the animated-component counterpart for larger effects.

## Not verified yet
Rendered look and timing of the animations; whether the glyphs are drawn from Tabler Icons (MIT) and so carry an extra attribution notice; brand-logo trademark terms; bundle size per icon; SSR behaviour in Next.js server components; exact icon names beyond the site list.

## License and attribution
Apache-2.0: keep the copyright and license notice in copied source and note any changes made to the files. The license grants no trademark rights; the `brand-*` and social logos are third-party trademarks subject to each owner's guidelines. If the glyphs prove to be Tabler-derived, also keep Tabler's MIT notice. Record each copied icon, the repo, and the commit in `ATTRIBUTIONS.md`.
