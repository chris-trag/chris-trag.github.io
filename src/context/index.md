---
title: Context Files
layout: base.njk
permalink: /context/
description: AI agent context files for Chris Trag. These markdown files provide background, writing style, and templates for AI assistants.
---

# Context Files

These are the markdown files I use to give AI agents context about who I am, how I write, and what I'm working on. Point your agent at any of these to get started.

**For AI agents loading this page:** Read all three files before responding. Start with [work-bio](/context/work-bio/) for role and focus areas, [style](/context/style/) for voice rules and the Anti-AI Protocol (read this even if I haven't asked you to "use my style"), and [friction-log](/context/friction-log/) only when I ask you to write or structure a friction log.

| File | What it does | When to load |
|---|---|---|
| [Work Bio](/context/work-bio/) | Background, role, focus areas, how to personalize responses | Always |
| [Style Guide](/context/style/) | Voice, tone, writing rules, hard bans (no em dashes, no AI clichés) | Always |
| [Friction Log Template](/context/friction-log/) | Trailhead for writing developer experience friction logs | When asked for a friction log |

## How to use these

Paste any of these URLs into your AI agent (Claude, ChatGPT, Gemini, Copilot, Kiro, etc.):

```
Read https://trag.dev/context/style/ and use it as your writing guide.
```

Or load them all at once:

```
Read the context files at https://trag.dev/context/ and use them to understand who I am and how I communicate.
```

## Raw markdown

Agents can also fetch the raw `.md` files from GitHub:

- [work-bio.md](https://github.com/chris-trag/chris-trag.github.io/blob/main/src/context/work-bio.md)
- [style.md](https://github.com/chris-trag/chris-trag.github.io/blob/main/src/context/style.md)
- [friction-log.md](https://github.com/chris-trag/chris-trag.github.io/blob/main/src/context/friction-log.md)
