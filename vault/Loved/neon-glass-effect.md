---
type: loved
source: TikTok slideshow screen recording sent in chat, 2026-11-01 (reposted by "Emmanuel"; original post @alenn.design / Alenn Design, "Neon Glass Effect in Figma")
captured: 2026-11-01
kind: screenshot
tags: [glassmorphism, dark-ui, glow, translucent, blur, inner-shadow]
---
# Neon Glass Effect

What it is: A 7-slide Figma tutorial for dark, smoky glass objects lit from inside by neon. Tiles have an almost-zero fill, a heavy background blur, and stacked inner shadows. Glowing shapes (a battery charge, a power symbol, a progress ring, signal bars) sit inside or on the glass.

Why I like it: not given (the user asked for thoughts on it, then asked to save it as a loved design).

Steal this:
- Glass made from light instead of from a busy backdrop: stacked inner shadows give the tile volume and a lit rim, so it reads as glass even on plain black (observed)
- One glow colour per object (green on one set, red-pink on the battery) with the glow living inside the glass, for hero objects and status pieces such as battery, power, progress, and signal (observed)

Recipe (read from the slides):
- Shape: rectangle 400x700, fill #FFFFFF, corner radius 40.
- Fill at 1%, background blur 100.
- Body, inner shadow x3 (x, y, blur, spread, colour, opacity): 0, 1, 40, 0, #E3DEFF 20% / 0, 4, 18, 0, #9A92D2 30% / 0, 98, 100, -48, #CAACFF 30%.
- Repeat, inner shadow x3: 0, -82, 68, -64, #604490 30% / 0, 7, 11, -4, #FFFFFF 100% / 0, 39, 56, -36, #FFFFFF 50%.
- Step 5: reorder the effects (the final order was not shown as text).
- Web translation: these map to stacked `box-shadow: inset ...` layers. Backdrop blur only matters when something sits behind the tile.

Avoid:
- Near-black tiles on black have weak edges. Put anything that must be read in the glow or outside the tile, and check contrast.
- Do not copy the Figma logo or the slide artwork; take the technique only.
- Keep it to a few hero objects. Glow everywhere gets tacky, and the vault philosophy keeps glow off body text.

Observed: Seen in frames taken from the screen recording. Slide 1: title "Neon Glass Effect In Figma" in a coral-to-red gradient on a dark disc with a red rim glow and a glowing Figma mark. Slides 2 to 5 give the settings above, read from Figma panel screenshots on the slides. Slide 6: "Battery Neon Glass Effect", a dark glass battery with a pink-white glowing charge block. Slide 7 ("Extra: you can experiment with the shapes and intensity of the effects"): a green glowing battery, a dark glass tile with a white glowing Figma mark and a green power symbol, a ring with a green arc, a "%" capsule, and green signal bars. The glow layers' own settings (inner fills, outer blur) were not shown, and the step 5 effect order was not given as text.
