---
id: archivo
url: https://github.com/Omnibus-Type/Archivo
category: typography
tags: [typography, fonts, sans-serif, grotesque, condensed, variable-font, multi-weight, open-source]
stack: [ttf, otf, woff2, variable-font]
license: OFL-1.1
status: surface-vetted
vetted: 2026-11-11
summary: Open grotesque sans in nine weights and six widths (Extra Condensed to Expanded) with italics, plus a variable font with width and weight axes. One family that covers display and body.
---

## Design character
A grotesque with a late-nineteenth-century feel (the README's words), made for print and screen together. Because width is an axis, the same family gives heavy condensed headlines and a plain reading weight, which is the "one family, variety from weight and width" rule in `vault/Philosophy.md`. Not verified: how it looks rendered; the sample images in the repo were not opened.

## Best for
A brand that wants a single typeface for everything: condensed bold for headlines and labels, regular for body, condensed for tables and data. A free stand-in when the chosen brand face is a commercial grotesque such as Trade Gothic Next and the build has no web licence for it.

## Avoid when
The brief wants a rounded, geometric, or friendly feel (see `outfit` and `urbanist`), or a serif or script.

## What's inside
- `fonts/variable/`: `Archivo[wdth,wght].ttf` and `Archivo-Italic[wdth,wght].ttf`.
- `fonts/ttf/`, `fonts/otf/`, `fonts/webfonts/` (woff2): 108 static styles, six widths (ExtraCondensed, Condensed, SemiCondensed, normal, SemiExpanded, Expanded) by nine weights (Thin to Black), each with an italic.
- `sources/`: the design sources. `AAA/`: a second copy of the project tree, purpose not stated.
- The README says the family supports over 200 languages.

## How to use
Self-host the woff2 files (or the variable TTF converted to woff2) with `font-display: swap`, and name weight and width through `font-weight` and `font-stretch`. Load only the styles the blueprint names; the full static set is 108 files.

## Gotchas
- The repo ships no variable woff2, only variable TTF. Convert it, or serve static woff2 files.
- Archivo Narrow is a separate family and is not in this repo.
- 108 static styles: loading many of them costs page weight. Prefer the variable file when more than three or four styles are needed.

## Overlaps and pairings
The only grotesque in the catalog. `outfit` and `urbanist` are geometric alternatives for a softer look. Pairs with the glass component entries (`shadcn-glass-ui`, `glace`) where a condensed uppercase label sits on a glass panel.

## Not verified yet
Rendering quality at small sizes, the size of the converted variable woff2, whether Google Fonts serves the same version, and what the `AAA/` folder is for. Nothing was built or run.

## License and attribution
SIL Open Font License 1.1 (`OFL.txt`, copyright 2020 The Archivo Project Authors). No Reserved Font Name is declared. The fonts may be used, embedded, and self-hosted commercially, but not sold on their own, and a modified version must stay under the OFL. Keep `OFL.txt` with the font files and record the repo URL, the files taken, and OFL-1.1 in `ATTRIBUTIONS.md`.
