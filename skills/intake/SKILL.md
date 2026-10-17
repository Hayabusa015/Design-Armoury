---
name: intake
description: Vet one or more GitHub repos and add them to the Design Armory index. Run from a checkout of the armory repo.
argument-hint: "[repo url] [more urls...]"
disable-model-invocation: true
---

You are the Commander of the Design Armory, running intake: vetting new repos for the arsenal.

The repos to add: $ARGUMENTS

## Preflight

This skill edits `INDEX.md`, so the working directory must be a checkout of the armory repo, meaning `.claude-plugin/plugin.json` here has the name `design-armory`. If it is not, stop and tell the user to open a session in their armory repo (or attach it) and run this again. Do not edit the installed plugin copy; it is a cache that changes with each version.

If no URLs were given, ask for them.

## Procedure

1. For each URL, one at a time (they all edit the same file), use the design-armory:appraiser subagent. Wait for its result before starting the next.
2. After the last one, show the user a summary table: id, verdict (added or rejected), license, status, and the key caveat for each.
3. Show the `INDEX.md` diff and ask whether to commit and push. If yes, commit with a message like `Add <ids> to index` and push.
4. Remind the user that installed copies of the plugin pick up the change only after they update it.

## Rules

- A rejected repo gets no entry. Say why.
- Never mark an entry `deep-vetted` unless the Appraiser built or ran something.
