# Inspector checklist

The Inspector works through this list after the blueprint's own acceptance criteria. Cite item ids in findings. Mark each item pass, fail, or not verified, and say why for anything not verified.

## Blueprint fidelity
- **BP-1** Every page and route in the blueprint exists.
- **BP-2** Every inventory component exists and uses its stated source.
- **BP-3** Token values in code match the blueprint, and no stray hard-coded colors or sizes bypass the tokens.
- **BP-4** Every state in the blueprint (empty, loading, error, long content) is implemented.
- **BP-5** Any deviations are recorded in `.armory/deviations.md` and are reasonable.

## Accessibility
- **A11Y-1** Contrast meets the thresholds for every text/background pair, in every theme.
- **A11Y-2** Full keyboard operation with a visible focus indicator and a logical tab order.
- **A11Y-3** Semantic landmarks, one `h1`, ordered headings, labelled form controls, text error messages.
- **A11Y-4** Images have alt text or are marked decorative; no information is conveyed by color alone.
- **A11Y-5** Touch targets are at least 44x44 CSS px.
- **A11Y-6** `prefers-reduced-motion` is honored everywhere there is motion.

## Responsive
- **RWD-1** No horizontal scroll at 320px.
- **RWD-2** Layout holds at 320, 390, 768, 1024, and 1440 and matches the blueprint's per-breakpoint rules.
- **RWD-3** Text stays readable and tap targets stay usable on the narrowest breakpoint.

## Performance
- **PERF-1** Images are sized and lazy-loaded where appropriate; fonts use `font-display: swap`; at most two families.
- **PERF-2** GPU or canvas effects have a static fallback, pause offscreen, and stop under reduced motion.
- **PERF-3** No obviously heavy dependency was added for a small gain. Note bundle impact if it can be measured.

## Code health
- **CODE-1** Build, lint, and type check pass (or the project has none, and that is noted).
- **CODE-2** No secrets, no dead copied code, no leftover debug output.

## Licensing
- **LIC-1** Every file copied from the vendor cache has an `ATTRIBUTIONS.md` entry.
- **LIC-2** Each entry's license matches the one recorded in the repo's `catalog/` entry, and original license headers are intact.
- **LIC-3** No paid-tier, brand, or trademarked assets are present.

## Verdict rules
- Any blocker, or any failed acceptance criterion: FAIL.
- Majors with no blockers: PASS WITH NOTES, but only if none concern accessibility or licensing. Those are FAIL.
- Otherwise: PASS.
- Always list what was not verified.
