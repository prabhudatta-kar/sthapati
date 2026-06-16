# 🏛️ Sthapati — Element Catalog (200+)

> A catalogue of architectural elements mapped to web-UI roles, so a developer
> can build any page by "constructing a building." Every element is sourced from
> a real tradition and given a concrete UI job.

**Origin key** — `Dr` Dravidian/Chola · `Ng` Nāgara (N. Indian) · `Mu` Mughal/Indo-Islamic ·
`Rj` Rajput · `Go` Gothic · `Cl` Classical (Greek/Roman) · `By` Byzantine · `univ` cross-cultural.
`✓` = already shipped in v0.1.

---

## The two-layer model (read this first)

Sthapati has **two kinds of tags**, and that distinction is the whole point:

1. **Semantic primitives** — role tags whose *carved form is chosen by the active
   theme*. `<sth-arch>`, `<sth-crown>`, `<sth-screen>`, `<sth-column>`, `<sth-divider>`.
   Set `data-theme="chola"` → arches render as **toranas**; `data-theme="gothic"` →
   the same `<sth-arch>` renders as a **lancet**. This is how one site re-skins
   across dynasties without touching markup.

2. **Named ornaments** — explicit cultural motifs for when a developer wants a
   *specific* thing: `<sth-gopuram>`, `<sth-rose-window>`, `<sth-pediment>`,
   `<sth-chhatri>`. These are the 200 below; many also back a semantic primitive.

| Semantic primitive | chola | mughal | gothic | classical |
|---|---|---|---|---|
| `<sth-crown>` (headers) | gopuram | onion dome + chhatri | crocketed spire | pediment |
| `<sth-arch>` (frames) | makara-torana | ogee arch | lancet arch | round arch |
| `<sth-screen>` (bg) | kolam jali | stellate jali | stone tracery | coffered/fret |
| `<sth-column>` (rules) | kumbha pillar | baluster column | clustered pier | Doric column |
| `<sth-lamp>` (status) | deepam | fanus lantern | candle sconce | oil lamp |

---

## A · Towers, Crowns & Roofs → headers · heroes · banners · section caps

1. `<sth-gopuram>` ✓ — tiered gateway tower (Dr) → page / section header crown
2. `<sth-vimana>` — pyramidal sanctum tower (Dr) → hero banner backdrop
3. `<sth-shikhara>` — curvilinear spire (Ng) → H1 ornament / section header
4. `<sth-amalaka>` — ribbed crowning disc (Ng) → scroll-to-top button / page finial
5. `<sth-kalasha>` — pot finial (Dr) → section terminator / end-of-content mark
6. `<sth-dome>` — onion dome (Mu) → modal crown / card header cap
7. `<sth-chhatri>` — domed kiosk pavilion (Mu) → popover / tooltip container
8. `<sth-spire>` — pointed spire (Go) → navbar logo flank / tall hero accent
9. `<sth-pinnacle>` — crocketed pinnacle (Go) → menu separator / list marker
10. `<sth-pediment>` — triangular gable (Cl) → card / section header
11. `<sth-drum>` — windowed dome drum / tholobate (By) → carousel frame
12. `<sth-cupola>` — lantern dome (Cl) → notification bell crown
13. `<sth-acroterion>` — roof-apex ornament (Cl) → corner flourish anchor
14. `<sth-antefix>` — eaves ornament row (Cl) → decorative top border
15. `<sth-ridge-finials>` — ridge of kalashas (Dr) → tab-bar / stepper crown
16. `<sth-dhvaja-stambha>` — temple flag mast (Dr) → announcement bar / banner
17. `<sth-chhajja>` — projecting eave (Mu) → sticky-header ledge & shadow
18. `<sth-cornice>` — crowning cornice moulding (Cl) → header bottom border

## B · Arches, Gates & Openings → cards · modals · hero frames · nav

19. `<sth-arch>` ✓ — semantic arch (themeable) → universal content frame
20. `<sth-torana>` ✓ — makara arch (Dr) → ornate content frame
21. `<sth-ogee-arch>` — keel/ogee arch (Mu) → card frame
22. `<sth-lancet-arch>` — pointed arch (Go) → card / input frame
23. `<sth-round-arch>` — semicircular arch (Cl/By) → card frame
24. `<sth-horseshoe-arch>` — horseshoe arch (Mu) → tag / pill frame
25. `<sth-multifoil-arch>` — cusped arch (Mu) → avatar frame
26. `<sth-iwan>` — vaulted hall portal (Mu) → hero section frame
27. `<sth-pishtaq>` — rectangular portal frame (Mu) → modal / feature block
28. `<sth-mihrab>` — directional niche (Mu) → pull-quote / featured niche
29. `<sth-devakoshtha>` — deity niche (Dr) → avatar / feature spotlight
30. `<sth-portal>` — recessed cathedral portal (Go) → CTA gateway / entry hero
31. `<sth-tympanum>` — sculpted arch field (Go) → hero headline panel
32. `<sth-lancet-window>` — tall narrow window (Go) → sidebar card / vertical nav item
33. `<sth-rose-window>` — circular tracery wheel (Go) → spinner / radial menu / logo
34. `<sth-oculus>` — round opening (Cl/By) → avatar mask / icon frame
35. `<sth-jharokha>` — projecting balcony window (Rj/Mu) → testimonial / profile card
36. `<sth-gavaksha>` — horseshoe dormer window (Ng) → notification / peek card
37. `<sth-dvara>` — temple doorway (Dr) → splash / page-entry gate

## C · Columns, Piers & Supports → dividers · rails · layout columns · sidebars

38. `<sth-pillar>` ✓ — kumbha pillar (Dr) → vertical rule / colonnade member
39. `<sth-column>` — semantic column (themeable) → layout column rule
40. `<sth-doric-column>` — Doric column (Cl) → plain divider
41. `<sth-ionic-column>` — volute-capital column (Cl) → sidebar divider
42. `<sth-corinthian-column>` — acanthus-capital column (Cl) → ornate divider
43. `<sth-pilaster>` — flat engaged column (Cl) → section side-rail
44. `<sth-yali-pillar>` — yali-base pillar (Dr) → hero flank guardian column
45. `<sth-colonnade>` — row of columns (Cl) → multi-column layout wrapper
46. `<sth-cluster-pier>` — compound pier (Go) → heavy divider / layout gutter
47. `<sth-caryatid>` — figure column (Cl) → testimonial support / avatar pillar
48. `<sth-twisted-column>` — Solomonic column (By) → decorative scroll rail
49. `<sth-baluster>` — banister post (Cl) → slider thumb / progress tick
50. `<sth-balustrade>` — railing row (Cl) → tab underline / horizontal rail
51. `<sth-corbel>` — potika bracket (Dr) → tooltip arrow / dropdown anchor
52. `<sth-yali-bracket>` — yali bracket (Dr) → FAB anchor / call-out connector
53. `<sth-strut-figure>` — roof strut figure (Ng) → accordion hinge accent
54. `<sth-impost>` — arch-springing block (univ) → button-group joiner

## D · Walls, Screens & Surfaces → backgrounds · borders · textures

55. `<sth-jali>` ✓ — pierced lattice screen (Mu/Dr) → section / card background
56. `<sth-screen>` — semantic perforated screen (themeable) → background veil
57. `<sth-stellate-jali>` — star-pattern lattice (Mu) → section background
58. `<sth-floral-jali>` — floral lattice (Mu) → card background
59. `<sth-tracery-panel>` — stone tracery (Go) → footer / background panel
60. `<sth-ashlar>` — dressed-stone coursing (univ) → container surface texture
61. `<sth-rustication>` — rough-cut stone (Cl) → hero background
62. `<sth-pietra-dura>` — inlaid stone florals (Mu) → featured banner background
63. `<sth-fresco-panel>` — painted wall panel (By/Rj) → image-card frame
64. `<sth-mosaic>` — tesserae mosaic (By) → gallery / avatar mosaic
65. `<sth-azulejo>` — glazed tile field (Mu) → divider band
66. `<sth-relief-wall>` — narrative relief band (Dr) → storytelling strip / timeline bg
67. `<sth-muqarnas>` — honeycomb vault (Mu) → dropdown / mega-menu canopy
68. `<sth-fan-vault>` — fan vaulting (Go) → mega-menu / hero ceiling
69. `<sth-coffered-ceiling>` — coffered panels (Cl) → grid / gallery background
70. `<sth-diaper>` — repeating diaper pattern (Go) → subtle page background
71. `<sth-kolam>` — dot-grid kolam (Dr) → loader bg / divider field

## E · Halls, Courts & Layout → containers · grids · sections

72. `<sth-mandapa>` — pillared hall (Dr) → main content container / section
73. `<sth-mahamandapa>` — great hall (Dr) → full-bleed section
74. `<sth-ardha-mandapa>` — antechamber (Dr) → intro / preamble block
75. `<sth-garbhagriha>` — sanctum (Dr) → focal "holy" block / modal core
76. `<sth-nave>` — central aisle (Go) → article body / main column
77. `<sth-aisle>` — side aisle (Go) → sidebar
78. `<sth-transept>` — crossing arm (Go) → interrupting feature row
79. `<sth-cloister>` — arcaded courtyard walk (Go) → galleried / tabbed section
80. `<sth-sahn>` — open courtyard (Mu) → hero / dashboard canvas
81. `<sth-charbagh>` — quadripartite garden (Mu) → 2×2 bento grid
82. `<sth-peristyle>` — columned court (Cl) → card-grid wrapper
83. `<sth-atrium>` — central hall w/ impluvium (Cl) → landing hero w/ focal pool
84. `<sth-stoa>` — covered walkway (Cl) → horizontal scroller / toolbar
85. `<sth-prakara>` — enclosure-wall ring (Dr) → app shell / page max-width frame
86. `<sth-ratha-bay>` — projecting wall bay (Dr) → card in a feature row
87. `<sth-undal-cell>` — shrine cell (Dr) → grid cell / bento tile

## F · Thresholds, Steps & Circulation → nav · breadcrumbs · onboarding · scroll

88. `<sth-sopana>` — temple steps (Dr) → stepper / multi-step form
89. `<sth-ghat-steps>` — riverbank steps (Ng) → vertical timeline / scroll progress
90. `<sth-moonstone>` — semicircular threshold slab (Dr) → onboarding splash / welcome
91. `<sth-festoon-threshold>` — toranam festoon (Dr) → toast / announcement strip
92. `<sth-grand-stair>` — monumental staircase (Cl/Go) → hierarchical nav / sitemap
93. `<sth-processional-path>` — gopuram walk (Dr) → progress bar
94. `<sth-corridor>` — corridor (univ) → breadcrumb trail
95. `<sth-ambulatory>` — apse walk (Go) → carousel / circular nav
96. `<sth-pradakshina>` — circumambulation ring (Dr) → step-indicator ring
97. `<sth-jump-gate>` — boundary gate (Rj) → section anchor / jump link
98. `<sth-drawbridge>` — bridge (Go) → page transition / route loader
99. `<sth-causeway>` — raised walkway (Mu) → linear stepper
100. `<sth-spiral-stair>` — turret stair (Go) → "back to top" / floating nav
101. `<sth-stair-landing>` — stair landing (univ) → sticky sub-nav header

## G · Friezes, Mouldings & Trim → dividers · separators · accents

102. `<sth-divider>` ✓ — lotus-capped frieze (Dr) → section divider
103. `<sth-frieze>` — semantic sculpted band (themeable) → section divider
104. `<sth-triglyph-band>` — triglyph + metope band (Cl) → segmented divider / tab bar
105. `<sth-egg-and-dart>` — egg-and-dart moulding (Cl) → input / border trim
106. `<sth-bead-and-reel>` — bead moulding (Cl) → list separator
107. `<sth-dentil>` — dentil course (Cl) → table-header underline
108. `<sth-guilloche>` — interlaced band (Cl/By) → progress track / loader bar
109. `<sth-greek-key>` — meander fret (Cl) → border frame / breadcrumb sep
110. `<sth-rinceau>` — foliage scroll (Cl/Go) → decorative divider
111. `<sth-gaja-frieze>` — elephant frieze (Dr) → footer band
112. `<sth-hamsa-band>` — swan course (Dr) → list divider
113. `<sth-makara-frieze>` — makara band (Dr) → ornate section divider
114. `<sth-kirtimukha-band>` ✓ — glory-face course (Dr) → header underline
115. `<sth-arabesque-band>` — arabesque scroll (Mu) → quote separator
116. `<sth-quatrefoil-band>` — quatrefoil course (Go) → tag-row / checkbox trim

## H · Ornament, Motif & Carving → icons · bullets · badges · markers

117. `<sth-lotus>` ✓ — layered padma (Dr) → divider cap / accent
118. `<sth-lotus-bud>` — bud finial (Dr) → unordered-list bullet
119. `<sth-purna-kumbha>` — overflowing pot (Dr) → welcome / empty-cart icon
120. `<sth-shankha>` — conch (Dr) → audio / announce icon
121. `<sth-chakra>` — wheel (Dr) → loading spinner / refresh icon
122. `<sth-trishula>` — trident (Dr) → divider tick / menu icon
123. `<sth-srivatsa>` — endless knot (Dr) → bookmark / saved icon
124. `<sth-paisley>` — boteh paisley (Mu/Rj) → tag-chip ornament
125. `<sth-arabesque-medallion>` — medallion (Mu) → seal / avatar frame
126. `<sth-shamsa>` — sunburst rosette (Mu) → badge / rating mark
127. `<sth-fleur-de-lis>` — lily emblem (Go) → bullet / heraldic badge
128. `<sth-trefoil>` — three-lobe (Go) → checkbox tick
129. `<sth-quatrefoil>` — four-lobe (Go) → toggle / icon frame
130. `<sth-cinquefoil>` — five-lobe (Go) → rating marker
131. `<sth-rosette>` — classical rosette (Cl) → divider dot / bullet
132. `<sth-palmette>` — anthemion palmette (Cl) → list marker / divider cap
133. `<sth-acanthus>` — acanthus leaf (Cl) → accordion chevron ornament
134. `<sth-laurel>` — laurel wreath (Cl) → achievement seal / badge
135. `<sth-cornucopia>` — horn of plenty (Cl) → rewards / offers icon
136. `<sth-yantra>` — geometric yantra (Dr) → bento overlay / favicon
137. `<sth-mandala>` — radial mandala (univ) → radial chart / loader / hero motif
138. `<sth-vesica>` — vesica piscis (Go) → avatar / badge mask
139. `<sth-knotwork>` — interlace knot (By) → connector / progress join

## I · Light, Fire & Fixtures → status · notifications · toggles · accents

140. `<sth-lamp>` ✓ — semantic lamp (themeable) → status indicator
141. `<sth-deepam>` ✓ — oil lamp (Dr) → "live"/online accent
142. `<sth-deepa-stambha>` — lamp tower (Dr) → activity-feed marker
143. `<sth-aarti-tray>` — multi-flame tray (Dr) → reactions / rating
144. `<sth-camphor-flame>` — flame (Dr) → typing / loading pulse
145. `<sth-stained-glass>` — coloured glass (Go) → image overlay / theme accent
146. `<sth-rose-glass-loader>` — rotating rose window (Go) → spinner
147. `<sth-go-lantern>` — hanging lantern (Go) → tooltip / dropdown light
148. `<sth-mashal>` — wall torch (Mu) → sidebar active-item marker
149. `<sth-fanus>` — hanging lamp cluster (Mu) → mega-menu canopy accent
150. `<sth-clerestory-beam>` — high-window light (Go) → hero light-beam effect
151. `<sth-candle-sconce>` — wall sconce (Go) → save / bookmark toggle
152. `<sth-diya-row>` — row of diyas (Dr) → progress steps (lit / unlit)

## J · Figures, Guardians & Reliefs → avatars · empty states · 404 · mascots

153. `<sth-dvarapala>` — door guardian (Dr) → login gate / 403 avatar
154. `<sth-gargoyle>` — waterspout grotesque (Go) → 404 mascot
155. `<sth-grotesque>` — comic carving (Go) → empty-state illustration
156. `<sth-yali>` — leonine guardian (Dr) → brand mascot / creature
157. `<sth-nandi>` — bull mount (Dr) → favourite / loyalty marker
158. `<sth-gajalakshmi>` — Lakshmi w/ elephants (Dr) → welcome hero figure
159. `<sth-apsara>` — celestial dancer (Dr) → testimonial portrait frame
160. `<sth-mithuna>` — paired figures (Dr) → community / partners block
161. `<sth-telamon>` — load-bearing figure (Cl) → help / support avatar
162. `<sth-sphinx>` — guardian sphinx (Cl) → FAQ / riddle mascot
163. `<sth-angel-corbel>` — angel bracket (Go) → notification accent
164. `<sth-saint-niche>` — niche saint (Go) → team-member card frame
165. `<sth-makara-mount>` — makara vahana (Dr) → scroll / progress creature

## K · Water, Garden & Landscape → loaders · hero bg · footers · sections

166. `<sth-kalyani>` — stepped temple tank (Dr) → footer / deep-section bg
167. `<sth-baoli>` — stepwell (Rj/Mu) → vertical scroll journey
168. `<sth-fawwara>` — fountain (Mu) → loader / live-data pulse
169. `<sth-water-channel>` — garden nahr (Mu) → progress-flow line
170. `<sth-lotus-pond>` — lotus pond (Dr) → hero background / idle animation
171. `<sth-charbagh-garden>` — garden quadrants (Mu) → bento dashboard bg
172. `<sth-cypress-row>` — cypress trees (Mu) → vertical-nav backdrop
173. `<sth-pergola>` — vine pergola (Cl) → top-banner trellis
174. `<sth-chadar>` — water chute (Mu) → download / upload progress
175. `<sth-reflecting-pool>` — reflecting pool (Mu) → hero symmetry / mirror effect
176. `<sth-island-pavilion>` — water pavilion (Mu) → floating featured card

## L · Furniture, Throne & Ritual Objects → CTAs · featured · forms · pricing

177. `<sth-simhasana>` — lion throne (Dr) → primary CTA / featured plan
178. `<sth-baldachin>` — royal canopy (Mu) → pricing "most popular" highlight
179. `<sth-takht>` — raised seat (Rj) → hero featured product
180. `<sth-vedika-altar>` — altar (Dr) → contact / offer form container
181. `<sth-ambo>` — pulpit (Go) → announcement / author block
182. `<sth-lectern>` — reading stand (Go) → search-bar / form frame
183. `<sth-reliquary>` — jewelled shrine (Go) → award / testimonial showcase
184. `<sth-tabernacle>` — canopied niche (Go) → single featured item
185. `<sth-shrine-card>` — mini mandir (Dr) → product-card crown
186. `<sth-pallakku>` — palanquin (Dr) → carousel-slide frame
187. `<sth-oonjal>` — temple swing (Dr) → toggle / slider control
188. `<sth-ghanta>` — temple bell (Dr) → notification / sound toggle
189. `<sth-dhupa>` — incense stand (Dr) → ambient / subtle loading state
190. `<sth-kalash-stepper>` — pot (Dr) → quantity / number stepper

## M · Signage, Inscription & Heraldry → typography · labels · tags · tooltips

191. `<sth-shilalekha>` — inscribed stele (Dr) → hero typographic block
192. `<sth-tamra-patra>` — copper-plate grant (Dr) → terms / legal block
193. `<sth-olai-chuvadi>` — palm-leaf manuscript (Dr) → note / changelog strip
194. `<sth-cartouche>` — name cartouche (Cl) → tag / label chip
195. `<sth-pataka>` — cloth banner (Dr) → ribbon / promo banner
196. `<sth-heraldic-shield>` — coat of arms (Go) → brand crest / badge
197. `<sth-illuminated-initial>` — drop-cap initial (Go) → article drop cap
198. `<sth-tughra>` — royal monogram (Mu) → logo / signature mark
199. `<sth-rajamudra>` — royal seal (Dr) → verified badge / stamp
200. `<sth-namaphalaka>` — name plaque (Dr) → section label / nameplate

## N · Defensive, Civic & Infrastructure → footers · progress · connectors · shell

201. `<sth-rampart>` — fortified wall (Dr) → app-shell / page-frame border
202. `<sth-kangura>` — battlement crenellation (Mu) → top border / tab crowns
203. `<sth-burj>` — corner watchtower (Mu) → fixed corner widget / FAB
204. `<sth-bastion>` — bastion (Go) → dashboard stat corner block
205. `<sth-aqueduct>` — arcaded aqueduct (Cl) → connector / pipeline diagram
206. `<sth-buland-darwaza>` — monumental gate (Mu) → splash / hero CTA gate
207. `<sth-adhisthana>` — moulded plinth (Dr) → footer base / card footer
208. `<sth-keystone>` — arch keystone (Cl/Go) → submit / commit button anchor
209. `<sth-flying-buttress>` — flying buttress (Go) → sticky aside / support panel
210. `<sth-uttira-beam>` — tie-beam (Dr) → horizontal rule / table row line
211. `<sth-skeleton-jangha>` — wall register (univ) → skeleton loader

---

## Composition recipes — build a page like a building

### 1 · SaaS landing page
```html
<sth-prakara>                          <!-- app-shell frame -->
  <sth-kangura>nav · logo · links</sth-kangura>   <!-- battlement navbar -->
  <sth-iwan>                           <!-- hero portal -->
    <sth-shilalekha>Build the web like a temple</sth-shilalekha>
    <sth-simhasana><sth-button>Start free</sth-button></sth-simhasana>
    <sth-lotus-pond slot="bg"></sth-lotus-pond>
  </sth-iwan>
  <sth-divider label="Features"></sth-divider>
  <sth-charbagh>                       <!-- 2×2 bento -->
    <sth-card>…</sth-card> ×4
  </sth-charbagh>
  <sth-cloister>logos / social proof</sth-cloister>
  <sth-baldachin>Pricing · Most popular</sth-baldachin>
  <sth-adhisthana>footer</sth-adhisthana>
</sth-prakara>
```

### 2 · Editorial / blog post
```html
<sth-gopuram>Masthead</sth-gopuram>
<sth-nave>                              <!-- article body -->
  <sth-illuminated-initial>O</sth-illuminated-initial>nce upon a dynasty…
  <sth-pataka>Featured</sth-pataka>
  <sth-mihrab>“A pull-quote set in a niche.”</sth-mihrab>
  <sth-makara-frieze></sth-makara-frieze>
</sth-nave>
<sth-aisle>                             <!-- sidebar -->
  <sth-jharokha>Author card</sth-jharokha>
  <sth-olai-chuvadi>Changelog</sth-olai-chuvadi>
</sth-aisle>
```

### 3 · App dashboard
```html
<sth-prakara>
  <sth-stoa>top toolbar</sth-stoa>
  <sth-aisle><sth-mashal>active nav item</sth-mashal></sth-aisle>
  <sth-sahn>                            <!-- canvas -->
    <sth-bastion>KPI stat</sth-bastion> ×4
    <sth-fawwara>live updating</sth-fawwara>
    <sth-mandala>radial chart</sth-mandala>
  </sth-sahn>
  <sth-burj>＋ FAB</sth-burj>
</sth-prakara>
```

### 4 · E-commerce product page
```html
<sth-shrine-card>
  <sth-pallakku>image carousel</sth-pallakku>
  <sth-namaphalaka>Product name</sth-namaphalaka>
  <sth-rajamudra>Verified seller</sth-rajamudra>
  <sth-kalash-stepper>qty</sth-kalash-stepper>
  <sth-simhasana><sth-button>Add to cart</sth-button></sth-simhasana>
</sth-shrine-card>
<sth-tabernacle>You may also like</sth-tabernacle>
```

### 5 · Portfolio
```html
<sth-atrium>                            <!-- hero w/ focal pool -->
  <sth-gajalakshmi>greeting figure</sth-gajalakshmi>
</sth-atrium>
<sth-peristyle>                         <!-- project grid -->
  <sth-jharokha>project</sth-jharokha> ×N
</sth-peristyle>
<sth-vedika-altar>contact form</sth-vedika-altar>
```

### 6 · Documentation site
```html
<sth-prakara>
  <sth-lancet-window>sidebar TOC</sth-lancet-window>
  <sth-nave>
    <sth-corridor>Home › Guide › Theming</sth-corridor>   <!-- breadcrumb -->
    <sth-tamra-patra>API reference block</sth-tamra-patra>
    <sth-sopana>1 · install  2 · import  3 · use</sth-sopana>  <!-- stepper -->
  </sth-nave>
  <sth-spiral-stair>↑ back to top</sth-spiral-stair>
</sth-prakara>
```

---

## How a new element gets built

Each entry becomes a small Web Component backed by the procedural ornament engine
in `src/sthapati.js` (see **The ornament engine** in the README). The pattern:

1. Add a procedural generator to `ORNAMENT` (reads CSS theme vars, returns SVG).
2. `define("sth-xxx", …)` a component that slots content + places the ornament.
3. If it's a **semantic primitive**, give it a per-theme branch so it re-skins.

Priority build order (highest leverage first): the **semantic primitives**
(`crown`, `arch`, `screen`, `column`, `frieze`, `lamp`) → layout halls
(`mandapa`, `nave`, `charbagh`, `prakara`) → the showcase named ornaments
(`rose-window`, `chhatri`, `pediment`, `dome`).

---

### Sources
- [Dravidian style of temple architecture — BYJU'S](https://byjus.com/free-ias-prep/ncert-notes-temple-architecture-and-sculpture-part3/)
- [Hindu temple architecture — Wikipedia](https://en.wikipedia.org/wiki/Hindu_temple_architecture) · [Glossary of Temple Architecture (Academia)](https://www.academia.edu/13301497/Glossary_Of_Temple_Architecture)
- [Mughal architecture & elements — Wikipedia](https://en.wikipedia.org/wiki/Mughal_architecture) · [Chhatri](https://en.wikipedia.org/wiki/Chhatri) · [Chhajja](https://en.wikipedia.org/wiki/Chhajja)
- [Gothic Architecture 101 — Washington National Cathedral](https://cathedral.org/discover/art-architecture/gothic-architecture-101/) · [Flying buttress — Wikipedia](https://en.wikipedia.org/wiki/Flying_buttress)
- [A Visual Glossary of Classical Architecture — World History Encyclopedia](https://www.worldhistory.org/article/486/a-visual-glossary-of-classical-architecture/) · [Entablature — Wikipedia](https://en.wikipedia.org/wiki/Entablature)
