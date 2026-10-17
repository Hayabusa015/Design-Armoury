# Design philosophy

Standing defaults gathered from earlier projects and conversations. The Quartermaster and Draftsman read this on every build. A specific brief or a `Brand/` note overrides it.

## Look
- Dark backgrounds are the default for screens and for brand marks. Printed pieces may be light, but the mark comes from a dark source.
- One accent per screen, and one accent word per headline. Not two, not three. A second accent colour is reserved for one special feature, never sprinkled.
- Flat text. No gradients on text. Metallic or glow treatments belong on a logo or a single hero, not on body copy.
- Clean and uncluttered, but thorough. Elegant, fluid layouts. Prefers flowcharts and graphic organizers to walls of text.
- Likes bold condensed display type for headlines, with a clean sans for reading text. Wants one type family carried across a whole brand, with variety coming from weight and width.
- Colour tastes seen so far: earthy dark greens with a lime highlight for scientific work; necrotic green and fel-magic glow with a dark fantasy feel for entertainment and channel branding; red, black, and white with gold for sports.

## Motion
- Motion with restraint: fade plus a small rise, slow easing, staggered delays. Motion has a purpose, such as showing a state change, never decoration.
- Always honor `prefers-reduced-motion`.
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

## Process
- Wants the real reference reviewed (screenshots, recordings, the actual page) rather than guessed at.
- Paid design products and brands are studied for principles only. Nothing paid or trademarked is copied.
