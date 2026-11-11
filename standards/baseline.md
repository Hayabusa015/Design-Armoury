# Baseline standards

These apply to every Design Armory build. The Draftsman writes them into the blueprint, the Smith builds to them, and the Inspector checks against them. Tune them here and every agent follows.

## Accessibility (target: WCAG 2.2 AA)

- Text contrast at least 4.5:1; large text and UI component boundaries at least 3:1. Check every text/background pair in the token set.
- Everything operable by keyboard, in a logical order, with a visible focus indicator (at least 2px, 3:1 against adjacent colors).
- Semantic landmarks and one `h1`, with headings in order. Form controls have programmatic labels; errors are described in text.
- Never convey information by color alone. Images have meaningful alt text or are marked decorative.
- Touch targets at least 44x44 CSS px (the WCAG 2.2 AA floor is 24px; 44 is the working standard here).
- Honor `prefers-reduced-motion`: animation stops or becomes a simple fade, and nothing flashes more than three times per second.

## Mobile first

- Design at 360 to 390px wide first, then scale up. No horizontal scroll at 320px.
- Verify at 320, 390, 768, 1024, and 1440.
- Fluid type and spacing; no fixed pixel widths on containers.

## Tokens

- One source of truth: CSS custom properties or the project's theme file.
- Tokens are named by role (`--color-surface`, `--color-text`, `--color-accent`), not by value.
- Spacing on a 4px or 8px scale; a defined type scale; defined radius, shadow, and motion-duration sets.
- No magic numbers in components. If a value is not a token, it needs a reason.
- If light and dark themes are in scope, both are specified and both pass contrast.

## Performance

- Targets: LCP under 2.5s, CLS under 0.1, INP under 200ms on a mid-range phone.
- Images sized and lazy-loaded below the fold; fonts use `font-display: swap`; at most two font families.
- GPU or canvas effects (shaders, WebGL, WebGPU) must have a static fallback, pause when offscreen, and stop under reduced motion.

## Motion

- Motion has a purpose: orientation, feedback, or emphasis. UI transitions (hover, focus, press) run 150 to 300ms.
- Larger moves may run longer, up to about 500ms: an entrance, a scroll reveal, a panel or rail changing size.
- Spring or bounce is allowed on interactions and entrances. Keep the overshoot small, settle within the duration above, and never bounce text that is being read.
- Scroll reveals play once, as the element enters view. Content must be present and readable if the script never runs.
- No motion that blocks reading or input.

## Glass and transparency

Applies whenever a build uses translucent or blurred surfaces.

- Check text contrast on glass against the busiest part of the backdrop that can sit behind it, not against the panel fill alone. If it cannot pass, raise the fill opacity or move the text off the glass.
- Glass needs a backdrop worth blurring: a colourful, image, or gradient layer. Glass over a flat colour is a plain panel and should be built as one.
- A few key surfaces per screen are glass, not every card. Refraction or liquid-glass effects go on one hero element at most.
- Every glass surface has a solid fallback: where `backdrop-filter` is unsupported, and where the visitor asks for reduced transparency (`prefers-reduced-transparency`, in browsers that support it).
- Blur is costly. Do not animate the blur radius, avoid large stacked blurred layers, and check scrolling on a mid-range phone.

## Craft

- One aesthetic direction, committed to. Avoid the generic template look: default fonts, purple gradients on white, identical card grids.
- Real content shapes: empty, loading, error, and long-text states are designed, not left to chance.

## Licensing and attribution

- Copy code or assets only when the license allows it. Keep original license headers.
- Every copied file is recorded in `ATTRIBUTIONS.md` at the project root: repo URL, source path, license.
- Never copy paid-tier assets, brand logos, or trademarked material without clearance.
