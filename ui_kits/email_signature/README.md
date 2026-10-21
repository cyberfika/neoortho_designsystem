# UI kit — assinatura de e-mail

A faithful React recreation of the brand library's only real HTML artifact,
`Padroes Visuais NeoOrtho/7 - Assinatura e-mail/assinatura_email_v5.html`.

Values are copied verbatim from that file and must not be "improved":
- table layout, `max-width: 700px`, `padding: 16px 0 0 16px`
- symbol at **80×80**, name column indented **100px**
- name `18px / 700 / #111111 / letter-spacing .5px`
- role `14px / 500 / #582c83`, company `13px / #333`
- contact rows `13px / #111111`, site link `#582c83`, no underline, weight 500
- font stack `'Poppins', Arial, sans-serif` — Poppins will not load in most mail clients, which is
  why Arial is the declared fallback. Do not add a webfont `@import` to a signature.

The original references the symbol from `https://neoortho.com.br/wp-content/uploads/arch/sneo.png`;
this kit uses the local `assets/logos/symbol_color.png` instead. **For real deployment keep the
hosted URL** — mail clients will not load a local file.

`index.html` lets you edit name and bilingual title live.
