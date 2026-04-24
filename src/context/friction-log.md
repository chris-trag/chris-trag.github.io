---
title: Friction Log Guide
layout: base.njk
permalink: /context/friction-log/
description: AI context file - trailhead for writing developer experience friction logs.
---

# Friction Log Guide

A friction log is a structured record of what happens when you use a product as an end user. You go through a workflow, write down what worked and what didn't, and share it with the team that built it. The goal: drive empathy for the user experience and surface the fixes that reduce friction.

I maintain a dedicated repo with templates, examples, and AI prompts for writing great friction logs.

## Go to the repo

**[github.com/chris-trag/friction-log-guide](https://github.com/chris-trag/friction-log-guide)**

| Resource | What it is |
|---|---|
| [why-friction-logs.md](https://github.com/chris-trag/friction-log-guide/blob/main/why-friction-logs.md) | Why to write them, what makes a good one, how to start |
| [example-friction-log.md](https://github.com/chris-trag/friction-log-guide/blob/main/example-friction-log.md) | Completed log for a fictional SDK |
| [templates/friction-log-template.md](https://github.com/chris-trag/friction-log-guide/blob/main/templates/friction-log-template.md) | Full template: BLUF, persona, pros, cons, friction points, recommendations |
| [templates/friction-log-template-lite.md](https://github.com/chris-trag/friction-log-guide/blob/main/templates/friction-log-template-lite.md) | Lightweight template for quick reviews |
| [templates/recording-sop.md](https://github.com/chris-trag/friction-log-guide/blob/main/templates/recording-sop.md) | Screen recording setup (Cap.so, Loom, ScreenFlow, etc.) |
| [prompts/friction-log-prompts.md](https://github.com/chris-trag/friction-log-guide/blob/main/prompts/friction-log-prompts.md) | AI prompts for Claude Code, Codex, Gemini CLI, Kiro CLI |

## Core structure

Every friction log should include:

- **BLUF** — bottom line up front. The most important findings in the first paragraph.
- **Persona** — who you're testing as. Role, background, goals, technical context.
- **Friction points** — each issue with severity, expected vs. actual behavior, and impact.
- **Next steps** — action items owned by product, engineering, or docs.

For the full template with all sections (prerequisites, code snippets, video timestamps, success criteria, appendix), use the [repo](https://github.com/chris-trag/friction-log-guide).

## Point an agent here

```
Read https://github.com/chris-trag/friction-log-guide and use the full template
at templates/friction-log-template.md to structure a friction log for {product}.
```

## Further reading

- [How Stripe uses friction logs](https://mikebifulco.com/posts/how-stripe-uses-friction-logs) by Mike Bifulco
- [An introduction to friction logging](https://developerrelations.com/developer-experience/an-introduction-to-friction-logging)
- [sbensu on "How to: friction logs"](https://blog.sbensu.com/posts/friction-logs/)
