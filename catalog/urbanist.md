---
id: urbanist
url: https://github.com/coreyhu/Urbanist
category: typography
tags: [typography, fonts, sans-serif, geometric, display, variable-font, multi-weight, open-source]
stack: [ttf, otf, woff2, variable-font]
license: OFL-1.1
status: surface-vetted
vetted: 2026-11-11
summary: Open low-contrast geometric sans in nine weights with italics, plus a variable font with weight and italic axes and ready woff2 files. A neutral display face for print and screen.
---

## Design character
"A low-contrast, geometric sans-serif inspired by Modernist design" built from elementary shapes, described by its author as a versatile display font (README). One of the seven "clean fonts" saved in `vault/Fonts/wisepixel-7-clean-fonts.md`. Not verified: how it looks rendered.

## Best for
Headlines and interface text on a clean, neutral, modern product where italics are needed. Dark screens with one glowing accent, where a plain geometric face keeps the attention on the glass and the accent.

## Avoid when
The brief wants a condensed, sporty, or heavy scoreboard headline (use `archivo`), or dense long-form reading.

## What's inside
- `fonts/variable/`: `Urbanist[wght].ttf`, `Urbanist-Italic[wght].ttf`, and `Urbanist[ital,wght].ttf`.
- `fonts/webfonts/`: 18 static woff2 files (nine weights, upright and italic) and `Urbanist[ital,wght].woff2`.
- `fonts/ttf/`, `fonts/otf/`: static styles.
- `sources/`, `scripts/`, `Makefile`, `documentation/`.

## How to use
Self-host `fonts/webfonts/Urbanist[ital,wght].woff2` with `font-display: swap`; weight runs 100 to 900. The README also points to Google Fonts (v1.303) and to the repo's releases page.

## Gotchas
- One width only.
- The last commit is dated 2023-12-18.
- The combined `[ital,wght]` file uses an italic axis; check the target browsers handle it, or serve the separate upright and italic variable files.

## Overlaps and pairings
Overlaps with `outfit`; prefer `urbanist` when italics matter. `archivo` covers the condensed and grotesque side.

## Not verified yet
Rendering, language coverage, browser handling of the `ital` axis, and whether the Google Fonts version matches this repo. Nothing was built or run.

## License and attribution
SIL Open Font License 1.1 (`OFL.txt`, copyright 2024 The Urbanist Project Authors). No Reserved Font Name is declared. Free for commercial use, embedding, and self-hosting; not to be sold on its own; modified versions stay under the OFL. Keep `OFL.txt` with the files and record the repo URL, the files taken, and OFL-1.1 in `ATTRIBUTIONS.md`.
