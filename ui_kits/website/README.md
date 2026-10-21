# UI kit — neoortho.com.br (marketing site)

Recreation of NeoOrtho's public marketing surface at **neoortho.com.br**.

**Caveat:** no site codebase or Figma file was provided. The information architecture, nav labels,
product-line copy, resources area and footer legal line were read off the live site; the visual
treatment comes from the brandbook and the institutional deck. Treat it as brand- and IA-accurate
rather than pixel-accurate — the live site is a JS-rendered WordPress build whose markup could not
be fetched.

Confirmed from the live site and reflected here: nav order Craniomaxilofacial · Coluna ·
Traumatologia · Próteses · IFU; a PT / ES / EN language switcher; a "FALE CONOSCO" CTA in caps;
a technical-materials area with IFU / Catálogos / Técnicas cirúrgicas; footer credit
"NEOORTHO® Produtos Ortopédicos S.A. © Todos os direitos reservados." with facebook + linkedin.

## Screens / sections
| File | Surface |
| --- | --- |
| `Header.jsx` | Sticky white header, colour lockup, underline nav, pill CTA |
| `Hero.jsx` | Full-bleed photography + protection gradient + hairline ellipse; "Viver em movimento." |
| `Sections.jsx` | `StatsStrip`, `PortfolioGrid`, `ManifestoBand`, `ResourcesBand`, `QualityBand`, `FactoryBand` |
| `ContactForm.jsx` | Registration-style form using the forms primitives; submits to a thank-you state |
| `Footer.jsx` | `PositioningBar` + purple sitemap footer with the Medartis wordmark |

## Interactions to try in `index.html`
- Click a product line card → detail sheet opens (Esc or "Voltar" closes it).
- Fill and submit the contact form → thank-you state, "Enviar outra" returns.
- Nav items set the active underline.

Everything visual comes from the primitives in `components/` and the tokens in `tokens/`.
