---
id: magicui
url: https://github.com/magicuidesign/magicui
category: animation-motion
tags: [react, tailwind, framer-motion, animated-components, effects, copy-paste, nextjs, shadcn]
stack: [typescript, react, nextjs, tailwindcss, framer-motion]
license: MIT
status: surface-vetted
vetted: 2026-10-17
summary: Copy-and-paste animated React components and effects (marquees, shimmer, tickers, confetti-style touches) for marketing pages. Installs through the shadcn workflow. 22k stars.
---

## Design character
Eye-catching, motion-forward touches: animated components and effects meant to make a page feel polished. Not verified: any specific component's look or timing, since nothing was rendered during vetting.

## Best for
Public marketing and landing pages that want a few memorable moments: a marquee of values or sponsors, a number ticker for stats, a shine on a call-to-action, a celebratory effect after sign-up.

## Avoid when
The product is a calm, focused tool, a staff or admin interface, or anything for people who are easily distracted. Also avoid when mobile performance matters and effects cannot be lazy-loaded.

## What's inside
A pnpm and Turborepo monorepo with the docs site in `apps/www` and a `registry.json`. The repo page lists no component names; the full list is on magicui.design/docs.

## How to use
Components are copied into the app, following the shadcn-style workflow. The repo topics list framer-motion, Next.js, React, shadcn-ui, Tailwind, and TypeScript. Exact install commands were not on the page read.

## Gotchas
- Depends on the motion library and Tailwind, with versions not confirmed.
- Effects should be lazy-loaded and kept off calm admin screens.
- Honor `prefers-reduced-motion` yourself; it was not verified that the components do.

## Overlaps and pairings
Built to sit on shadcn-ui and motion. Use sparingly: one or two effects per page.

## Not verified yet
Component list and visual quality, install commands, dependency versions, reduced-motion behavior, bundle cost, and mobile performance.

## License and attribution
MIT. Keep the notice on copied source and record the URL, component names, and license in `ATTRIBUTIONS.md`.
