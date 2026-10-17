---
id: react-spectrum
url: https://github.com/adobe/react-spectrum
category: component-library
tags: [react, accessible, components, headless, react-aria, i18n, dark-ui]
stack: [typescript, react, react-native]
license: Apache-2.0
status: surface-vetted
vetted: 2026-10-17
summary: Adobe's React libraries: React Aria (unstyled accessible components and hooks), React Stately (state hooks), and React Spectrum (a full Adobe-styled component set), plus i18n tools.
---

## Design character
React Spectrum is opinionated Adobe styling. React Aria is unstyled, so the look comes from the project, which suits custom glass or brand styling. Not verified: how either looks.

## Best for
Accessibility-critical custom interfaces: use React Aria for behaviour (keyboard, focus, screen reader support, touch) under your own glass styling; use React Spectrum when an Adobe-like product look is welcome.

## Avoid when
A copy-paste, pre-styled kit is wanted (see `shadcn-ui`); the project must avoid a large dependency.

## What's inside
React Spectrum, React Aria, React Stately, and Internationalized libraries. Claims from the README: WAI-ARIA Authoring Practices, screen reader and keyboard support, 30+ languages, right-to-left support.

## How to use
Start from the getting-started guide for the chosen library. For custom styling, take React Aria components or hooks and add your own CSS.

## Gotchas
- 508 open issues and 91 open pull requests at vetting.
- React version support was not stated on the page.
- Accessibility claims are the maintainers' own and unverified here.

## Overlaps and pairings
- Radix UI under `shadcn-ui` plays a similar headless role; React Aria is the stronger i18n option.
- Pairs with the glass entries (`liquid-glass-react`, `glace`) when a glass look needs accessible behaviour underneath.

## Not verified yet
Install steps, supported React versions, bundle size, and real accessibility behaviour on glass or translucent surfaces.

## License and attribution
Apache-2.0: keep the license and notices. Record package and version in `ATTRIBUTIONS.md`.
