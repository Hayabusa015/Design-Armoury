---
id: outfit
url: https://github.com/Outfitio/Outfit-Fonts
category: typography
tags: [typography, fonts, sans-serif, geometric, display, variable-font, multi-weight, open-source]
stack: [ttf, otf, woff2, variable-font]
license: OFL-1.1
status: surface-vetted
vetted: 2026-11-11
summary: Open geometric sans in nine weights (Thin to Black) with a variable weight font and ready woff2 files. A clean display and UI face; no italics.
---

## Design character
"A beautiful geometric sans" (the README's words), drawn as the brand typeface of outfit.io from a ligature-rich wordmark. One of the seven "clean fonts" saved in `vault/Fonts/wisepixel-7-clean-fonts.md`. Not verified: how it looks rendered.

## Best for
Headlines, logos, and UI text on a clean, modern, friendly product. A light, wide-tracked uppercase heading on a glass panel, as in `vault/Loved/frosted-glassmorphism.md`.

## Avoid when
The design needs italics (there are none), a condensed width, or long-form reading text where a geometric face tires the eye. For condensed headlines use `archivo`.

## What's inside
- `fonts/variable/`: `Outfit[wght].ttf` and `Outfit[wght].woff2`.
- `fonts/webfonts/`: nine static woff2 files, Thin to Black.
- `fonts/ttf/`, `fonts/otf/`: the same nine weights.
- `sources/`, `scripts/`, a `Makefile` (`make build`, `make test`, `make proof`).

## How to use
Self-host `fonts/variable/Outfit[wght].woff2` with `font-display: swap` and set `font-weight` from 100 to 900. It is also listed on Google Fonts.

## Gotchas
- No italic styles. A browser will fake a slant if `font-style: italic` is applied.
- One width only.
- The last commit is dated 2023-03-27 and the changelog stops at version 1.0 (2021), so it is stable but not actively developed.

## Overlaps and pairings
Overlaps with `urbanist`, the other geometric sans here: pick `urbanist` when italics are needed, `outfit` for the ligature-rich wordmark feel. `archivo` is the grotesque alternative with widths.

## Not verified yet
Rendering, language coverage, whether the Google Fonts version matches this repo, and the ligature set. Nothing was built or run.

## License and attribution
SIL Open Font License 1.1 (`OFL.txt`, copyright 2021 The Outfit Project Authors). No Reserved Font Name is declared. Free for commercial use, embedding, and self-hosting; not to be sold on its own; modified versions stay under the OFL. Keep `OFL.txt` with the files and record the repo URL, the files taken, and OFL-1.1 in `ATTRIBUTIONS.md`.
