# Design Armory Index

One entry per repo, in alphabetical order by id. The Quartermaster reads this file to pick resources for a build, so every entry is written to answer: when should this be used, when should it not, and what does using it cost.

Add entries with `/design-armory:intake <url>`, which vets the repo and writes the entry for you. The format is defined in `standards/index-entry-template.md`.

**Status values**
- `surface-vetted`: read from the repo page and README only
- `deep-vetted`: cloned, and something was actually built or run

---

## shaders

- **URL:** https://github.com/shader-effects-inc/shaders
- **Type:** Animated visual effects library (WebGPU)
- **Summary:** A library of 200+ shader effects packaged as components: gradients, noise, glass, metal, distortions, transitions, blurs, and cursor effects. Effects can be nested, blended, and masked through a declarative API. Custom effects are written in WGSL.
- **Best for:** Hero backgrounds, animated gradients, glass and metal surfaces, page or section transitions, cursor-reactive effects, and other places where a motion-rich visual is the centerpiece.
- **Avoid when:** The audience may be on browsers without WebGPU and no fallback is planned; the page must be extremely light; the effect would sit under dense reading text; the design needs to be fully static or print-first.
- **Stack:** TypeScript, WebGPU, WGSL. Bindings for React, Vue, Svelte, Solid, plain JS, and Framer. Monorepo built with pnpm and Turbo.
- **Key paths:** `packages/core/src/shaders/<component>/` (one folder per effect), `packages/` (framework bindings, generated from core)
- **Consume as:** npm package. `npm install shaders`, then import from the framework entry point, for example `shaders/react`. A CLI (`npx shaders connect | install | update`) and an MCP server are also offered.
- **License:** MIT, covering the engine, components, and framework bindings. The visual design editor on shaders.com and platform features have separate terms. A paid "Shaders Pro" tier adds presets, sections, and Framer integration; do not copy or reproduce Pro content.
- **Status:** surface-vetted (2026-10-17). Read from the repo page only.
- **Not verified yet:** WebGPU browser support and fallback behavior, bundle size, performance on mid-range phones, and how reduced-motion is handled. The Inspector must check a static fallback and `prefers-reduced-motion` before any build ships these effects.
- **Notes:** Young, small repo (41 stars when vetted), so pin a version and re-check before relying on it for client work. Contributors are asked to open an issue before submitting anything beyond a bug fix.
