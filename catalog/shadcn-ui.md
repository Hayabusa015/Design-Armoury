---
id: shadcn-ui
url: https://github.com/shadcn-ui/ui
category: component-library
tags: [react, tailwind, components, accessible, copy-paste, cli, registry, nextjs]
stack: [typescript, react, nextjs, tailwindcss]
license: MIT
status: surface-vetted
vetted: 2026-10-17
summary: Accessible React components you install as editable source through a CLI, not as an npm dependency. 60+ components plus a registry for sharing your own. Very widely used (125k stars).
---

## Design character
Neutral, clean, modern defaults meant to be restyled. The project says it is "not a component library" but how you build your own, so the look comes from your tokens and edits. Not verified: how the default theme renders, since nothing was rendered during vetting.

## Best for
Admin areas, dashboards, forms, data tables, dialogs, command palettes, sidebars, and any React and Tailwind project that needs accessible primitives it fully controls. Strong fit when a project already has a custom theme and needs the behavior without the lock-in.

## Avoid when
The project is not React. The team wants a versioned package it never edits. A custom visual language would fight the defaults and nobody will map the tokens first. The app is tiny and a few hand-built elements are enough.

## What's inside
About 60 components on the docs site, including Accordion, Button, Calendar, Card, Carousel, Chart, Combobox, Command, Data Table, Dialog, Drawer, Dropdown Menu, Sheet, Sidebar, Table, Tabs, and Tooltip. Also form integrations (React Hook Form, TanStack Form), AI chat elements, utilities such as scroll-fade and shimmer, and a registry schema for distributing components. The component source lives in the repo's apps and registry folders; the docs at ui.shadcn.com list everything.

## How to use
Run the CLI to add a component into your project, then edit the copied source directly. Components share one composable interface. A flat-file registry schema lets you publish your own components for other projects to install.

## Gotchas
- The copied code is yours to maintain. Upstream fixes do not arrive by upgrading a package.
- Theming approach and the underlying primitives library were not confirmed from the pages read. Check the docs before assuming.
- Adding it to a project with its own theme means mapping tokens first, one component at a time.
- Projects that pin dependency versions need to pin what the CLI adds.

## Overlaps and pairings
Pairs with magicui (its components install the same way) and motion (the animation engine behind many effects). Use shadcn-ui for structure and behavior, then layer motion effects on top.

## Not verified yet
Default theme appearance, the primitives library underneath, the exact CLI commands and flags, current Tailwind version support, and how recently the repo was updated (the page showed no dates).

## License and attribution
MIT. Because components are copied into your project, keep the MIT notice where required and record the source URL, component names, and license in `ATTRIBUTIONS.md`.
