# Benchmark & Gap Analysis — what it takes to be a "real" UI library

Research into how the libraries people actually adopt (shadcn/ui, 21st.dev,
Radix, Aceternity/Magic UI, MUI) win — and an honest scorecard of where
Sthapati stands and what it would take to get there. Sources at the end.

---

## 1. How the reference libraries win

| Library | Model | What makes it stick |
|---|---|---|
| **Radix UI** | Headless React primitives | Best-in-class **accessibility** (WAI-ARIA, keyboard, focus, screen readers). No styling — you bring your own. The *behavioral* gold standard. |
| **shadcn/ui** | **Copy-paste + CLI registry** (`npx shadcn add button`) | You *own the code*. Radix behavior + Tailwind styling + design tokens. Not an npm dependency you fight — source in your repo. Redefined distribution. |
| **21st.dev** | **Community registry / marketplace** on top of shadcn | "npm for design engineers." Anyone publishes; one-command install; **multiple live demos per component**; curation/review. Network effects. |
| **Aceternity / Magic UI** | Copy-paste animated components | **Differentiation via wow** — Framer Motion effects (lamp headers, beams, hover cards). ~28k / ~15k stars. Sells the *feeling*, used on SaaS landing pages. |
| **MUI / Chakra** | Installed npm packages, themed | Breadth + docs + theming. The "customizable era" — you theme but don't fully own. Still huge for enterprise. |

**The recurring recipe (what "it takes"):**

1. **Accessibility is table stakes** — WAI-ARIA roles, keyboard nav, focus
   management, screen-reader tested. Radix exists *because* this is hard and
   non-negotiable. A pretty component that traps keyboard users is disqualified.
2. **Meet developers where they are** — React + TypeScript + Tailwind is the
   center of gravity. Strong TS types = autocomplete + safety = adoption.
3. **Own-the-code distribution** — the copy-paste + CLI registry model (shadcn)
   beat the "npm black box" model. Low friction to install, full control after.
4. **Design tokens + dark mode** — theme via tokens for color/space/type.
5. **A real docs site** — interactive examples, prop/API tables, copy buttons,
   *multiple demos per component*, installation snippets.
6. **Breadth of _functional_ components** — not just decoration: inputs, select,
   dialog, dropdown, tabs, tooltip, toast, table, pagination, form validation.
7. **A differentiation hook** — Aceternity = motion; shadcn = ownership+taste.
   Something that makes people *choose* you. This is the moat.
8. **Quality signals** — semver, changelog, tests, CI, tree-shaking, bundle size.

There are **two axes**: *table-stakes* (earns you the right to be considered)
and *differentiation* (makes you get picked). You need both. Sthapati is unusually
strong on one and near-zero on the other.

---

## 2. Sthapati scorecard (honest)

✅ have · ⚠️ partial · ❌ missing

| Dimension | Status | Notes |
|---|---|---|
| **Differentiation / aesthetic** | ✅ | *This is the moat.* Nobody else does architecture-as-UI. Genuinely novel. |
| **Design tokens + theming** | ✅ | CSS-var token system, 2 themes, live reskin via registry. Genuinely good. |
| **Dark-first visual craft** | ✅ | Procedural SVG ornament engine; detailed, scalable. |
| **Framework reach** | ⚠️ | Web Components work *everywhere* — but the market wants React+TS ergonomics. |
| **Accessibility** | ❌ | Decorative SVG is `aria-hidden` (good), but **interactive parts have no a11y**: `<sth-button>` is a `<button>` (ok) yet there are no focus-visible rings, no dialog/menu/tooltip roles, no keyboard handling. Blocks serious adoption. |
| **TypeScript types** | ❌ | No `.d.ts`, no typed props/attributes. |
| **Functional components** | ❌ | Only decorative/layout primitives. No input, select, dialog, dropdown, tabs, tooltip, toast, table, form, pagination. |
| **Distribution / install** | ❌ | Script-tag only. Not on npm; no CLI; no copy-paste registry. Single un-tree-shakeable file. |
| **Docs site** | ⚠️ | One `index.html` showcase (nice) — but no per-component pages, prop tables, copy buttons, or multiple demos. |
| **Tests / CI / semver** | ❌ | No tests, no CI, no changelog discipline yet. |
| **SSR / hydration** | ❌ | Shadow-DOM Web Components need an SSR/declarative-shadow-DOM story for Next.js. |
| **Community / registry** | ❌ | No contribution path, no blocks/templates (hero, pricing, etc.). |

**Summary:** Sthapati today is a *striking aesthetic prototype* with an
excellent theming core — but it is missing almost all the table-stakes that make
a library trustworthy to build a product on. The good news: the hard-to-fake part
(a reason to exist) is already done.

---

## 3. The strategic fork (decide before building more)

The single biggest decision — it changes everything downstream:

**Path A — Keep Web Components as the core.**
Max reach (React/Vue/Svelte/plain HTML). Cost: must hand-roll accessibility and
an SSR story; swims against the React+Tailwind current; harder to ride the
shadcn/21st registry wave.

**Path B — Ship a React + Tailwind flavor and distribute via the shadcn registry.**
Meet the market: `npx shadcn add https://sthapati.dev/r/gopuram-card`. Ride 21st.dev
distribution. Lean on Radix for accessibility behavior, keep the SVG ornament
engine as the "skin." Cost: React-first (less universal), more build tooling.

**Path C — Hybrid (recommended).** Keep the framework-agnostic **ornament +
theme engine** as the core (the moat), and layer a **React+Tailwind component
kit on top** that wraps Radix primitives for behavior/a11y and uses the ornament
engine for the look. Publish that kit to npm **and** as a shadcn-compatible
registry. Web-Component build stays available for non-React users.
→ You keep the universal engine *and* get market-native distribution + a11y.

---

## 4. Roadmap to credibility (phased)

**v0.2 — Foundations (make it trustworthy)**
- Accessibility pass: focus-visible rings, roles, keyboard handling on every
  interactive element; audit with axe; respect `prefers-reduced-motion` (done for lamps).
- TypeScript types for all tags/attributes (`.d.ts` + JSDoc).
- npm publish (unpkg/jsDelivr CDN links); a real `dist/` build (ESM + minified),
  tree-shakeable exports.
- Tests: a11y + render smoke tests (Playwright/vitest), GitHub Actions CI.

**v0.3 — Functional components (earn the table stakes)**
The "boring but essential," each carved: `sth-input`, `sth-select`,
`sth-dialog` (garbhagriha/sanctum), `sth-dropdown`, `sth-tabs`, `sth-tooltip`,
`sth-toast`, `sth-table`, `sth-tag`, `sth-pagination`, `sth-form`. Behavior first,
ornament second. (Path C: wrap Radix.)

**v0.4 — Distribution & docs (make it discoverable)**
- Docs site (per-component pages, prop tables, copy buttons, multiple demos,
  live theme switch). Deploy to `sthapati.dev`.
- shadcn-compatible **registry** so components install with one CLI command.
- "Blocks": full sections (hero/iwan, pricing/baldachin, footer/adhisthana).

**v0.5 → v1.0 — Depth & community**
- More themes (Mughal, Greco-Roman, Byzantine) — cheap now via the registry.
- SSR / declarative shadow DOM; framework wrappers + typings.
- Contribution guide, semver + changelog, templates gallery, examples.

---

## 5. The one-line take

> Sthapati has already done the hard part — **a reason to exist**. What it takes
> to be shadcn/21st-tier is the *unglamorous* part: **accessibility, TypeScript,
> functional components, one-command install, and real docs.** Do those without
> losing the aesthetic, and it's not just a cool demo — it's a library.

---

### Sources
- [21st.dev — GitHub (serafimcloud/21st)](https://github.com/serafimcloud/21st) · [21st.dev: The NPM for Design Engineers](https://huntscreens.com/products/21stdev)
- [Why shadcn/ui is Different — Vercel Academy](https://vercel.com/academy/shadcn-ui/why-shadcn-ui-is-different) · [shadcn vs Radix — Vercel](https://vercel.com/i/shadcn-vs-radix)
- [Best React UI component libraries — Untitled UI](https://www.untitledui.com/blog/react-component-libraries) · [Accessible UI Component Libraries — DigitalA11Y](https://www.digitala11y.com/accessible-ui-component-libraries-roundup/)
- [Aceternity UI](https://ui.aceternity.com/) · [Aceternity vs Magic UI vs shadcn — PkgPulse](https://www.pkgpulse.com/guides/aceternity-ui-vs-magic-ui-vs-shadcn-animated-react-2026)
- [MUI](https://mui.com/)
