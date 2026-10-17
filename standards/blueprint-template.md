# Blueprint template

The Draftsman writes `.armory/blueprint.md` in the project using exactly these sections, in this order.

```markdown
# Blueprint: <project name>

## 1. Goal and audience
<what this UI is for, who uses it, what success looks like, in a few sentences>

## 2. Aesthetic direction
<one sentence that every token below must serve>

## 3. Pages and routes
| Route | Purpose | Key sections |
| --- | --- | --- |

## 4. Component inventory
| Component | Used on | Source |
| --- | --- | --- |
Source is a loadout repo and path (for example `shaders: packages/core/src/shaders/glass`), or `custom`.

## 5. Design tokens
### Color
| Role | Light | Dark (if in scope) | Notes |
| --- | --- | --- | --- |
Include the contrast ratio for each text/background pair.
### Type
Families, scale in rem, weights, line heights.
### Spacing, radius, shadow, motion
Concrete scales and values.

## 6. Layout rules
Per breakpoint, mobile first: grid, gutters, max widths, what reflows and how.

## 7. States
Empty, loading, error, and long-content behavior for each data-driven component.

## 8. Accessibility specifics
The baseline items that need project-specific decisions (focus style, reduced-motion behavior, landmark structure).

## 9. Acceptance criteria
1. <numbered, testable, checked literally by the Inspector>

## 10. Out of scope
<ideas considered and deliberately left out>
```

## Writing good acceptance criteria

- Testable: a measured value, a visible behavior, or a command that passes.
- Specific: "body text has at least 4.5:1 contrast on every surface" rather than "readable".
- Complete: cover layout at each breakpoint, each state in section 7, reduced-motion, keyboard flow, and attribution.
