---
type: loved
source: attachment glass-folder-cards.tsx (a React component pasted in chat; origin link and license not given)
captured: 2026-10-20
kind: component
tags: [glassmorphism, frosted-glass, spring-motion, blur, folder-ui, scroll-reveal]
---
# Glass Folder Cards

What it is: A self-contained React component that draws a folder as a layered object: a back panel with generated artwork, the files inside, and a frosted-glass front panel that blurs whatever is behind it.

Why I like it: I really like this if I need a folder structure on a website.

Steal this:
- A folder or file-structure UI built as real layers (back panel, files, frosted front) so the glass actually blurs the files as they move, not a picture of a folder. (observed)
- Hover leans the glass panel toward you on its bottom hinge; click opens it and the files rise out and fan, each one a button with its name. (observed)
- A spring-style overshoot easing on the open and hover motion, and a staggered entrance that assembles each folder the first time it scrolls into view. (observed)
- A frosted menu and `+` add key that are fully keyboard-operable (Escape closes, arrow keys move in the menu). (observed)
- Light "milk glass" and dark "smoked glass" tones from one prop. (observed)

Avoid:
- Do not copy the code into a build until the origin and license are known. None was given with the attachment.
- It paints generated artwork into canvases (spread over frames and cached); with many folders on one page, check performance on a mid-range phone.
- Backdrop blur needs a backdrop worth blurring; check text contrast on the glass.

Observed: From reading the code, not from seeing it rendered. Backdrop blur about 22px with saturation 1.5 on the front panel, a spring cubic-bezier easing, an IntersectionObserver entrance with a per-folder delay for staggering, reduced-motion handling that turns animation off, ARIA expanded state, and `inert` on closed files. Five built-in artwork presets (aurora, ember, dusk, glacier, verdant) plus custom recipes and own images. Demo shows three folders on a dotted background. The code uses fixed 340 by 272 geometry scaled to a `width` prop, and a typing that needs a recent TypeScript.
