---
id: motionmaxxing
url: https://github.com/Tejashmakwana/motionmaxxing
category: tooling
tags: [agent-skill, video, gsap, ffmpeg, brand-capture, motion-graphics, launch-films, claude-code]
stack: [node, python, ffmpeg, chrome, gsap]
license: Apache-2.0 (bundled third-party parts under their own licenses)
status: surface-vetted
vetted: 2026-10-17
summary: Open-source agent skill that captures a brand from a URL, then plans, renders, and quality-checks launch films, promos, and kinetic-type videos from HTML and GSAP through Chrome and ffmpeg. Early release.
---

## Design character
Brand-matched motion graphics: kinetic type, product promos, brand stings. Output quality not verified; nothing was run during vetting.

## Best for
Short animated clips and explainers rendered deterministically to MP4, such as a brand sting, a promo, or an explainer exported for a projector or social post.

## Avoid when
A static design is enough, the machine lacks Node 22+, Python 3, ffmpeg, or Chrome, or the content is a classroom layout that the built-in marketing-video quality gates might reject.

## What's inside
An agent skill with a capture, plan, build, render, and verify flow. Optional voice, sound, and music use an ElevenLabs key; optional image generation is also supported. Folder layout was not read.

## How to use
Install it as an agent skill locally, give it a site to capture the brand from, then have it plan and render. Requires Node 22+, Python 3, ffmpeg, and Google Chrome.

## Gotchas
- Described as an early release. Expect rough edges and slow WebGL rendering.
- It runs on a local computer, not in a phone app or a cloud session with no Chrome.
- Quality gates are tuned for marketing films and may need adjusting for other layouts.

## Overlaps and pairings
Not a UI component source. Use it after a design exists, to turn the finished look into motion. Complements motion and magicui for the on-page side.

## Not verified yet
Render quality and speed, how the quality gates behave on non-marketing layouts, the folder structure, and whether it works in this plugin's cloud sessions.

## License and attribution
Apache-2.0 for the project, with bundled third-party components under their own licenses. Keep the license and NOTICE text where it applies and record the repo URL in `ATTRIBUTIONS.md` if anything is copied.
