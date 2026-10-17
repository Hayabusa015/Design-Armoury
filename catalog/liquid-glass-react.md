---
id: liquid-glass-react
url: https://github.com/rdev/liquid-glass-react
category: visual-effects
tags: [react, glassmorphism, liquid-glass, refraction, blur, springs, animated-components]
stack: [typescript, react]
license: MIT
status: surface-vetted
vetted: 2026-10-17
summary: React component that wraps any content in an Apple-style Liquid Glass panel: edge refraction, adjustable frost, chromatic aberration, and elastic hover and click response.
---

## Design character
Clear, refractive glass in the Apple Liquid Glass style: the backdrop bends at the panel edges, with adjustable frost, saturation, and a springy elastic feel on hover and click. Closest match so far to Matt's "clear glass you can see into, with a little bounce". Not verified: how it looks rendered, since nothing was run during vetting.

## Best for
Hero cards, floating nav bars, buttons, and modals sitting over rich imagery, video, or colourful gradients, where the glass is a showpiece.

## Avoid when
Safari and Firefox users matter and a plain frosted fallback has not been planned; the panel sits over a flat or dark-grey background (nothing to refract); the glass would hold dense reading text; many glass panels would appear on one screen.

## What's inside
One React component, `LiquidGlass`, that takes any children. Props include `displacementScale`, `blurAmount`, `saturation`, `elasticity`, `cornerRadius`, `overLight`, `onClick`, `mouseContainer`, and a `mode` of standard, polar, prominent, or shader. Effects listed in the README: edge bending, refraction, adjustable frost, chromatic aberration, hover and click effects.

## How to use
Install `liquid-glass-react` from npm, import the default `LiquidGlass`, and wrap the content you want on glass. Put it over a busy background. Tune `blurAmount` and `displacementScale` for taste.

## Gotchas
- The README says Safari and Firefox only partially support the effect, and the displacement will not be visible there. Design a frosted-blur fallback so those browsers still look intentional.
- The `shader` mode is described as the most accurate but not the most stable. Prefer standard unless the Inspector has checked it.
- 22 open issues at vetting time. Pin a version.
- Contrast against a moving backdrop is the build's job to check.

## Overlaps and pairings
- `shaders` also does glass, rendered with WebGPU; this one is DOM and SVG-filter based and simpler to drop in.
- Pairs with `motion` for entrance animation and with `lenis` for scroll feel.
- For the cheaper frosted look across a whole component set, see `shadcn-glass-ui`.

## Not verified yet
Last commit date, how it behaves on mid-range phones, performance with several panels, behaviour with `prefers-reduced-motion` and reduced transparency, and the full license text (the README and sidebar say MIT).

## License and attribution
MIT. Installing from npm needs no copied source, but credit the library. If source is copied, keep the notice and record repo URL, path, and license in `ATTRIBUTIONS.md`.
