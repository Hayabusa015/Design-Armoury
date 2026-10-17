---
id: shaders
url: https://github.com/shader-effects-inc/shaders
category: visual-effects
tags: [webgpu, wgsl, shaders, gradients, glass, transitions, cursor-effects, react]
stack: [typescript, webgpu, wgsl, react, vue, svelte, solid, framer]
license: MIT (engine, components, bindings; editor and Pro tier separate)
status: surface-vetted
vetted: 2026-10-17
summary: 200+ WebGPU shader effects as components (gradients, noise, glass, metal, distortion, transitions, cursor effects) for React, Vue, Svelte, Solid, plain JS, and Framer.
---

## Design character
Rendered, motion-forward surfaces: gradients, noise, glass, metal, distortions, blurs, and transitions that can be nested, blended, and masked. Not verified: how the effects look in practice, since nothing was rendered during vetting.

## Best for
Hero backgrounds, animated gradients, glass and metal surfaces, page or section transitions, cursor-reactive effects, and other places where a motion-rich visual is the centerpiece of the design.

## Avoid when
The audience may be on browsers without WebGPU and no fallback is planned; the page must be extremely light; the effect would sit under dense reading text; the design must be fully static or print-first.

## What's inside
A TypeScript monorepo built with pnpm and Turbo. The engine lives in `packages/core`, with one folder per effect under `packages/core/src/shaders/<component>/`. Framework bindings for React, Vue, Svelte, Solid, and plain JS are generated from the core into `packages/`. A CLI and an MCP server are also offered. Custom effects are written in WGSL.

## How to use
Install the npm package (`npm install shaders`) and import components from the framework entry point, for example `shaders/react`. The CLI is `npx shaders connect | install | update`. Effects are composed declaratively by nesting them inside each other.

## Gotchas
- WebGPU browser support and fallback behavior were not checked. Verify a static fallback before shipping.
- A paid "Shaders Pro" tier adds presets, sections, and Framer integration. Do not copy or reproduce Pro content.
- Young, small repo (41 stars when vetted). Pin a version and re-check before relying on it for client work.
- Contributors are asked to open an issue before submitting anything beyond a bug fix.

## Overlaps and pairings
No other entries in this space yet. Pairs naturally with any component-library or layout-template entry that needs a hero visual.

## Not verified yet
WebGPU support and fallback, bundle size, performance on mid-range phones, how `prefers-reduced-motion` is handled, and real-world visual quality. The Inspector must check a static fallback and reduced-motion behavior before a build ships these effects.

## License and attribution
MIT covers the engine, components, and framework bindings. The visual design editor on shaders.com and platform features have separate terms. When copying source, keep the MIT notice and record the repo URL, source path, and license in `ATTRIBUTIONS.md`. Installing the npm package needs no copied source, but the project should still credit the library.
