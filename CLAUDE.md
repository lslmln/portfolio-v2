# CLAUDE.md

## Project Overview
This is v2 of a personal portfolio website for a product designer, built to have a strong first impression on recruiters, design directors/managers/leads, and founders evaluating design talent (PMs/engineers as a secondary audience) — while a previous version (`portfolio`, v1) continues to be used for live applications.

Unlike v1, v2 is not trying to be a deep case-study walkthrough. It should read as an overview / highlight reel: visual-heavy, few words, structured to give a hiring manager a reason to want to talk to this person quickly, not to document process in depth.

**Read `docs/v1-retrospective.md` before making structural, content, or component decisions.** It records what worked in v1, what to leave behind, and how to build components/sections well this time.

## Design status: not yet decided
The visual direction for v2 is intentionally open — the user wants to think it through themselves before it's built. **Do not propose or build visual design (colors, layout, typography choices, overall look) unprompted.** `content/design.md` is a placeholder until the user brings direction. Structural/tooling work (scaffolding, content organization, accessibility, performance) is fine to proceed on; visual design is not.

## Tech Stack
Same as v1, confirmed by the user:
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS — tokens will map to `content/design.md` once design direction exists
- **Motion:** Framer Motion (`framer-motion`) — respect `prefers-reduced-motion` always
- **Content:** Markdown in `/content`, parsed at build time via `gray-matter`

## Before Making Changes
- Read `docs/v1-retrospective.md`
- Read `content/portfolio.md`
- Read `content/design.md` (currently a placeholder — check whether it's been filled in yet)
- Inspect the existing project structure
- Reuse existing components where possible
- Do not invent portfolio facts
- Do not invent project metrics
- Do not invent employers, clients, or responsibilities

## Design Principles
Prioritize, in order:
1. Typography
2. Layout
3. Content hierarchy
4. Image presentation
5. Motion

Avoid unnecessary visual effects. The website should feel bespoke rather than template-driven. v2 specifically should lean more visual/image-heavy and less copy-heavy than v1.

## Content Rules
Portfolio content is stored in `/content`. Do not hardcode long-form portfolio copy inside React components. If information is missing, use a clearly marked `[PLACEHOLDER]` rather than inventing information.

## Site Sections (carried over as ideas, not yet speced)
- Contact info
- Some form of about section
- Work highlights — overview style, not per-project case studies
- **New: Explorations** — links out to a blog and/or side projects, and an X (Twitter) profile. Link-out only, not hosted content.

Exact page structure/navigation is pending the user's design pass — see `content/portfolio.md`'s "Site Structure" note.

## Implementation Rules
- Use TypeScript
- Keep components reusable, small, single-purpose
- Co-locate a component's styles (`.module.css`) next to it
- Prefer simple solutions
- Maintain responsive layouts
- Test mobile and desktop states
- Check accessibility
- Respect `prefers-reduced-motion`

## Before Completing a Task
Check:
- Mobile layout
- Desktop layout
- Typography hierarchy
- Image loading
- Links
- Accessibility
- Console errors

## Tone
The writing should be:
- Clear
- Concise
- Confident
- Human
- Specific

Avoid:
- Corporate jargon
- Empty claims
- Generic phrases like "passionate about innovation"

v2 specifically wants *less* copy than v1 — every remaining sentence should earn its place.

## Skills
`.claude/skills/` carries over v1's animation/motion craft skills (`animate`, `motion-react`, `motion-brief`, `prototype`, `review-animations`, etc.) — grounded in the animations.dev course, not tied to v1's specific look, so they apply as-is. Use `motion-brief` before building anything with motion, and `prototype` to compare real variants of a section before committing to one.

## Reference Files
- `docs/v1-retrospective.md` — what to keep, what to leave behind, how to build sections well
- `content/portfolio.md` — background, experience, project facts, target audience, positioning
- `content/design.md` — visual direction, design tokens, component states, motion principles (placeholder until design direction is decided)

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
