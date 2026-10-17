---
id: fluentui
url: https://github.com/microsoft/fluentui
category: component-library
tags: [react, components, web-components, design-system, accessible]
stack: [typescript, react, web-components]
license: MIT
status: surface-vetted
vetted: 2026-10-17
summary: Microsoft's Fluent UI: React v9, React v8, and Web Components implementations of the Fluent design system.
---

## Design character
Microsoft Fluent look and feel. Not verified: appearance, and whether the repo page links the Fluent 2 guidelines (it did not).

## Best for
Product and enterprise-style UIs in a Microsoft-like idiom, or as a reference for a mature token and theming system.

## Avoid when
The desired look is glass, editorial, or brand-led; a Microsoft look would clash with `Philosophy.md`.

## What's inside
`@fluentui/react-components` (v9, the forward-looking one), `@fluentui/react` (v8), `@fluentui/web-components`, plus utilities.

## How to use
Follow the v9 quick start at react.fluentui.dev. Use v9 for new work.

## Gotchas
- v9's final stable release was described as upcoming; the web components badge showed a beta.
- Migrating from v8 is encouraged; mixing versions is possible.
- Theming details were not read.

## Overlaps and pairings
Study-only reference alongside `awesome-design-md`; for accessible headless parts see `react-spectrum`.

## Not verified yet
Theming API, bundle size, current release state, and the Fluent 2 guidelines themselves.

## License and attribution
MIT for the repo. Brand and logo assets may carry separate Microsoft terms; do not copy Microsoft branding. Record package and version in `ATTRIBUTIONS.md`.
