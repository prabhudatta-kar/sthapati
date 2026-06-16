/* ============================================================
   Sthapati — "Build the web like a temple."
   A Web Component UI library that renders interfaces in the
   visual language of historical architecture.
   v0.1 — Chola / Dravidian theme.

   Usage (any framework or plain HTML):
     <script type="module" src="sthapati.js"></script>
     <link rel="stylesheet" href="themes/chola.css">
     <sth-button>Enter the temple</sth-button>

   Each component is a custom element with a Shadow DOM. It pulls
   color/scale from CSS custom properties on the page (the theme
   file), so the whole site re-skins by swapping one stylesheet.
   ============================================================ */

/* ============================================================
   ORNAMENT ENGINE
   The carvings are generated procedurally so the detail is real:
   bead courses, cusped (foliate) arches, petal rows and kalasha
   ridges are drawn by loops, not faked with a few static lines.
   Coordinates are rounded for clean, compact SVG output.

   Reference vocabulary (Dravidian / Chola):
     tala     — a horizontal storey of the gopuram superstructure
     hara     — the parapet of miniature shrines crowning each tala
     kuta     — square corner pavilion with a domical roof
     sala     — central pavilion with a barrel-vault roof
     kudu     — horseshoe-arch dormer (nasi / gavaksha)
     kalasha  — pot finial; a ridge of them crowns the sala
     makara   — aquatic guardian beast at an arch's springing
     kirtimukha — the lion "face of glory" at an arch apex
     kumbha   — pot-shaped pillar capital; palagai — its abacus
     potika   — the corbel bracket above a capital
   ============================================================ */
const A = "var(--sth-accent)";
const A2 = "var(--sth-line)";
const GB = "var(--sth-gold-bright)";
const FILL = "rgba(212,161,60,0.06)";
const P = (n) => (Math.round(n * 100) / 100);

/* a course of beads (pearls) along y from x1..x2 */
function beads(x1, x2, y, r = 1, gap = 1.4, fill = A) {
  const step = r * 2 + gap; let s = "";
  for (let x = x1; x <= x2 + 0.01; x += step)
    s += `<circle cx="${P(x)}" cy="${P(y)}" r="${r}" fill="${fill}"/>`;
  return s;
}

/* a scalloped / cusped arc — the foliate edge of a temple arch.
   sweeps from angle a0 to a1 (radians, screen coords) with n cusps. */
function cuspArc(cx, cy, R, a0, a1, n, sweep = 1) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = a0 + (a1 - a0) * (i / n);
    pts.push([cx + R * Math.cos(t), cy + R * Math.sin(t)]);
  }
  let d = `M ${P(pts[0][0])} ${P(pts[0][1])}`;
  for (let i = 1; i <= n; i++) {
    const [x, y] = pts[i], [px, py] = pts[i - 1];
    const r = Math.hypot(x - px, y - py) / 2;
    d += ` A ${P(r)} ${P(r)} 0 0 ${sweep} ${P(x)} ${P(y)}`;
  }
  return d;
}

/* a kalasha (pot finial) of scale s standing on baseline by, centred cx */
function kalasha(cx, by, s = 6) {
  const g = (a, b) => P(a), w = s;
  return `<g stroke="${A}" stroke-width="0.8" stroke-linejoin="round" fill="${FILL}">
    <path d="M${P(cx-0.5*w)} ${P(by)} L${P(cx+0.5*w)} ${P(by)} L${P(cx+0.36*w)} ${P(by-0.2*w)} L${P(cx-0.36*w)} ${P(by-0.2*w)} Z"/>
    <ellipse cx="${P(cx)}" cy="${P(by-0.7*w)}" rx="${P(0.5*w)}" ry="${P(0.52*w)}"/>
    <path d="M${P(cx-0.3*w)} ${P(by-1.18*w)} L${P(cx+0.3*w)} ${P(by-1.18*w)} L${P(cx+0.42*w)} ${P(by-1.46*w)} L${P(cx-0.42*w)} ${P(by-1.46*w)} Z"/>
    <path d="M${P(cx-0.4*w)} ${P(by-1.46*w)} Q ${P(cx)} ${P(by-1.95*w)} ${P(cx+0.4*w)} ${P(by-1.46*w)}" fill="${A}" fill-opacity="0.25"/>
    <line x1="${P(cx)}" y1="${P(by-1.9*w)}" x2="${P(cx)}" y2="${P(by-2.4*w)}"/>
    <circle cx="${P(cx)}" cy="${P(by-2.5*w)}" r="${P(0.16*w)}" fill="${GB}" stroke="none"/>
  </g>`;
}

/* a kudu — horseshoe-arch dormer of radius r, with a face peering out */
function kudu(cx, by, r) {
  return `<g stroke="${A}" stroke-width="0.8" fill="${FILL}">
    <path d="M${P(cx-r)} ${P(by)} A ${r} ${r} 0 1 1 ${P(cx+r)} ${P(by)} Z"/>
    <path d="M${P(cx-0.28*r)} ${P(by-r-0.05)} Q ${P(cx)} ${P(by-r*1.7)} ${P(cx+0.28*r)} ${P(by-r-0.05)}" fill="${A}" fill-opacity="0.3"/>
    <circle cx="${P(cx)}" cy="${P(by-r*0.5)}" r="${P(r*0.32)}" fill="${A}" fill-opacity="0.5" stroke="none"/>
  </g>`;
}

/* one petal, tip pointing along angle a (rad) from (cx,cy), length L width W */
function petal(cx, cy, a, L, W) {
  const dx = Math.sin(a), dy = -Math.cos(a), px = Math.cos(a), py = Math.sin(a);
  const tx = cx + dx * L, ty = cy + dy * L;
  const m1x = cx + dx * L * 0.5 + px * W, m1y = cy + dy * L * 0.5 + py * W;
  const m2x = cx + dx * L * 0.5 - px * W, m2y = cy + dy * L * 0.5 - py * W;
  return `M ${P(cx)} ${P(cy)} Q ${P(m1x)} ${P(m1y)} ${P(tx)} ${P(ty)} Q ${P(m2x)} ${P(m2y)} ${P(cx)} ${P(cy)} Z`;
}

/* a layered lotus (padma): two rows of petals + a seed boss */
function lotus(cx, cy, r, n = 9, spread = Math.PI * 0.95) {
  let back = "", front = "";
  for (let i = 0; i < n; i++) {
    const a = -spread / 2 + spread * (i / (n - 1));
    back += `<path d="${petal(cx, cy, a, r, r * 0.26)}"/>`;
  }
  for (let i = 0; i < n - 1; i++) {
    const a = -spread / 2 + spread * ((i + 0.5) / (n - 1));
    front += `<path d="${petal(cx, cy, a, r * 0.78, r * 0.22)}"/>`;
  }
  return `<g stroke="${A}" stroke-width="0.7" stroke-linejoin="round">
    <g fill="${A}" fill-opacity="0.10">${back}</g>
    <g fill="${A}" fill-opacity="0.22">${front}</g>
    <circle cx="${P(cx)}" cy="${P(cy)}" r="${P(r*0.16)}" fill="${GB}" stroke="none"/>
  </g>`;
}

/* a makara head at the springing of a torana, facing inward (dir=1 right, -1 left) */
function makara(cx, by, s, dir) {
  const f = dir;
  return `<g stroke="${A}" stroke-width="0.8" fill="${FILL}" stroke-linejoin="round"
            transform="translate(${P(cx)} ${P(by)}) scale(${f} 1)">
    <path d="M0 0 Q ${P(-1.1*s)} ${P(-0.2*s)} ${P(-1.7*s)} ${P(-1.0*s)}
             Q ${P(-2.1*s)} ${P(-1.6*s)} ${P(-1.5*s)} ${P(-2.0*s)}
             Q ${P(-0.9*s)} ${P(-2.3*s)} ${P(-0.5*s)} ${P(-1.7*s)}
             Q ${P(-0.2*s)} ${P(-1.1*s)} 0 ${P(-0.9*s)} Z"/>
    <!-- up-curled snout (the makara's signature) -->
    <path d="M${P(-1.7*s)} ${P(-1.0*s)} Q ${P(-2.5*s)} ${P(-0.9*s)} ${P(-2.5*s)} ${P(-1.7*s)}
             Q ${P(-2.5*s)} ${P(-2.3*s)} ${P(-1.9*s)} ${P(-2.2*s)}" fill="none"/>
    <!-- eye -->
    <circle cx="${P(-1.2*s)}" cy="${P(-1.4*s)}" r="${P(0.22*s)}" fill="${A}" stroke="none"/>
    <circle cx="${P(-1.13*s)}" cy="${P(-1.47*s)}" r="${P(0.07*s)}" fill="${GB}" stroke="none"/>
    <!-- teeth -->
    ${[0,1,2].map(i=>`<path d="M${P(-1.6*s-i*0.35*s)} ${P(-0.55*s)} l ${P(-0.3*s)} ${P(-0.3*s)}"/>`).join("")}
    <!-- foliage / pearls issuing from the mouth toward the arch -->
    <path d="M${P(-0.3*s)} ${P(-1.0*s)} q ${P(0.9*s)} ${P(-0.3*s)} ${P(1.2*s)} ${P(0.4*s)}" fill="none"/>
    ${[0,1,2].map(i=>`<circle cx="${P(-0.1*s+i*0.4*s)}" cy="${P(-1.05*s+i*0.12*s)}" r="${P(0.1*s)}" fill="${A}" stroke="none"/>`).join("")}
  </g>`;
}

/* ============================================================ */
const ORNAMENT = {
  /* GOPURAM — a multi-tala temple gateway tower, crowned by a sala
     ridge of kalashas. Procedurally stacked: each tala has a hara of
     kuta/sala pavilions, kudu dormers, pilastered niches and a beaded
     cornice; the whole tapers as it rises. */
  gopuram: (w = 150, h = 120) => {
    const VW = 240, VH = 220;
    const cx = VW / 2;
    const TALAS = 5;
    const baseY = 196, topY = 58;           // wall zone vertical span
    const baseHalf = 96, topHalf = 40;      // half-widths (batter)
    let s = "";

    /* adhisthana — the stepped stone plinth */
    s += `<g stroke="${A2}" stroke-width="0.8" fill="${FILL}">
      <rect x="${cx-baseHalf-6}" y="196" width="${(baseHalf+6)*2}" height="9"/>
      <rect x="${cx-baseHalf-2}" y="205" width="${(baseHalf+2)*2}" height="7"/>
      <rect x="${cx-baseHalf-10}" y="212" width="${(baseHalf+10)*2}" height="6"/>
    </g>`;

    for (let t = 0; t < TALAS; t++) {
      const f0 = t / TALAS, f1 = (t + 1) / TALAS;
      const yB = baseY + (topY - baseY) * f0;
      const yT = baseY + (topY - baseY) * f1;
      const hB = baseHalf + (topHalf - baseHalf) * f0;
      const hT = baseHalf + (topHalf - baseHalf) * f1;
      const wallH = yB - yT;

      /* wall zone with battered sides */
      s += `<path d="M${P(cx-hB)} ${P(yB)} L${P(cx-hT)} ${P(yT)} L${P(cx+hT)} ${P(yT)} L${P(cx+hB)} ${P(yB)} Z"
              stroke="${A}" stroke-width="1" fill="${FILL}"/>`;

      /* pilastered niches (devakoshtha) — bays with a deity boss */
      const bays = 7 - t;
      for (let b = 0; b <= bays; b++) {
        const fx = b / bays;
        const x = (cx - hB) + (2 * hB) * fx + ((-hB + hT) * fx + (hB - hT) * (1 - fx)) * 0; // along base
        const xb = (cx - hB) + 2 * hB * fx;
        const xt = (cx - hT) + 2 * hT * fx;
        s += `<line x1="${P(xb)}" y1="${P(yB)}" x2="${P(xt)}" y2="${P(yT)}" stroke="${A2}" stroke-width="0.7"/>`;
      }
      for (let b = 0; b < bays; b++) {
        const fx = (b + 0.5) / bays;
        const x = (cx - hB) + 2 * hB * fx + (hT - hB) * fx * (wallH / wallH) * 0;
        const xm = (cx - (hB + hT) / 2) + (hB + hT) * fx;
        s += `<circle cx="${P(xm)}" cy="${P((yB + yT) / 2 + 1)}" r="1.1" fill="${A}"/>`;
      }

      /* beaded cornice (kapota) at the top of the wall */
      s += beads(cx - hT, cx + hT, yT - 1.5, 0.8, 1.1, A);

      /* hara — parapet of miniature shrines crowning this tala */
      const kr = 3.2 - t * 0.25;
      // central sala (barrel pavilion) as a kudu, corner kutas as kalashas
      s += kudu(cx, yT - 1, kr + 1.2);
      const slots = Math.max(2, 4 - Math.floor(t / 2));
      for (let k = 1; k <= slots; k++) {
        const off = (hT) * (k / (slots + 0.4));
        s += kudu(cx - off, yT - 1, kr);
        s += kudu(cx + off, yT - 1, kr);
      }
    }

    /* crowning sala-shikhara: a horizontal barrel vault with gable kudus */
    const sy = topY;
    s += `<path d="M${cx-topHalf-6} ${sy} Q ${cx-topHalf-6} ${sy-20} ${cx-topHalf+6} ${sy-22}
                  L${cx+topHalf-6} ${sy-22} Q ${cx+topHalf+6} ${sy-20} ${cx+topHalf+6} ${sy} Z"
            stroke="${A}" stroke-width="1.1" fill="${FILL}"/>`;
    s += kudu(cx, sy - 4, 8);
    s += beads(cx - topHalf + 2, cx + topHalf - 2, sy + 1, 0.9, 1.3, A);

    /* ridge of kalashas along the crown */
    const ridgeY = sy - 22;
    const pots = 5;
    for (let k = 0; k < pots; k++) {
      const fx = pots === 1 ? 0.5 : k / (pots - 1);
      const x = (cx - topHalf + 6) + (2 * (topHalf - 6)) * fx;
      kalasha; // (keep tree-shakers calm)
      s += kalasha(x, ridgeY, k === (pots - 1) / 2 ? 7 : 5);
    }

    return `<svg class="sth-orn" viewBox="0 0 ${VW} ${VH}" width="${w}" height="${h}"
              preserveAspectRatio="xMidYMax meet" aria-hidden="true">${s}</svg>`;
  },

  /* MAKARA-TORANA — a cusped arch springing from two makara mouths,
     crowned by a kirtimukha glory-face. Used as a doorway crown. */
  torana: (w = 220, h = 150) => {
    const VW = 220, VH = 150, cx = VW / 2;
    const springY = 132, R = 86, n = 11;
    let s = "";
    /* outer arch band */
    s += `<path d="${cuspArc(cx, springY, R, Math.PI, 2 * Math.PI, 1)}" stroke="${A}" stroke-width="1.4" fill="none"/>`;
    /* inner cusped (foliate) edge */
    s += `<path d="${cuspArc(cx, springY, R - 10, Math.PI, 2 * Math.PI, n, 0)}" stroke="${A}" stroke-width="1" fill="none"/>`;
    /* bead course between the two arches */
    s += `<path d="${cuspArc(cx, springY, R - 5, Math.PI, 2 * Math.PI, 1)}" stroke="${A2}" stroke-width="0.6" fill="none" stroke-dasharray="1 2.4"/>`;
    /* makaras at the springing */
    s += makara(cx - R, springY, 9, 1);
    s += makara(cx + R, springY, 9, -1);
    /* kirtimukha at the apex */
    s += ORNAMENT.kirtimukha(cx, springY - R + 4, 15, true);
    return `<svg class="sth-torana" viewBox="0 0 ${VW} ${VH}" width="${w}" height="${h}"
              preserveAspectRatio="xMidYMin meet" aria-hidden="true">${s}</svg>`;
  },

  /* KIRTIMUKHA — the lion "face of glory": horns, bulging eyes, a fanged
     upper jaw and pearl strands issuing from the mouth corners. */
  kirtimukha: (cx, cy, r, raw = false) => {
    const fang = (x, dir) => `<path d="M${P(x)} ${P(cy+0.35*r)} l ${P(dir*0.12*r)} ${P(0.3*r)} l ${P(dir*0.12*r)} ${P(-0.3*r)} Z" fill="${A}" stroke="none"/>`;
    let g = `<g stroke="${A}" stroke-width="0.9" stroke-linejoin="round" fill="${FILL}">
      <!-- horns -->
      <path d="M${P(cx-0.55*r)} ${P(cy-0.5*r)} q ${P(-0.6*r)} ${P(-0.3*r)} ${P(-0.4*r)} ${P(-0.95*r)} q ${P(0.35*r)} ${P(0.25*r)} ${P(0.5*r)} ${P(0.55*r)}"/>
      <path d="M${P(cx+0.55*r)} ${P(cy-0.5*r)} q ${P(0.6*r)} ${P(-0.3*r)} ${P(0.4*r)} ${P(-0.95*r)} q ${P(-0.35*r)} ${P(0.25*r)} ${P(-0.5*r)} ${P(0.55*r)}"/>
      <!-- scalloped mane -->
      <path d="${cuspArc(cx, cy, r * 1.05, Math.PI * 1.15, Math.PI * 1.85, 7, 1)}" fill="none"/>
      <!-- mask -->
      <path d="M${P(cx-r)} ${P(cy)} Q ${P(cx-r)} ${P(cy-r)} ${P(cx)} ${P(cy-r)} Q ${P(cx+r)} ${P(cy-r)} ${P(cx+r)} ${P(cy)}
               Q ${P(cx+0.8*r)} ${P(cy+0.6*r)} ${P(cx)} ${P(cy+0.5*r)} Q ${P(cx-0.8*r)} ${P(cy+0.6*r)} ${P(cx-r)} ${P(cy)} Z"/>
      <!-- brows -->
      <path d="M${P(cx-0.7*r)} ${P(cy-0.15*r)} Q ${P(cx-0.35*r)} ${P(cy-0.45*r)} ${P(cx-0.08*r)} ${P(cy-0.18*r)}" fill="none"/>
      <path d="M${P(cx+0.7*r)} ${P(cy-0.15*r)} Q ${P(cx+0.35*r)} ${P(cy-0.45*r)} ${P(cx+0.08*r)} ${P(cy-0.18*r)}" fill="none"/>
      <!-- eyes -->
      <circle cx="${P(cx-0.38*r)}" cy="${P(cy-0.05*r)}" r="${P(0.16*r)}" fill="${A}" stroke="none"/>
      <circle cx="${P(cx+0.38*r)}" cy="${P(cy-0.05*r)}" r="${P(0.16*r)}" fill="${A}" stroke="none"/>
      <!-- forehead jewel -->
      <path d="M${P(cx)} ${P(cy-0.62*r)} l ${P(0.1*r)} ${P(0.12*r)} l ${P(-0.1*r)} ${P(0.12*r)} l ${P(-0.1*r)} ${P(-0.12*r)} Z" fill="${GB}" stroke="none"/>
      <!-- eye highlights -->
      <circle cx="${P(cx-0.34*r)}" cy="${P(cy-0.09*r)}" r="${P(0.05*r)}" fill="${GB}" stroke="none"/>
      <circle cx="${P(cx+0.42*r)}" cy="${P(cy-0.09*r)}" r="${P(0.05*r)}" fill="${GB}" stroke="none"/>
      <!-- fanged upper jaw (no lower jaw — that's the kirtimukha) -->
      <path d="M${P(cx-0.55*r)} ${P(cy+0.32*r)} Q ${P(cx)} ${P(cy+0.5*r)} ${P(cx+0.55*r)} ${P(cy+0.32*r)}" fill="none"/>
      ${fang(cx-0.5*r,1)}${fang(cx+0.26*r,1)}
      <!-- tongue -->
      <path d="M${P(cx-0.1*r)} ${P(cy+0.42*r)} Q ${P(cx)} ${P(cy+0.66*r)} ${P(cx+0.1*r)} ${P(cy+0.42*r)} Z" fill="${A}" fill-opacity="0.5" stroke="none"/>
      <!-- pearl tassels spilling from the jaw corners -->
      <g fill="${A}" stroke="none">
        ${[0,1,2,3].map(i=>`<circle cx="${P(cx-0.6*r)}" cy="${P(cy+0.4*r+i*0.16*r)}" r="${P(0.06*r)}"/>`).join("")}
        ${[0,1,2,3].map(i=>`<circle cx="${P(cx+0.6*r)}" cy="${P(cy+0.4*r+i*0.16*r)}" r="${P(0.06*r)}"/>`).join("")}
      </g>
    </g>`;
    if (raw) return g;
    return `<svg viewBox="${P(cx-1.6*r)} ${P(cy-1.6*r)} ${P(3.2*r)} ${P(3.2*r)}" width="${P(3.2*r)}" aria-hidden="true">${g}</svg>`;
  },

  /* LOTUS end-cap — a layered padma used at frieze tips. */
  lotusCap: (size = 26) => `
    <svg viewBox="0 0 36 26" width="${size}" height="${P(size*26/36)}" aria-hidden="true">
      ${lotus(18, 22, 16, 9, Math.PI * 0.96)}
    </svg>`,

  /* DEEPAM — a kuthuvilakku (standing brass lamp): tiered stem with
     beaded knobs and a five-flame bowl. */
  deepam: (w = 46, h = 84) => {
    const cx = 30;
    return `<svg viewBox="0 0 60 110" width="${w}" height="${h}" aria-hidden="true" class="sth-deepam">
      <g stroke="${A}" stroke-width="1" fill="${FILL}" stroke-linejoin="round">
        <!-- stepped base -->
        <ellipse cx="${cx}" cy="103" rx="20" ry="5"/>
        <ellipse cx="${cx}" cy="98"  rx="14" ry="4"/>
        <ellipse cx="${cx}" cy="93"  rx="9"  ry="3"/>
        <!-- stem with knobs -->
        <rect x="${cx-2.5}" y="55" width="5" height="38"/>
        <ellipse cx="${cx}" cy="84" rx="5" ry="3"/>
        <ellipse cx="${cx}" cy="72" rx="6" ry="3.4"/>
        <ellipse cx="${cx}" cy="60" rx="5" ry="3"/>
        <!-- lamp bowl with five lips -->
        <path d="M${cx-16} 52 Q ${cx} 62 ${cx+16} 52 Q ${cx+18} 47 ${cx+14} 45
                 L ${cx-14} 45 Q ${cx-18} 47 ${cx-16} 52 Z"/>
        ${[-14,-7,0,7,14].map(o=>`<path d="M${cx+o-2} 45 L ${cx+o} 42 L ${cx+o+2} 45 Z" fill="${A}" stroke="none"/>`).join("")}
      </g>
      <!-- flames -->
      <g class="sth-flame">
        ${[-14,0,14].map(o=>`<path d="M${cx+o} 30 C ${cx+o+3} 38 ${cx+o+4} 41 ${cx+o+2} 44 C ${cx+o-2} 47 ${cx+o-4} 41 ${cx+o} 30 Z" fill="var(--sth-deepam)"/>
          <ellipse cx="${cx+o}" cy="40" rx="1.6" ry="3.4" fill="${GB}"/>`).join("")}
      </g>
    </svg>`;
  },
};

/* tiny helper to register a component from a template + style string */
function define(tag, render) {
  if (customElements.get(tag)) return;
  customElements.define(tag, class extends HTMLElement {
    connectedCallback() {
      if (this._mounted) return;
      this._mounted = true;
      const root = this.attachShadow({ mode: "open" });
      render(this, root);
    }
  });
}

/* CSS shared into every shadow root so components honor page theme vars */
const SHARED = `
  :host { box-sizing: border-box; }
  *, *::before, *::after { box-sizing: inherit; }
`;

/* ---------------------------------------------------------------
   <sth-button>  — a bronze plinth button with a carved edge.
   Attributes: variant="solid|ghost"  (default solid)
   --------------------------------------------------------------- */
define("sth-button", (el, root) => {
  const variant = el.getAttribute("variant") || "solid";
  root.innerHTML = `
    <style>
      ${SHARED}
      :host { display: inline-block; }
      button {
        font-family: var(--sth-font-display);
        letter-spacing: var(--sth-tracking);
        text-transform: uppercase;
        font-size: .82rem;
        color: var(--sth-ink);
        padding: .7em 1.6em;
        border-radius: var(--sth-radius);
        cursor: pointer;
        position: relative;
        transition: transform .12s ease, box-shadow .2s ease, background .2s ease;
        border: 1px solid var(--sth-accent);
        background: linear-gradient(180deg, var(--sth-bronze-lit), var(--sth-bronze));
        box-shadow: var(--sth-carve);
      }
      :host([variant="ghost"]) button {
        background: transparent;
        color: var(--sth-accent);
      }
      button::before, button::after {
        content: ""; position: absolute; top: 4px; bottom: 4px; width: 1px;
        background: var(--sth-line);
      }
      button::before { left: 5px; }  button::after { right: 5px; }  /* pillar grooves */
      button:hover { transform: translateY(-1px); box-shadow: var(--sth-carve), var(--sth-glow); }
      button:active { transform: translateY(1px); }
    </style>
    <button><slot></slot></button>`;
});

/* ---------------------------------------------------------------
   <sth-card>  — content framed under a gopuram crown.
   Attributes: title, crown="true|false"
   --------------------------------------------------------------- */
define("sth-card", (el, root) => {
  const title = el.getAttribute("title") || "";
  const crown = el.getAttribute("crown") !== "false";
  root.innerHTML = `
    <style>
      ${SHARED}
      :host { display: block; }
      .card {
        position: relative;
        background: var(--sth-surface);
        border: 1px solid var(--sth-line);
        border-radius: var(--sth-radius);
        padding: ${crown ? "4.6rem" : "1.4rem"} 1.4rem 1.4rem;
        color: var(--sth-ink);
        font-family: var(--sth-font-body);
        box-shadow: var(--sth-carve);
      }
      .crown { position: absolute; top: -70px; left: 50%; transform: translateX(-50%);
               filter: drop-shadow(0 2px 3px rgba(0,0,0,.5)); }
      .title {
        font-family: var(--sth-font-display);
        letter-spacing: var(--sth-tracking);
        text-transform: uppercase;
        font-size: 1rem; color: var(--sth-accent);
        text-align: center; margin: 0 0 .4rem;
      }
      .rule { height:1px; background: var(--sth-line); margin: .2rem auto .9rem; width: 60%; }
      ::slotted(*) { font-family: var(--sth-font-body); line-height: 1.6; }
    </style>
    <div class="card">
      ${crown ? `<div class="crown">${ORNAMENT.gopuram(150, 138)}</div>` : ""}
      ${title ? `<h3 class="title">${title}</h3><div class="rule"></div>` : ""}
      <slot></slot>
    </div>`;
});

/* ---------------------------------------------------------------
   <sth-arch>  — frames any content inside a Dravidian arch (torana).
   --------------------------------------------------------------- */
define("sth-arch", (el, root) => {
  root.innerHTML = `
    <style>
      ${SHARED}
      :host { display: block; position: relative; padding: 3.6rem 1.5rem 1.4rem; margin-top: 2.4rem; }
      .crown { position: absolute; top: -2.3rem; left: 50%; transform: translateX(-50%);
               width: 86%; filter: drop-shadow(0 2px 3px rgba(0,0,0,.5)); }
      .crown svg { display: block; width: 100%; height: auto; }
      .jamb { position: absolute; bottom: 0; top: 1.1rem; width: 0;
              border-left: 1px solid var(--sth-line); }
      .jamb.l { left: .5rem; } .jamb.r { right: .5rem; }
      .jamb::before { content:""; position:absolute; top:0; bottom:0; left:3px;
                      border-left: 1px dotted var(--sth-line); }
      .sill { position:absolute; left:.5rem; right:.5rem; bottom:0; height:0;
              border-top: 1px solid var(--sth-line); }
      .inner { position: relative; color: var(--sth-ink); font-family: var(--sth-font-body);
               text-align: center; }
    </style>
    <div class="crown">${ORNAMENT.torana()}</div>
    <span class="jamb l"></span><span class="jamb r"></span><span class="sill"></span>
    <div class="inner"><slot></slot></div>`;
});

/* ---------------------------------------------------------------
   <sth-divider>  — a carved frieze line, lotus-capped at both ends.
   Attributes: label  (optional centered text)
   --------------------------------------------------------------- */
define("sth-divider", (el, root) => {
  const label = el.getAttribute("label") || "";
  root.innerHTML = `
    <style>
      ${SHARED}
      :host { display: block; }
      .row { display: flex; align-items: center; gap: .6rem; margin: 1.2rem 0; }
      .line { flex: 1; height: 0; border-top: 1px solid var(--sth-line);
              position: relative; }
      .line::before { content:""; position:absolute; left:0; right:0; top:2px;
                      border-top: 1px dotted var(--sth-line); }
      .label { font-family: var(--sth-font-display); letter-spacing: var(--sth-tracking);
               text-transform: uppercase; font-size:.7rem; color: var(--sth-ink-muted);
               white-space: nowrap; }
    </style>
    <div class="row">
      ${ORNAMENT.lotusCap()}
      <span class="line"></span>
      ${label ? `<span class="label">${label}</span><span class="line"></span>` : ""}
      ${ORNAMENT.lotusCap()}
    </div>`;
});

/* ---------------------------------------------------------------
   <sth-jali>  — a pierced lattice screen used as a background panel.
   Renders a tiling geometric pattern (the perforated stone window).
   Attributes: density (number, default 7)
   --------------------------------------------------------------- */
define("sth-jali", (el, root) => {
  const d = Number(el.getAttribute("density") || 7);
  root.innerHTML = `
    <style>
      ${SHARED}
      :host { display: block; position: relative; }
      .veil { position: absolute; inset: 0; opacity: .5; pointer-events: none; }
      .content { position: relative; padding: 1.4rem; color: var(--sth-ink);
                 font-family: var(--sth-font-body); }
    </style>
    <svg class="veil" width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id="jali-${d}" width="${d*6}" height="${d*6}" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="var(--sth-line)" stroke-width="1"
             transform="translate(${d*3} ${d*3})">
            <path d="M0 -${d*2.6} L${d*2.6} 0 L0 ${d*2.6} L-${d*2.6} 0 Z"/>
            <circle cx="0" cy="0" r="${d*1.1}"/>
            <path d="M0 -${d*1.1} L${d*1.1} 0 L0 ${d*1.1} L-${d*1.1} 0 Z"/>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jali-${d})"/>
    </svg>
    <div class="content"><slot></slot></div>`;
});

/* ---------------------------------------------------------------
   <sth-pillar>  — a load-bearing column wrapper. Place two around a
   block to colonnade it, or use one as a decorative vertical rule.
   --------------------------------------------------------------- */
define("sth-pillar", (el, root) => {
  const S = (s) => s; // local readability
  const capital = `
    <svg viewBox="0 0 54 78" width="100%" aria-hidden="true">
      <g stroke="${A}" stroke-width="1" fill="${FILL}" stroke-linejoin="round">
        <!-- potika (corbel bracket) with two rolled ends + median band -->
        <path d="M4 5 H50 V13 Q50 17 46 18 L40 19 Q41 13 36 13 L18 13 Q13 13 14 19 L8 18 Q4 17 4 13 Z"/>
        <line x1="6" y1="9" x2="48" y2="9" stroke="${A2}" stroke-width="0.6"/>
        <circle cx="12" cy="15.5" r="1.4" fill="${A}" stroke="none"/>
        <circle cx="42" cy="15.5" r="1.4" fill="${A}" stroke="none"/>
        <!-- palagai (abacus slab) -->
        <rect x="9" y="20" width="36" height="6"/>
        ${beads(13, 41, 23, 0.8, 1.6, A)}
        <!-- kumbha (pot capital) -->
        <path d="M18 27 H36 L34 31 Q44 36 38 44 Q27 50 16 44 Q10 36 20 31 Z"/>
        <line x1="14" y1="40" x2="40" y2="40" stroke="${A2}" stroke-width="0.6"/>
        <!-- collar to shaft -->
        <rect x="20" y="49" width="14" height="5"/>
      </g>
    </svg>`;
  const base = `
    <svg viewBox="0 0 54 66" width="100%" aria-hidden="true">
      <g stroke="${A}" stroke-width="1" fill="${FILL}" stroke-linejoin="round">
        <rect x="20" y="0" width="14" height="6"/>
        <!-- inverted kumbha (pot) -->
        <path d="M16 7 Q27 4 38 7 Q44 13 38 18 H16 Q10 13 16 7 Z"/>
        <!-- stacked moldings -->
        <rect x="13" y="19" width="28" height="5"/>
        <rect x="9"  y="24" width="36" height="6"/>
        <!-- saduram (square plinth) with a kudu on the face -->
        <rect x="5" y="30" width="44" height="30"/>
        ${kudu(27, 52, 7)}
        ${beads(9, 45, 33, 0.8, 1.8, A)}
      </g>
    </svg>`;
  root.innerHTML = `
    <style>
      ${SHARED}
      :host { display: flex; flex-direction: column; align-items: stretch;
              width: 56px; align-self: stretch; }
      .cap, .base { flex: 0 0 auto; }
      .cap svg, .base svg { display: block; }
      .shaft { flex: 1 1 auto; position: relative; min-height: 48px; margin: -1px 9px 0;
               background: linear-gradient(90deg,
                  var(--sth-granite) 0%, #4b4034 16%, var(--sth-granite-2) 50%,
                  #4b4034 84%, var(--sth-granite) 100%);
               border-left: 1px solid var(--sth-line);
               border-right: 1px solid var(--sth-line); }
      .shaft::before { content:""; position:absolute; inset:0;
               background: repeating-linear-gradient(90deg,
                  transparent 0 5px, var(--sth-line) 5px 5.5px, transparent 5.5px 10px);
               opacity:.4; }
      .shaft::after { content:""; position:absolute; left:50%; top:42%;
               width:18px; height:18px; transform:translate(-50%,-50%) rotate(45deg);
               border:1px solid var(--sth-line); }
    </style>
    <div class="cap">${capital}</div>
    <div class="shaft"></div>
    <div class="base">${base}</div>`;
});

/* ---------------------------------------------------------------
   <sth-lamp>  — a lit deepam accent, e.g. for "live"/featured states.
   --------------------------------------------------------------- */
define("sth-lamp", (el, root) => {
  root.innerHTML = `
    <style>
      ${SHARED}
      :host { display: inline-flex; align-items: center; gap:.5rem;
              font-family: var(--sth-font-display); letter-spacing: var(--sth-tracking);
              text-transform: uppercase; font-size:.72rem; color: var(--sth-accent); }
      .sth-flame { transform-origin: 30px 44px; animation: flick 1.6s ease-in-out infinite; }
      @keyframes flick { 0%,100%{ transform: scaleY(1) } 50%{ transform: scaleY(1.1) translateY(-1px) } }
      @media (prefers-reduced-motion: reduce){ .sth-flame{ animation:none } }
    </style>
    ${ORNAMENT.deepam(24, 44)}<slot></slot>`;
});

/* ---------------------------------------------------------------
   <sth-realm>  — optional theme scope wrapper. Lets a developer set
   theme="chola" on a subtree (forwards to data-theme for the CSS).
   --------------------------------------------------------------- */
define("sth-realm", (el, root) => {
  const theme = el.getAttribute("theme") || "chola";
  el.setAttribute("data-theme", theme);
  root.innerHTML = `<style>:host{ display:block; }</style><slot></slot>`;
});

/* Expose globally so the library works whether it's loaded as a classic
   <script>, an ES module, or imported for side effects by a bundler.
   (Classic <script> matters because it also works from a file:// URL,
   where browsers block <script type="module"> for security.) */
const Sthapati = { version: "0.1.0", theme: "chola", ORNAMENT };
if (typeof window !== "undefined") window.Sthapati = Sthapati;
