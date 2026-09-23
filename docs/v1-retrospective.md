# v1 Retrospective — What Carries Over to v2

*Read this before making any structural, content, or component-building decision on v2. It's the distilled memory of `lslmln/portfolio` (v1) — what worked, what didn't, and how to build sections well so this doesn't turn into template slop. It is not a design spec — v2's visual direction is intentionally undecided; this is methodology, not a look.*

## Why v2 exists
v1 was built in a rush after a retrenchment, to get applications out the door fast. It's still in active use for that. v2 is the "had time to think" version: same broad goal (show hiring managers, design leads, and PM/engineer collaborators that you're worth talking to) but a different shape — an overview / highlight reel rather than deep case-study detail, more visual, fewer words, and a design direction not yet chosen.

## Audience & goal (unchanged from v1)
Recruiters, design directors/managers/leads, founders evaluating design talent, with PMs/engineers as a secondary audience. The site's job is to give them a reason to hire you fast — not to document your process exhaustively. v1 leaned toward the latter; v2 should not.

## What's different this time (the brief, as given)
- Overview over depth: highlight reel, not in-depth case studies. Assume people don't read much — earn attention visually first.
- Visual-heavy: image/media presentation matters more than long-form copy.
- New "Explorations" section: a place to point at things done outside of work — a blog and/or side projects, plus an X (Twitter) profile link. This links *out*; it's not a CMS for hosting blog posts or project write-ups inside this repo.
- Standard sections carry over conceptually: contact info, some form of about section. Kept as an idea, not yet speced — don't invent specifics.
- Design is explicitly open and deferred — the user wants to think about it themselves. Don't propose or build visual direction unprompted; wait to be asked.

## What worked in v1 — keep doing this

1. **Content lives outside components.** `content/portfolio.md` was the single source of truth for copy (bio, career history, education, project facts); components never hardcoded long-form copy. Never invent facts, metrics, employers, or responsibilities — use `[PLACEHOLDER]` for anything missing and ask rather than guess.
2. **Design tokens as a documented, rationale-carrying system**, not scattered magic numbers. v1's `content/design.md` recorded not just the value but *why* — including reversed decisions, so they weren't rediscovered later. Every value that started as a one-off arbitrary Tailwind bracket (`[Npx]`) got promoted to a named token once it was reasoned about or reused. Do this again in v2, from a fresh token set — don't carry v1's actual values over, since the look is changing.
3. **One place for responsive overrides.** Mobile step-down was a single `@media` block touching shared tokens, not per-component overrides scattered around the codebase. Tablet-only exceptions (there were several) were collected in one documented list so they're easy to find, even though each one was a genuine one-off.
4. **Interaction states gated by input capability, not just breakpoint** — `(hover: hover) and (pointer: fine)`, so a touch-capable tablet doesn't get a hover state with no way to trigger it.
5. **Reduced motion as a first-class requirement.** Every animated component checked `useReducedMotion` / respected `prefers-reduced-motion`, not as an afterthought bolted on at the end.
6. **Component structure:** one `.tsx` plus a co-located `.module.css` per component; shared hooks/utilities under `src/lib/`. Kept components small and single-purpose.
7. **SEO/meta done once, properly:** `metadataBase`, OpenGraph + Twitter card metadata, a JSON-LD `WebSite` block, title templates — set up in `layout.tsx` and left alone.
8. **Pre-hydration inline scripts** for things that must be right on first paint (theme, matching OS preference with no flash; scroll-restoration reset so reloads land at the top) — run via `next/script` `beforeInteractive`, each with a comment explaining why it has to run that early.
9. **Dev-only affordances clearly marked and gated.** Anything dev-only (debug grid, state-reset links, error/loading toggles) was prefixed `dev-*` and rendered only behind `process.env.NODE_ENV === "development"`, so it never leaks into production and is easy to spot in a diff.
10. **A passcode-gate pattern existed for confidential work** (a modal + verification helper gating a work-detail page). Worth reusing directly if v2 needs to keep anything under NDA out of public view.
11. **Numeric-prop icon sizing needs its own token layer.** Tailwind utility classes can't drive a library's numeric `size` prop — v1 solved this with shared TS constants (`icon-size.ts`) instead of hardcoding numbers per-usage.
12. **Responsive-by-construction media sizing** (aspect-ratio tokens) instead of fixed pixel heights for cards/media.
13. **An explicit, documented z-index scale** (a short ordered list with what each layer is for) instead of magic numbers creeping in per-component.
14. **A "before completing a task" checklist**, run every time: mobile layout, desktop layout, typography hierarchy, image loading, links, accessibility, console errors. Worth keeping as a standing gate, not a one-time habit.
15. **Tone rules for copy:** clear, concise, confident, human, specific. Avoid corporate jargon, empty claims, and generic phrases ("passionate about innovation"). Doubly important now that v2 wants *less* copy overall — every remaining sentence has to earn its place.

## What to leave behind

1. **Deep, dense per-project case-study copy.** This is explicitly the thing being cut. v1's project entries were built for a walkthrough; v2's job is a highlight, not a process document.
2. **Reactive, ad-hoc token evolution.** v1's design.md shows the same tokens split, merged, and reverted multiple times (a secondary text color split off and later unified back; a spacing value merged into a general token and later re-split; a card aspect ratio changed across four different values over the project). It's fine for tokens to evolve, but revisit the whole system periodically rather than only ever patching the one spot in front of you — cheaper than several rounds of drift.
3. **Section identity churn.** A "Testimonials" section was renamed to "Quotes" mid-build. Settle what a section *is* before naming it in code.
4. **Breakpoint proliferation via one-offs.** Several components ended up with bespoke tablet-only exceptions that don't generalize to each other (a nav breakpoint that runs opposite every other override, a layout split that flip-flopped direction, a title size that only shrinks at one specific breakpoint). Where feasible, decide the tablet case intentionally alongside mobile/desktop instead of patching it in after both already shipped.
5. **No time to prototype alternatives.** Because v1 had to ship fast, there wasn't room to try more than one direction per section before committing. v2 doesn't have that constraint — use it.

## How to build sections well this time (not slop)

- Before building anything with motion, run it through the `motion-brief` skill first — decide the animation on purpose, before code exists to defend.
- When a section's design isn't obviously "the" answer, use the `prototype` skill to stand up a few genuinely different versions behind a picker and compare them live, rather than committing to the first idea.
- Content still goes in `content/*.md`, never hardcoded into a component.
- A visual value used more than once, or that took real thought, becomes a named token with a one-line "why" — not a bare hex/px value left inline.
- Keep components small, co-locate their styles, and keep shared logic in `src/lib/`.
- Treat accessibility and console-cleanliness as part of "done," not a follow-up pass — use the checklist above every time, not just before a release.

## Carried-over skills

`.claude/skills/` was copied over from v1 as-is: `animate`, `animation-accessibility`, `animation-performance`, `animation-vocabulary`, `css-animations`, `find-animation-opportunities`, `improve-animations`, `motion-brief`, `motion-react`, `pick-ui-library`, `prototype`, `review-animations`. These are craft/methodology skills (grounded in the animations.dev course) rather than anything tied to v1's specific content or look, so they apply directly to v2 without changes.

## What's intentionally NOT carried over yet

- **`content/design.md`'s actual values** — v1's tokens are for v1's specific visual system. v2 starts with an empty token set; fill it in once the design direction is chosen.
- **Full project case-study write-ups** — the facts (employer, dates, what was done) are worth keeping as raw material in `content/portfolio.md`, but the highlight-reel framing/copy itself needs to be written fresh for v2's shorter, more visual format.
- **v1's specific components** (loading screen, route-transition crossfade, passcode modal, etc.) — none of these were copied as code. They're documented above as *patterns* worth reusing if the same problem shows up in v2, not as a component library to inherit wholesale.
