# Design Armory

A Claude Code plugin that gives every UI build the same disciplined process: pick the right design resources from a curated arsenal, blueprint the UI, build it, and audit it with an agent that did not build it.

The repo is named `Design-Armoury`; the plugin is `design-armory`.

## Paste a repo, it's filed

```
/design-armory:intake https://github.com/owner/repo
```

Paste one URL or many (`owner/repo` shorthand works too), from any project. For each repo, an Appraiser:

1. **Learns it:** reads the README, maps the structure, reads representative source and examples, and establishes the exact license and any carve-outs such as paid tiers.
2. **Categorizes it:** one category from `standards/taxonomy.json`, reusing existing tags, and notes how it overlaps with entries already in that category.
3. **Files it:** writes a full entry at `catalog/<id>.md`.

Then the index is regenerated and validated by `scripts/build-index.mjs`, and the result is committed and pushed. A repo with no usable license is rejected rather than filed. Add `--deep` to also install and build or run something, which earns the `deep-vetted` status.

Intake works from any directory. Outside a checkout of this repo it keeps its own managed checkout in the plugin's data folder.

## Save a design you love

```
/design-armory:love https://example.com  the oversized type and the way the nav hides on scroll
```

Give it a link (or a screenshot path) and say what you like, typed or dictated. The Curator reads the page, keeps your words as you said them, and files a note in your Obsidian "Design Taste" vault under `Loved/` (or `Fonts/` when the link is about typefaces, with where to get each font and its license, or `unknown`), checked by `scripts/check-note.mjs`. It tags design qualities, reuses tags you already have, and separates what you said from what it observed. It only reads page text, so it marks anything it could not see as unverified. TikTok and other pages the fetch tool is blocked from are read through your Apify connector, if you have it (small cost per run). A github.com link can also go through `/design-armory:intake`.

By default your notes are stored in this repo's `vault/` folder and pushed to GitHub automatically, so they follow you to every machine and session. **This repo is public, so do not save private or personal details.** Open `vault/` as an Obsidian vault on any computer to browse them (free).

Or use your own vault folder instead, once per computer:

```
claude plugin configure design-armory
```

Set `vault_path` to that folder. Either way, the Quartermaster and Draftsman read the vault (never write) at the start of a build: `Brand/` notes for a named brand, and matching `Loved/` notes as taste signals, cited by filename.

Limits: filing needs a Claude Code session (any device, including a cloud one) that can push to the repo. A vault that lives only on your phone is out of reach. With your own `vault_path` the first write outside your project may ask for permission.

## Find it again

`INDEX.md` is a generated, compact table grouped by category, with tags, stack, license, and vetting status. When a build starts, the Quartermaster scans it, shortlists candidates, reads only those full entries, then shallow-clones just the picked repos and reads the real files. So the arsenal can grow large without every build paying for all of it.

## The crew

| Agent | Role | Writes code? |
| --- | --- | --- |
| **Commander** (`/design-armory:armory`) | Runs the build pipeline, talks to you, makes the final call | No |
| **Quartermaster** | Scans the index, reads finalist entries, picks the 2-3 repos that fit the brief, puts their real files in reach | No |
| **Draftsman** | Writes the blueprint: pages, components, tokens, layout rules, testable acceptance criteria | No |
| **Smith** | Builds in your project from the blueprint and nothing else | Yes, in the project only |
| **Inspector** | Audits the build for blueprint fidelity, accessibility, responsiveness, performance, and licensing | No |
| **Appraiser** (`/design-armory:intake`) | Learns, categorizes, and files a new repo | Catalog only |
| **Curator** (`/design-armory:love`) | Files a design you love, in your words, into your Obsidian vault | Vault `Loved/` only |

Build flow: Quartermaster, then Draftsman, then one checkpoint with you, then Smith, then Inspector. A failed audit goes back to the Smith for at most two rounds.

## Build something

From your project repo:

```
/design-armory:armory a landing page for a youth softball league, bold and sporty, mobile first
```

Working files go in `.armory/` in your project. `blueprint.md` is worth committing; the rest is scratch. The arsenal and the vendor cache are read-only during a build; everything is written to your project, with attribution recorded in `ATTRIBUTIONS.md`.

## Install

```
/plugin marketplace add Hayabusa015/Design-Armoury
/plugin install design-armory@design-armory
```

Restart the session afterwards.

## New repos show up in builds immediately

Each `/design-armory:armory` run first pulls the live catalog from GitHub into a managed checkout, so a repo added with `/design-armory:intake` is available to the next build on any machine, with no plugin update. If the machine is offline, the build falls back to the installed copy and says so.

## Updating

The plugin has no `version` in its manifest on purpose, so every push to `main` counts as a new version. Installed copies are snapshots and do not change until updated, so changes to the agents, skills, and standards reach a machine only after (catalog entries do not wait for this; see above):

```
claude plugin marketplace update design-armory
claude plugin update design-armory@design-armory
```

Then restart the session (or run `/reload-plugins`). Third-party marketplaces do not auto-update by default; turn that on under `/plugin`, Marketplaces, Enable auto-update, if you want it.

## Trust levels

Entries are marked `surface-vetted` (read from the repo page and files) or `deep-vetted` (cloned, with something built or run). Each entry also has a "Not verified yet" section. Treat both seriously: the Quartermaster carries unverified items into the loadout as risks, and the Inspector checks them.

## Layout

```
.claude-plugin/plugin.json        plugin manifest
.claude-plugin/marketplace.json   makes this repo installable as a marketplace
agents/                           the six subagents
skills/armory/                    the Commander (build pipeline)
skills/intake/                    paste-a-repo intake
skills/love/                      save a loved design or font to your taste vault
vault/                            your taste notes (Loved, Fonts, Brand, Inbox); open as an Obsidian vault
catalog/<id>.md                   one full entry per repo (the source of truth)
INDEX.md                          generated from catalog/, do not edit by hand
scripts/build-index.mjs           validates entries, regenerates INDEX.md (Node, no dependencies)
scripts/check-note.mjs            validates taste notes the Curator writes
standards/                        baseline rules, taxonomy.json, catalog entry template, blueprint template, inspector checklist
```

Tune `standards/` to change how every agent behaves without touching the agents. To check the catalog yourself: `node scripts/build-index.mjs --check`.
