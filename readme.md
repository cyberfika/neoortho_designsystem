# NeoOrtho Design System

The corporate design system for **NeoOrtho — medartis group**, a Brazilian manufacturer of
orthopaedic implants and prostheses based in Curitiba, Paraná.

---

## 1. Company & product context

NeoOrtho develops orthopaedic implants and prostheses and has done so for more than 20 years.
Founded **2004** inside Neodent (craniomaxillofacial production), independent brand since **2009**,
first FDA registrations in **2010**, custom-implant line (Neocustom) from **2019**, and since
**March 2025** part of the Swiss **Medartis Group** (Medartis acquired 51%). A new 7,800 m² factory
with triple the production capacity and LEED certification opens in **2026**. ~250+ employees,
100+ distributors in Brazil and 9 other Latin American countries; Mexico operations start Oct 2026.

**Product lines (the four "linhas"):**

| Line | PT label | Scope |
| --- | --- | --- |
| Trauma | TRAUMATOLOGIA | Upper & lower limbs, pelvis, ribs, extremities; intramedullary nails, anatomic plates |
| Spine | COLUNA | Cervical – thoracic – lumbar |
| Craniomaxillofacial | CMF | Craniomaxillofacial |
| Custom | PERSONALIZADOS | Patient-specific prostheses, incl. TMJ (ATM) |

Portfolio: **16,000+ items**. Materials: pure titanium and titanium alloy, biocompatible and
hypoallergenic, manufactured to ASTM F136 / F67 / F382 / F543 / F1264. Certifications carried in
communications: **ISO 13485:2016**, **ANVISA Boas Práticas de Fabricação**, **ISO 37001 (CBG)**,
**ESG em Foco / Sistema Fiep**.

**Surfaces this system covers.** NeoOrtho has no consumer software product. The brand lives in
*corporate communication surfaces*: the institutional presentation deck, letterhead and business
cards, the e-mail signature, video-call backgrounds, wallpapers, LinkedIn covers, and the
neoortho.com.br web presence. The UI kits and slide set here recreate those surfaces.

### Sources given (do not assume the reader has access)

- Mounted local folder **`Padroes Visuais NeoOrtho/`** — the brand's own asset library:
  - `0 - Manual de marca/brandbook_simplificado.pdf` — *Manual de Design Corporativo*, updated Jan 2026. **The single source of truth for logo, color, type.** Its full text is quoted throughout this readme.
  - `1 - Logos NeoOrtho e Medartis/` — NeoOrtho + Medartis logo files (PNG, SVG, PDF).
  - `3 - Modelo de Apresentacoes/Template NeoOrtho.pptx` — official slide master (too large to copy into this project; slide geometry was reconstructed from the institutional PDF instead).
  - `4 - Fundo para Telechamadas/`, `9 - Capa para LinkedIn/`, `13 - Papel de parede/` — applied brand backgrounds, copied to `assets/`.
  - `5 - Fontes/NeoOrtho/{Area Normal, Poppins}` — the licensed brand fonts, copied to `assets/fonts/`.
  - `7 - Assinatura e-mail/assinatura_email_v5.html` — the only real HTML artifact in the brand library; the source of the signature UI kit and of confirmed hex usage (`#582c83` links, `#111111` text).
  - `16 - Apresentação Institucional/NeoOrtho_Institucional 2026.pdf/.pptx` — the institutional deck; all copy, photography, product shots, maps, certification marks and slide backgrounds in `assets/` were extracted from it.
  - `6 - Integracao NeoOrtho/` — onboarding decks (institutional, 5S, quality, products, safety, IT, finance). Not parsed; PPTX files exceed the copy limit.
- Uploaded files: the logo set (`NEOORTHO_LOGO_*.png`, `neoortho_logo_preferencial.svg/.pdf`, `symbol_color/white.png`), the full Poppins family, and the institutional PDF. Kept in `uploads/`.
- No codebase, Figma file, or GitHub repository was provided. **There is no component library to mirror**, so the components in `components/` are a from-scratch standard set built strictly on brandbook values — see "Intentional additions".

---

## 2. Content fundamentals

**Language.** Portuguese (pt-BR) is primary. English versions exist for international material
(the 20-anos manifesto video has an EN loc). Job titles in the signature are bilingual:
`Cargo Português | Cargo Inglês`.

**Voice: first-person plural, always.** NeoOrtho speaks as *nós* — "Devolvemos movimento",
"Acreditamos", "Somos os parceiros incansáveis", "Investimos constantemente". It never says *eu*,
and it addresses the reader as *você* only rarely and warmly ("Seja bem-vindo!", "Muito obrigado!").
The brandbook itself talks to partners as equals: "estamos aqui para vocês".

**The macro concept: "Viver em movimento."** Everything ladders up to it. Movement =
independence = dignity. The signature copy move is a list of concrete human verbs rather than
abstractions: *caminhar, abraçar, dançar, sorrir* — "a liberdade de caminhar, abraçar, dançar e
sorrir sem limitações". Reuse that register; do not write generic medtech copy.

**Tone.** Warm-technical. Emotional claims are always paired with a hard fact, and the pairing is
the house style: "Não medimos nosso sucesso em números, mas em vidas transformadas" sits next to
"+16 mil soluções seguras" and "+100 distribuidores". Human first, credential second.

**Casing.** Sentence case for headlines and body. Headline phrases usually end in a period —
"Viver em movimento.", "NeoOrtho.", "20 anos de excelência." Small ALL-CAPS is reserved for
category labels and value names: `TRAUMA`, `COLUNA`, `CMF`, `PERSONALIZADOS`, `EXCELÊNCIA`,
`COMPROMETIMENTO`, `SAÚDE`, `PARCERIA`, `CERTIFICAÇÕES:`. Never set a sentence in caps.

**Numbers.** Always with a leading plus and spelled-out scale: `+20 anos`, `+250 colaboradores`,
`+16 mil itens`, `+100 distribuidores`, `+7,8 mil m²`. Brazilian decimal comma. Years stand alone
as anchors on timelines (2004, 2005, 2009, 2010, 2015, 2019, 2025, 2026).

**Brand name.** Always `NeoOrtho` — one word, two capitals. Never "Neo Ortho", never "NEOORTHO"
in running text (the brandbook lists `Neo Or tho` and letterspaced variants as errors). The
descriptor `medartis group` is set lowercase, as part of the lockup.

**Emoji: never.** None appear anywhere in the brand library. Bullets are a plain `●`.

**Two reusable lines** (copy them exactly):
- Positioning line: **Viver em movimento.**
- Partnership line: **Parceria que move.**

**Sample body paragraph in the house voice** (from the manifesto, brandbook p.018):
> "Acreditamos que o movimento é a essência da liberdade. É o direito de caminhar sob o próprio
> passo, de abraçar sem hesitar, de sorrir e viver plenamente."

---

## 3. Visual foundations

### Color
The brand is **purple-led**. `#582C83` (PANTONE 268 C) is *o nosso roxo* and carries the identity;
the brandbook deliberately expanded around it "para fortalecer o protagonismo do roxo" with darker
tones for depth (`#3b2368`, `#27144c`) and lighter, more luminous ones for energy and movement
(`#6951b9`, `#7a5dd6`, `#731ea0`, `#ad60ea`). Secondary: **teal `#00B0B9`** (PANTONE 7466 C,
"azul institucional") and the support gray **`#D9D9D6`** (PANTONE COOL GRAY 1 C). Mint `#84e9a7`
completes the line palette. There is no brand red, orange, or yellow — warmth comes from
photography, never from a swatch.

Rules the brandbook states outright: always specify Pantone where reproduction allows; use the
codes, never the eyedropper; any color not in the guide is unauthorised. Tints are permitted only
in **20% steps**, and *any tint below 60% must be treated as a light background requiring dark
text*. That is also the sanctioned mechanism for hover states.

### Type
**Area Normal** for titles (Thin / Regular / SemiBold / Bold / ExtraBold / Black) — *SemiBold is
the default title weight* per the brandbook's "na prática" spread. **Poppins Regular** for body.
Both are geometric sans faces, which is why the ellipse-based logo sits so naturally with them.
Forbidden: outlines, drop shadows, any text effect; horizontal scaling or compression (use a real
weight instead); type at any angle other than 0° or 90°; centred or fully justified multi-line
body copy — **body text is flush left**; unauthorised typefaces. Layout is otherwise free, but must
respect alignment, spacing, contrast, hierarchy, balance.

### The grafismo (the one graphic device)
There is exactly one: the **central ellipse of the NeoOrtho symbol**, extracted and unfolded. It
appears three ways, all present in the real assets:
1. **Hairline ellipse outline** in purple, oversized and cropped by the canvas, laid over
   photography (`assets/graphics/ellipse-outline.png`, LinkedIn cover, wallpaper).
2. **Soft tonal ellipses** — same shape filled with a lighter purple and blurred into the
   background, producing the deep purple lens-like fields of the title/section slides and the
   video-call backgrounds (`assets/backgrounds/slide-bg-title.png`, `slide-bg-section.png`).
3. **Ellipse as a mask** — photography clipped to the ellipse instead of a rectangle
   (`assets/photos/photo-new-factory.png`).
No other shapes, no icon-badges, no patterns, no textures, no grain. Never draw a new grafismo:
scale and crop the existing one.

### Backgrounds
Three masters, and only three:
- **Purple field** — `--gradient-purple-deep`, or `assets/backgrounds/slide-bg-title.png`. Title
  and section slides, video-call backgrounds. White logo, white type.
- **Light field** — near-white `#ebebeb` warming to a pale purple in one corner
  (`--gradient-light-field`, `assets/backgrounds/slide-bg-light.png`). All content slides.
- **Full-bleed photography** with a purple bar or protection gradient for the type.
Never white-on-white cards floating on white; content slides put content directly on the light field.

### Photography
Brandbook p.048: natural and authentic images, **real people in movement**, spontaneous activity
and interaction, conveying the calm and joy of someone free to move. Lighting is preferentially
**natural, warm, welcoming** — golden-hour skin tones, greens and honey neutrals against the purple
UI. Never cool, clinical, blue-white, black-and-white, or grainy. Multi-generational family and
patient-clinician scenes are the archetypes (`assets/photos/`). Product photography is the opposite
register: clean, isolated implants on bone/anatomy, neutral background.

### Layout
Generous margins; the logo sits top-left or bottom-right with at least one "O" of clear space
(`--space-brand-clear`) — "quanto mais espaço negativo ao redor da marca, melhor". The fixed
elements are the logo lockup and, on photographic pieces, a **full-width purple footer bar** holding
the positioning line (`Viver em` in white, `movimento.` in teal) and the white logo. Body measure
caps around 66ch (`--max-measure`).

### Corners, cards, borders
Capsular geometry, inherited from the ellipse: pills (`--radius-pill`) for buttons, chips and tags;
`--radius-lg` (20px) for cards; `--radius-xl` for large media blocks. Cards on the light field are
white with a hairline `#d9d9d6` border and `--shadow-sm`/`--shadow-md` — **border first, shadow
second**; a card never uses a colored left border. On purple, cards become
`rgba(255,255,255,.08)` fills with a `rgba(255,255,255,.28)` hairline. Dividers are 1px `#d9d9d6`.

### Shadows, transparency, blur
Elevation is low, neutral, and purple-tinted only in its alpha (`rgba(39,20,76,…)`) — never a
colored glow, never an inner shadow used decoratively. `--shadow-inset-top` exists solely to give
solid purple surfaces a 1px light lip. Transparency is used for two things: white overlays on
purple (8–28% for surfaces and rules) and the **protection gradient**
(`--gradient-protection`, transparent → 72% `#27144c`) under type on photography. Prefer the
protection gradient over a capsule when type sits on an image; use a capsule only for small
free-floating labels. Backdrop blur appears only in the soft tonal ellipses of the backgrounds —
do not add frosted-glass panels to UI.

### Animation & interaction
Motion should read as *continuous movement*, matching the concept: slow, even, no bounce and no
overshoot. Fades and gentle vertical rises of 8–16px, `--ease-standard`/`--ease-out`,
`--duration-base` (240ms) for UI and `--duration-ambient` for ambient background drift. Never
springy, never elastic.
- **Hover** — lighten a solid purple by one 20% step (`--action-primary-bg-hover`), or fill an
  outline control with the 20% tint. Text links go `#582c83` → `#731ea0` plus underline.
- **Press** — one step *darker* (`--action-primary-bg-active`). No scale, no translate: the brand
  forbids distorting its elements, and shrinking buttons reads as the same gesture.
- **Focus** — `--focus-ring` (3px `rgba(122,93,214,.45)`), never removed.
- **Disabled** — `#d9d9d6` on `#8e8e94`.

### Logo rules (non-negotiable)
Preferential version = NeoOrtho + `medartis group` signature, and it is always first choice. Use the
reduced version *only* when the Medartis signature becomes illegible. Positive and negative versions
exist for contrast. Minimum widths: **110px** digital preferential, **70px** digital reduced,
**40mm** print preferential, **25mm** print reduced. Never: place on insufficient contrast, alter
proportions between elements, crowd it, distort/compress, recolor outside the approved palette, or
apply shadows/glows.

---

## 4. Iconography

**NeoOrtho has no icon system.** Nothing in the brand library — brandbook, deck, signature,
letterhead — defines an icon set, icon font, or SVG sprite, and the brandbook's only graphic
element is the ellipse. What actually appears in place of icons:

- **The NeoOrtho symbol** (`assets/logos/symbol_color.png`, `symbol_white.png`) — the stylised
  ellipse mark, used alone as a bullet-scale brand token.
- **Third-party certification marks** as raster images: `assets/certs/cert-iso13485-anvisa.png`,
  `cert-iso37001.png`, `cert-esg.png`.
- **The Medartis wordmark** (`assets/logos/medartis_logo.png`, `medartis_logo_branco.png`).
- **Product photography** carrying meaning that icons would elsewhere — the four line images in
  `assets/products/` are how the portfolio is illustrated.
- **Plain `●` bullets** in body copy. Numerals and years as graphic anchors on timelines.
- **A flat purple LATAM map** (`assets/maps/presence-map.png`) for the presence slide.
- **No emoji. No unicode dingbats** other than `●`.

**Substitution, flagged:** where an interface genuinely needs UI affordance glyphs (close, chevron,
menu, search), this system links **Lucide** from CDN
(`https://unpkg.com/lucide@0.451.0/dist/umd/lucide.js`) at 1.5px stroke, `currentColor`, 20/24px.
Lucide's geometric, round-capped, even-weight drawing is the closest match to Area Normal and to the
ellipse motif. **This is a substitution, not a brand asset** — if NeoOrtho has an approved glyph
set, send it and it will replace Lucide. Never hand-draw a NeoOrtho icon or redraw the symbol.

---

## 5. Index

```
styles.css              → the only file consumers link; @imports the token files
tokens/
  base.css              body/heading reset — token files alone apply nothing
  fonts.css             @font-face for Area Normal + Poppins
  colors.css            brandbook palette + 20% matiz steps
  typography.css        families, weights, scale, tracking
  spacing.css           4px scale, page gutters, logo minimum sizes
  effects.css           radii, elevation, brand gradients, motion
  semantic.css          aliases (--brand, --surface-*, --action-*) + link styles
components/
  core/                 Button, IconButton, Tag, Badge, Card, StatBlock, Divider
  forms/                Input, Select, Checkbox, Radio, Switch
  brand/                Logo, PositioningBar, EllipseFrame, SectionEyebrow
guidelines/             foundation specimen cards (Design System tab)
ui_kits/
  website/              neoortho.com.br marketing recreation
  email_signature/      the assinatura_email_v5 recreation
slides/                 institutional deck slide types (1280×720)
templates/               copyable starting folders for consuming projects
  institutional-deck/   4-slide 16:9 institutional deck (Design Component)
  email-signature/      the e-mail signature, exact source values
assets/
  fonts/                Area Normal (.otf) + Poppins (.ttf)
  logos/                NeoOrtho (color/white/black, ± medartis signature), symbol, Medartis
  backgrounds/          the three slide masters
  graphics/             ellipse-outline, gradient-pill
  photos/               brand photography from the institutional deck
  products/             the four product-line images
  certs/                ISO 13485 + ANVISA, ISO 37001, ESG
  maps/                 LATAM presence map
  wallpaper_desktop.jpg, linkedin_cover.jpg, telechamada_1/2.png
uploads/                original untouched source files
SKILL.md                Agent-Skills entry point
```

### Intentional additions

No source defined a component inventory (there is no codebase or Figma file — only brand
guidelines), so `components/` is a standard set authored from brandbook values. Each addition
exists because a NeoOrtho communication surface needs it:

- `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch` — the brandbook defines
  hover behaviour for buttons explicitly ("quando o cursor do mouse passar por cima de um botão"),
  so interactive controls are in scope; the forms set is required by the *Ficha Cadastral*
  (registration form) surface in the brand library.
- `Card`, `Divider`, `Badge`, `Tag` — containers for the deck's fact/value blocks.
- `StatBlock` — the "+250 colaboradores" / "+16 mil soluções" figure treatment, which is a genuine
  recurring brand pattern.
- `Logo`, `PositioningBar`, `EllipseFrame`, `SectionEyebrow` — encode brand rules (minimum sizes,
  clear space, the purple footer bar, the ellipse mask) so consumers cannot violate them by accident.

### Known gaps / open questions

- **Product-line colors are confirmed by the brand owner** (30 Jul 2026): Trauma `#731EA0`,
  Coluna `#AD60EA`, Craniomaxilofacial `#00B0B9`, Personalizados `#84E9A7`.
- **`Template NeoOrtho.pptx` and the onboarding decks were not parsed** (over the 30 MiB copy
  limit). Slide geometry was reconstructed from `NeoOrtho_Institucional 2026.pdf`. If the PPTX
  master differs, send it in a smaller form.
- **No web source markup.** `neoortho.com.br` is a JS-rendered WordPress build; its HTML could not
  be fetched. The website UI kit's information architecture, nav labels, product copy, resources
  area and footer credit were read off the live site, but the layout is brand-derived, not a
  markup-level recreation. Send the site repo for pixel accuracy.
- **Company history dates conflict between sources.** The institutional deck dates the FDA
  registration to 2010 and the own-facility move to 2015; the live site's "Nossa História" page says
  FDA **2013** and the facility move **2010**. The slide timeline follows the deck (the newer,
  brand-approved document). **Worth reconciling.**
- **No approved UI icon set** (see Iconography — Lucide substituted).
