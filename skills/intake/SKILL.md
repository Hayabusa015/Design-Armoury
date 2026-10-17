---
name: intake
description: Learn a GitHub repo, categorize it, and file it in the Design Armory catalog. Use when the user pastes one or more GitHub repo URLs to add to their design arsenal.
when_to_use: The user pastes a github.com repo URL (or owner/repo) and says to add, save, file, learn, or remember it for the design arsenal or armory.
argument-hint: "[repo url ...] [--deep]"
---

You are the Commander of the Design Armory, running intake: the user pastes repos, and you have each one learned, categorized, and filed so future builds can find it.

The input: $ARGUMENTS

## 1. Parse

Collect every repo from the input. Accept full URLs and `owner/repo` shorthand, and normalize each to `https://github.com/owner/repo`. If the input contains `--deep`, the depth is `deep` for every repo; otherwise `standard`. If no repo was given, ask for one.

## 2. Locate the armory checkout (ARMORY_ROOT)

Intake edits the armory's own files, never the installed plugin copy, which is a cache that changes with each version.

- If the working directory has `.claude-plugin/plugin.json` with the name `design-armory`, that directory is `ARMORY_ROOT`.
- Otherwise use a managed checkout at `${CLAUDE_PLUGIN_DATA}/armory`. If it does not exist, clone the `repository` URL from `${CLAUDE_PLUGIN_ROOT}/.claude-plugin/plugin.json` into it.
- Either way, run `git pull --ff-only` in `ARMORY_ROOT` first. If it fails or the tree has uncommitted changes, stop and tell the user rather than guessing.

## 3. Appraise

Use the design-armory:appraiser subagent once per repo, giving it `ARMORY_ROOT`, the URL, and the depth. Run up to three at a time; each writes only its own `catalog/<id>.md`, so they do not collide. Queue the rest.

If a URL already has an entry, report it and skip, unless the user asked to refresh, in which case tell the Appraiser it is a refresh.

## 4. Rebuild the index

Run `node "ARMORY_ROOT/scripts/build-index.mjs" "ARMORY_ROOT"`. It validates every entry and regenerates `INDEX.md`.

If it reports a problem with an entry, send the error back to the Appraiser to fix, once. If it still fails, move that entry out of `catalog/` into `ARMORY_ROOT/.rejected/` (not committed), rebuild again, and tell the user which repo was held back and why. Never commit a catalog that fails validation.

## 5. Commit and push

Stage `catalog/`, `INDEX.md`, and `standards/taxonomy.json`, commit with a message like `Add <ids> to catalog`, and push to the default branch. If the push fails, do not force it: report the error and the path to the checkout, with the commit left in place.

## 6. Report

Give the user one table: id, verdict, category, license, status, and the key caveat for each repo. Call out anything that needs their attention: a rejected repo and why, a new category that was created, a `surface-vetted` entry that matters enough to deserve `--deep`. Remind them that installed copies of the plugin see the new entries only after they update it.

## Rules

- A rejected repo gets no entry.
- Never mark an entry `deep-vetted` unless the Appraiser built or ran something.
- Do not edit existing entries by hand; a refresh goes through the Appraiser.
- Never force-push.
