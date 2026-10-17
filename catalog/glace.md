---
id: glace
url: https://github.com/seangeng/glace
category: component-library
tags: [react, glassmorphism, toasts, springs, frosted-glass, animated-components]
stack: [typescript, react]
license: MIT
status: surface-vetted
vetted: 2026-10-17
summary: Small React kit of frosted-glass toasts, a glass button, and a glass surface primitive with refracting edges, springy motion, and optional haptics.
---

## Design character
Frosted glass with refracting edges and springy motion, built as an opinionated take on the sonner toast library. Matches the glass-plus-bounce taste at small scale. Not verified: how it looks rendered.

## Best for
Glass toasts and notifications, a few glass buttons and cards, or a raw `Glass` surface primitive to build custom panels.

## Avoid when
A full component set is needed; the project cannot take a young, low-adoption dependency without pinning it.

## What's inside
`Toaster` and `toast` (success, error, warning, info, loading, promise, custom), `GlassButton`, `GlassCard`, `Glass`, a `useGlassFilter` hook, CSS-variable theming, optional haptics, and a "Glass Lab" for tuning refraction.

## How to use
Install `glaceui`, import `glaceui/styles.css`, and mount one `Toaster` near the root.

## Gotchas
- Edge refraction falls back to plain frosted blur where unsupported.
- Haptics do nothing on iOS Safari and most desktops.
- Very new and small (10 stars, 34 commits at vetting). Pin a version.

## Overlaps and pairings
- `liquid-glass-react` for larger refractive panels; `shadcn-glass-ui` for a whole component set.
- Good as the notification layer on top of either.

## Not verified yet
Last activity date, accessibility of toasts, reduced-motion behaviour, and bundle size.

## License and attribution
MIT. Credit the library; record repo and version in `ATTRIBUTIONS.md` if copying source.
