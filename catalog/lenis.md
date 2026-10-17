---
id: lenis
url: https://github.com/darkroomengineering/lenis
category: animation-motion
tags: [scroll, smooth-scroll, react, vue, gsap, animation, springs]
stack: [typescript, javascript, react, vue]
license: MIT
status: surface-vetted
vetted: 2026-10-17
summary: Lightweight, dependency-free smooth-scroll library that wraps native scroll and can drive scroll-linked animation, GSAP ScrollTrigger, and WebGL from one loop.
---

## Design character
The "nice scroll feel": inertia-smoothed scrolling with native behaviour kept (sticky, anchors, accessibility). It supplies the feel; the reveals themselves ("stuff wheels up and appears") come from pairing it with `motion` or GSAP. Not verified: feel in practice.

## Best for
Marketing sites, portfolios, and story pages with scroll-triggered reveals, parallax, or WebGL scenes that must stay in sync with scroll.

## Avoid when
The page is a dense tool or dashboard; heavy nested scroll containers or iframes are central; CSS scroll-snap is required (use the separate snap package); the audience is mostly on low-power devices.

## What's inside
Core `Lenis` class (`autoRaf` option, `scroll` event), `lenis/react`, `lenis/vue`, a Framer integration, and `lenis/snap`. `respectReducedMotion` is on by default and updates live.

## How to use
Install `lenis`, create an instance with `autoRaf: true`, and listen to scroll events to drive animation. With GSAP, call `ScrollTrigger.update` on each Lenis scroll and run Lenis from GSAP's ticker with `gsap.ticker.lagSmoothing(0)`.

## Gotchas
- Capped at 60fps on Safari and 30fps in low power mode.
- Smooth scroll stops over iframes. Fixed positioning may lag on pre-M1 Safari. iOS below 16 may behave oddly with `syncTouch`.
- Nested scroll containers need configuration.
- Keep the reduced-motion default on.

## Overlaps and pairings
Pairs with `motion` (scroll-triggered reveals) and `liquid-glass-react` or `shadcn-glass-ui` for glass panels that rise into place. Its relationship with Motion was not documented on the README.

## Not verified yet
How well it pairs with Motion in practice, Next.js specifics, last release date, and performance on mid-range phones.

## License and attribution
MIT. Credit the library and record version in `ATTRIBUTIONS.md` if source is copied.
