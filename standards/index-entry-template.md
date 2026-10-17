# Index entry template

Copy this block into `INDEX.md`, alphabetical by id. The id is a short lowercase slug and doubles as the vendor cache folder name.

```markdown
## <id>

- **URL:** <https url>
- **Type:** <component library | icon set | animation | design system | template | CSS framework | asset pack | reference>
- **Summary:** <what it actually contains, two or three sentences>
- **Best for:** <concrete situations where it is the right pick>
- **Avoid when:** <concrete situations where it is the wrong pick>
- **Stack:** <languages, frameworks, build tooling>
- **Key paths:** <folders or files worth taking>
- **Consume as:** <npm install | copy files | reference only, with the command if there is one>
- **License:** <exact SPDX name; what it requires; any carve-outs such as paid tiers or separately licensed assets>
- **Status:** <surface-vetted | deep-vetted> (<date>). <what was actually read or run>
- **Not verified yet:** <honest list of unknowns that affect use>
- **Notes:** <maintenance signals, pinning advice, contribution rules, anything else that matters>
```

## Rules

- Every field is filled from evidence the Appraiser actually read. Unknowns go in "Not verified yet", never guessed.
- No license, or a license that forbids reuse: no entry.
- `deep-vetted` requires that the repo was cloned and something was built or run. Say what.
- Keep "Best for" and "Avoid when" specific enough that the Quartermaster can match them to a brief.
