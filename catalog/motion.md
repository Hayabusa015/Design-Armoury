---
id: motion
url: https://github.com/motiondivision/motion
category: animation-motion
tags: [react, javascript, vue, animation, scroll, gestures, layout-transitions, springs]
stack: [typescript, javascript, react, vue]
license: MIT (Motion+ paid tier separate)
status: surface-vetted
vetted: 2026-10-17
summary: Animation library for React, plain JS, and Vue (formerly Framer Motion). Layout transitions, gestures, scroll-linked effects, springs, and timelines. 34k stars.
---

## Design character
Not a look but a feel: smooth, spring-based, interruptible motion. Not verified in use; nothing was run during vetting.

## Best for
Scroll reveals, hover and tap interactions, layout and list animations, page and modal transitions, and any React interface that needs purposeful motion with accessibility handling.

## Avoid when
A static or print-first design, a very light page where the animation weight is not justified, or a screen meant to be as calm as possible and needing no animation.

## What's inside
Packages for React (import from `motion/react`), plain JavaScript (an `animate()` function), and Vue (`motion-v`). Listed features: layout transitions, gestures, scroll-linked effects, springs, and timelines, with a hybrid engine that uses native browser APIs where it can.

## How to use
Install the `motion` package and import from `motion/react` in React. The package replaces the earlier Framer Motion name.

## Gotchas
- A paid Motion+ tier exists (premium APIs and examples). Do not reproduce Motion+ content.
- The repo page gives no measured bundle size, only a "tiny footprint" claim.
- Exit animations were not mentioned on the page read; confirm before relying on them.
- Respect reduced motion: set the library's reduced-motion handling and test it.

## Overlaps and pairings
The engine under magicui effects. Pair with shadcn-ui for dialogs, sheets, and lists that animate in and out.

## Not verified yet
Bundle size, exit-animation support, reduced-motion defaults, current version and release cadence, and real performance on mid-range phones.

## License and attribution
MIT for the open-source library. Motion+ is separately licensed and paid. Installing the npm package needs no copied source; credit the library in project notes.
