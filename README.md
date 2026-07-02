# 🛕 Sthapati

**Build the web like a temple.**

A framework-agnostic Web Component UI library that renders interfaces in the
visual language of historical architecture. Instead of the usual flat, minimal
components, your `<button>` is a carved bronze plinth, your `<card>` rises under
a tiered **gopuram**, your sections are framed by **torana** arches and veiled by
pierced **jali** screens.

> A *sthapati* was the master architect of the Chola dynasty — the people who
> designed temples like Brihadeeswara at Thanjavur (c. 1010 CE). This library is
> named for them.

Works in **React, Vue, Svelte, or plain HTML** — they're standard Custom Elements.

---

## Quick start

```html
<script defer src="src/sthapati.js"></script>
<link rel="stylesheet" href="src/themes/chola.css" />
<link rel="stylesheet" href="src/themes/gothic.css" />   <!-- optional 2nd theme -->

<html data-theme="chola">                 <!-- or "gothic" -->
  <sth-crown></sth-crown>
  <sth-card title="Gopuram">Hello, temple.</sth-card>
  <sth-button>Enter</sth-button>

<script>Sthapati.setTheme("gothic")</script>  <!-- reskins everything live -->
```

Open `index.html` for the full live showcase (with a Chola ⇄ Gothic switcher).

## Two kinds of tags

**Semantic primitives** — the form is chosen by the active theme, so the *same
markup* becomes a different building when you switch themes:

| Tag | chola → | gothic → |
|-----|---------|----------|
| `<sth-crown>` | gopuram gateway tower | crocketed gable + pinnacles |
| `<sth-arch>` | makara-torana | pointed lancet arch |
| `<sth-screen density="6">` | kolam jali | bar tracery |
| `<sth-column>` | kumbha pillar | clustered pier |
| `<sth-divider label="…">` | lotus-capped frieze | fleur-de-lis frieze |
| `<sth-card title="…">` | gopuram-crowned card | gable-crowned card |
| `<sth-lamp>` | standing deepam | hanging lantern |

**Named ornaments & utilities** — explicit pieces:

| Tag | What it is |
|-----|-----------|
| `<sth-button variant="solid\|ghost">` | Carved plinth button |
| `<sth-jali density="6">` | Chola pierced-lattice screen |
| `<sth-pillar>` | Chola kumbha column |
| `<sth-rose-window size="120" spin>` | Gothic radial tracery (also a spinner) |
| `<sth-realm theme="chola">` | Theme-scope wrapper for a subtree |

## The ornament engine

The carvings aren't static clip-art — they're **generated procedurally** in
`src/sthapati.js` so the detail is real. Bead courses, cusped (foliate) arches,
petal rows and kalasha ridges are drawn by loops, parameterised by size. You can
call them directly to drop a motif anywhere:

```js
const O = window.Sthapati.ORNAMENT;
el.innerHTML = O.gopuram(190, 180);   // tiered gateway tower
el.innerHTML = O.torana();            // makara-torana arch
el.innerHTML = O.kirtimukha(60,60,46);// glory-face mask
el.innerHTML = O.deepam();            // standing lamp
el.innerHTML = O.lotusCap(120);       // layered padma
```

Each is built from the Dravidian vocabulary documented in the source: *tala,
hara, kūṭa, śālā, kūḍu, kalaśa, makara, kīrtimukha, kumbha, potika*. Open
`index.html` to see them rendered large in **The Carvings** gallery.

## Theming — one attribute, a different dynasty

Every component reads its color, scale and type from CSS custom properties, and
its *ornament form* from a **theme registry** (`THEMES` in `src/sthapati.js`).
Switching themes re-renders every live component automatically.

```html
<html data-theme="chola">     <!-- whole page -->
<sth-realm theme="gothic">    <!-- or just a subtree -->
```
```js
Sthapati.setTheme("gothic");  // toggles <html data-theme> + re-renders
Sthapati.themes();            // ["chola", "gothic"]
```

**Adding a new dynasty = two things:** (1) an entry in the `THEMES` registry
mapping each role (`crown`, `arch`, `screen`, `column`, `cap`, `lamp`) to a
generator, and (2) a matching `themes/<name>.css` defining the same CSS
variables. No component code changes.

## The full vocabulary

[**CATALOG.md**](CATALOG.md) maps **200+ architectural elements** (across Dravidian,
Mughal, Gothic and Classical traditions) to concrete web-UI roles, plus six
page-composition recipes (landing, blog, dashboard, e-commerce, portfolio, docs).
It also defines the **two-layer model**: *semantic primitives* that re-skin per
theme (`<sth-arch>`, `<sth-crown>`, `<sth-screen>`) vs *named ornaments* for
specific motifs (`<sth-gopuram>`, `<sth-rose-window>`).

## Where this is headed

[**docs/BENCHMARK.md**](docs/BENCHMARK.md) benchmarks Sthapati against the
libraries people actually adopt (shadcn/ui, 21st.dev, Radix, Aceternity) — an
honest scorecard and a phased path to credibility. Short version: the *reason to
exist* is done; the table-stakes (accessibility, TypeScript, functional
components, one-command install, real docs) are the work ahead.

## Roadmap

- [x] **Chola / Dravidian** theme (v0.1)
- [x] **Semantic primitives** + theme registry (`crown`, `arch`, `screen`, `column`, …)
- [x] **Gothic / European church** theme — pointed arches, tracery, crockets, fleur-de-lis
- [ ] More ornaments: `<sth-nav>` colonnade bar, `<sth-shikhara>` headers,
      `<sth-input>` carved fields, `<sth-modal>` as a sanctum (garbhagriha)
- [ ] **Mughal / Indo-Islamic** theme — domes, marble, denser jali
- [ ] **Greco-Roman** theme — fluted columns, pediments
- [ ] Publish to npm; per-framework wrappers (React/Vue typings)
- [ ] Texture pass: optional granite/marble surfaces

## License

MIT (proposed).
