# Design Armory

A Claude Code plugin that gives every UI build the same disciplined process: pick the right design resources from a curated arsenal, blueprint the UI, build it, and audit it with an agent that did not build it.

The repo is named `Design-Armoury`; the plugin is `design-armory`.

## The crew

| Agent | Role | Writes code? |
| --- | --- | --- |
| **Commander** (`/design-armory:armory`) | Runs the pipeline, talks to you, makes the final call | No |
| **Quartermaster** | Reads `INDEX.md`, picks the 2-3 repos that fit the brief, puts their real files in reach | No |
| **Draftsman** | Writes the blueprint: pages, components, tokens, layout rules, testable acceptance criteria | No |
| **Smith** | Builds in your project from the blueprint and nothing else | Yes, in the project only |
| **Inspector** | Audits the build for blueprint fidelity, accessibility, responsiveness, performance, and licensing | No |
| **Appraiser** (`/design-armory:intake`) | Vets a new repo and writes its index entry | Index only |

Flow: Quartermaster, then Draftsman, then one checkpoint with you, then Smith, then Inspector. A failed audit goes back to the Smith for at most two rounds.

## Install

```
/plugin marketplace add Hayabusa015/Design-Armoury
/plugin install design-armory@design-armory
```

Restart the session afterwards.

## Use

**Build something:** from your project repo, run

```
/design-armory:armory a landing page for a youth softball league, bold and sporty, mobile first
```

Working files go in `.armory/` in your project. `blueprint.md` is worth committing; the rest is scratch.

**Add a repo to the arsenal:** open a session in this repo (the checkout, not the installed plugin) and run

```
/design-armory:intake https://github.com/owner/repo
```

The Appraiser reads the repo, establishes its license, and writes an entry in `INDEX.md`. A repo with no usable license is rejected, not added.

## How resources are used

`INDEX.md` stores links and notes, not code. At build time the Quartermaster shallow-clones only the picked repos into the plugin's data folder (`${CLAUDE_PLUGIN_DATA}/vendor/`) and reads the real files. The arsenal and that cache are read-only during a build; everything is written to your project, with attribution recorded in `ATTRIBUTIONS.md`.

Entries are marked `surface-vetted` (read from the repo page) or `deep-vetted` (cloned and something was built or run). Treat the difference seriously.

## Updating

The plugin has no `version` in its manifest on purpose, so every push to `main` counts as a new version. Installed copies are snapshots and do not change until updated:

```
claude plugin marketplace update design-armory
claude plugin update design-armory@design-armory
```

Then restart the session (or run `/reload-plugins`). Third-party marketplaces do not auto-update by default; turn that on under `/plugin`, Marketplaces, Enable auto-update, if you want it.

## Layout

```
.claude-plugin/plugin.json        plugin manifest
.claude-plugin/marketplace.json   makes this repo installable as a marketplace
agents/                           the five subagents
skills/armory/                    the Commander (build pipeline)
skills/intake/                    repo intake
standards/                        baseline rules, blueprint template, inspector checklist, index entry template
INDEX.md                          the arsenal
```

Tune `standards/` to change how every agent behaves without touching the agents.
