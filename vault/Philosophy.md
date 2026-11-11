# Design philosophy

**Core look (in the user's own words, 2026-10-17):** a big fan of frosted glassmorphism, the clear-glass look with opacity where you can see into the background, with a nice little motion and bounce on websites and apps, and a nice scroll feel where things wheel up and appear as you scroll. That is the main idea of how they like things to look.

Standing defaults gathered from earlier projects and conversations. The Quartermaster and Draftsman read this on every build. A specific brief or a `Brand/` note overrides it.

## Look
- Frosted glass surfaces: translucent panels with a background blur, so the layer behind shows through. Pair with a rich, colourful or blurred background so the glass has something to refract. Keep text contrast real: check it against the blurred backdrop, not the panel alone.
- Glass recipe (from the glassmorphism repos in the catalog): a translucent fill, a backdrop blur, raised saturation, a hairline light border, and a soft shadow, over a colourful or image backdrop. Refraction (edges that bend the backdrop) is the premium version, so offer it where supported and fall back to plain frost in Safari and Firefox. Keep glass to a few key surfaces per screen, and test contrast and speed on a mid-range phone.
- Dark backgrounds are the default for screens and for brand marks. Printed pieces may be light, but the mark comes from a dark source.
- One accent per screen, and one accent word per headline. Not two, not three. A second accent colour is reserved for one special feature, never sprinkled.
- Flat text. No gradients on text. Metallic or glow treatments belong on a logo or a single hero, not on body copy.
- Clean and uncluttered, but thorough. Elegant, fluid layouts. Prefers flowcharts and graphic organizers to walls of text.
- Likes bold condensed display type for headlines, with a clean sans for reading text. Wants one type family carried across a whole brand, with variety coming from weight and width.
- Colour tastes seen so far: earthy dark greens with a lime highlight for scientific work; necrotic green and fel-magic glow with a dark fantasy feel for entertainment and channel branding; red, black, and white with gold for sports.

## Motion
- Wants a little life: a soft spring or bounce on interactions and entrances, and scroll-triggered reveals where content rises into place as it scrolls into view, with staggered timing.
- The study of one animation site found "motion with restraint" (fade plus a small rise, slow easing). Treat that as a guide to taste and amount, not a ban on bounce. Motion should still show a state change, not just decorate.
- Scroll feel: smooth scrolling (Lenis is the catalogued option) plus staggered reveals as sections enter view.
- Always honor `prefers-reduced-motion`, and offer a solid fallback when the user prefers reduced transparency.
- Calm tools (focus and productivity apps) get the least motion. Public marketing pages can take a few memorable moments, lazy-loaded, because many visitors are on phones.
- Likes a collapsible icon-rail sidebar: labels blur out first, then the rail narrows (about 0.45 s), with a sliding highlight on the active item.

## Print
- Anything printed in volume avoids solid full-bleed or full-width colour banners. Use thin accent lines, outlined boxes, or light tints.
- Design to survive greyscale: colour enhances the hierarchy, it never carries the information.
- Rich solid colour is fine on screen-only slides.

## Quality bar
- Accessible by default: real contrast, visible focus, keyboard operation, text alternatives, tap targets.
- Mobile first for anything public. Staff and admin tools get polish and accessibility, not flash.
- Prefers pinned, aged dependency versions over the newest release.
- New libraries are adopted one component at a time and mapped onto the existing theme tokens, never allowed to override them.

## Seen in your own built work
Read on 2026-11-11 from the code and design rules of the user's teaching-workspace app and its document system. These are things the user built or approved, not things they said in so many words, so treat them as strong signals and let a brief override them.

### Dark screen recipe
- One dark neutral is the base, and every surface (page, rail, panel, raised, input) is a stated mix of it with white or black. The ladder stays on one grey axis and never drifts.
- Shadows are darker than the surface they fall on, not a neutral grey. Each panel gets a hairline highlight along its top edge so it reads as lit.
- Interactive surfaces light up with a glow in the accent colour, defined once at three strengths (soft, mid, hot), so every hover and focus lights the same way.
- One piece of atmosphere per screen: a wide, very faint accent bloom behind the workspace, fixed so it does not travel with the scroll. This is also the backdrop the glass refracts.
- Corners are soft, not pill-shaped: about 8, 13, and 18px for small, standard, and large.

### Colour discipline
- A hex value is written in one token file and nowhere else. Stylesheets hold no colour literal; tints, rings, and glows are mixed from the tokens.
- Every colour is stored with its measured contrast on the light and dark grounds and its greyscale value. A colour without measurements is treated as a defect.
- A bright display colour is not a text colour. Each accent has a darker text-safe partner for type on a light ground; the bright one is for fills, rules, chips, and type on dark.
- The accent means something: it marks what an item belongs to and is never decoration. Warning, caution, and success colours keep their meaning even when they are not in the palette.

### Type details
- Small uppercase labels above headings, in the condensed face with wide tracking. Headings are heavy with slightly tight tracking.
- The open stand-in for Trade Gothic Next is Archivo with Archivo Narrow (both OFL). See `Fonts/trade-gothic-next.md` and the `archivo` catalog entry.

### Motion numbers
- Hover and focus changes run about 180 to 220ms on one shared ease-out curve. Under reduced motion every duration collapses to nothing.

### What "good" means
- The failure to avoid is "generic with no soul": work that looks templated or machine-made. The test is whether it looks like something a specific person made on purpose for a specific audience.
- Every visual element has a job: hierarchy, navigation, explanation, emphasis, identity, or comprehension. Filling an empty space is not a job.
- Density is clean and moderately full. "Beautiful but useless" and "a textbook page pasted in" both fail.
- Show the real thing: galleries and previews use real rendered output, not mock-ups.
- Anything a viewer reads as fact (numbers, labels, diagrams) is built by hand. Generated imagery is for atmosphere only.

## Process
- Wants the real reference reviewed (screenshots, recordings, the actual page) rather than guessed at.
- Paid design products and brands are studied for principles only. Nothing paid or trademarked is copied.
