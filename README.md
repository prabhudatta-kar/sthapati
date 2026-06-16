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

<sth-card title="Gopuram">Hello, temple.</sth-card>
<sth-button>Enter</sth-button>
```

Open `index.html` for the full live showcase.

## Components (v0.1)

| Tag | What it is |
|-----|-----------|
| `<sth-button variant="solid\|ghost">` | Bronze plinth button with carved pillar grooves |
| `<sth-card title="..." crown="true\|false">` | Content panel crowned by a tiered gopuram |
| `<sth-arch>` | Frames slotted content under a makara-torana arch (makaras + kīrtimukha) |
| `<sth-divider label="...">` | Carved frieze line, lotus-capped at both ends |
| `<sth-jali density="6">` | Pierced-stone lattice screen behind content |
| `<sth-pillar>` | A fluted load-bearing column (flank a block to colonnade it) |
| `<sth-lamp>` | A lit deepam (oil lamp) accent for live/featured states |
| `<sth-realm theme="chola">` | Optional theme-scope wrapper for a subtree |

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

## Theming

Every component reads its color, scale and type from CSS custom properties
defined in `src/themes/chola.css`. **Re-skinning the entire site to another
dynasty is one file swap** — that's the core architectural idea of the library.

```html
<html data-theme="chola">   <!-- whole page -->
<sth-realm theme="chola">   <!-- or just a subtree -->
```

## The full vocabulary

[**CATALOG.md**](CATALOG.md) maps **200+ architectural elements** (across Dravidian,
Mughal, Gothic and Classical traditions) to concrete web-UI roles, plus six
page-composition recipes (landing, blog, dashboard, e-commerce, portfolio, docs).
It also defines the **two-layer model**: *semantic primitives* that re-skin per
theme (`<sth-arch>`, `<sth-crown>`, `<sth-screen>`) vs *named ornaments* for
specific motifs (`<sth-gopuram>`, `<sth-rose-window>`).

## Roadmap

- [x] **Chola / Dravidian** theme (v0.1)
- [ ] More ornaments: `<sth-nav>` colonnade bar, `<sth-shikhara>` headers,
      `<sth-input>` carved fields, `<sth-modal>` as a sanctum (garbhagriha)
- [ ] **Gothic / European church** theme — pointed arches, ribbed vaults, stained glass
- [ ] **Mughal / Indo-Islamic** theme — domes, marble, denser jali
- [ ] **Greco-Roman** theme — fluted columns, pediments
- [ ] Publish to npm; per-framework wrappers (React/Vue typings)
- [ ] Texture pass: optional granite/marble surfaces

## License

MIT (proposed).
