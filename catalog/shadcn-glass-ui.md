---
id: shadcn-glass-ui
url: https://github.com/yhooi2/shadcn-glass-ui-library
category: component-library
tags: [react, tailwind, glassmorphism, shadcn, components, dark-ui, registry]
stack: [typescript, react, tailwind-4, radix-ui]
license: Apache-2.0 per GitHub sidebar; README says MIT. Both permissive, confirm the LICENSE file
status: surface-vetted
vetted: 2026-10-17
summary: 59 glassmorphism components built to sit alongside shadcn/ui, with Glass, Light, and Aurora themes. Installs from npm or the shadcn registry.
---

## Design character
Frosted glassmorphism across a full component set. Three themes per the README: Glass (dark, purple accents), Light (minimal, subtle glass), and Aurora (gradient glow). Not verified: how any of it looks rendered.

## Best for
Dashboards, SaaS or AI-product UIs, and sidebars, modals, metric cards, and forms that need a consistent glass look quickly in a shadcn and Tailwind 4 project.

## Avoid when
The project is not React and Tailwind 4; accessibility must be proven (the README makes no explicit accessibility claims); the existing theme tokens must stay untouched; a pre-2.0 version is already in use.

## What's inside
Per the README: Core UI (22, such as ButtonGlass, InputGlass, ModalGlass, SidebarGlass), Composite (14, such as MetricCardGlass, SplitLayoutGlass), Specialized (9, such as StepperGlass, SparklineGlass), Sections (7, such as HeaderNavGlass), Atomic (7, such as SearchBoxGlass, ThemeToggleGlass). A three-layer CSS token system and a theme guide for custom themes.

## How to use
Either install `shadcn-glass-ui`, import its `styles.css`, and wrap the app in `ThemeProvider` with the glass theme; or add its registry to `components.json` and pull single components with the shadcn CLI. Prefer the one-component-at-a-time route and map the colours onto the project's own tokens.

## Gotchas
- Needs React 18 or 19, Tailwind CSS 4.1 or newer, and Node 20.16 or newer.
- The README links a v1 to v2 breaking-changes guide. Pin a version.
- Counts disagree (59 vs 57 components in the docs); treat the number as approximate.
- Small following (37 stars at vetting), though 503 commits.

## Overlaps and pairings
- `shadcn-ui` is the base it extends; use that for plain components.
- `liquid-glass-react` for a single refractive showpiece panel on top.
- `magicui` and `motion` for entrance and spring animation.

## Not verified yet
The actual license (Apache-2.0 vs MIT), accessibility behaviour (keyboard, ARIA, contrast on glass), bundle size, performance with many blurred layers, and reduced-transparency handling.

## License and attribution
Both licenses listed are permissive and require keeping the notice. Check the LICENSE file and record repo URL, license, and version in `ATTRIBUTIONS.md`.
