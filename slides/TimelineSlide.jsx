export function TimelineSlide({ title = "Uma trajetória de excelência", items = [
  { year: "2004", head: "Fundação", text: "A NeoOrtho nasceu dentro da Neodent com a produção de implantes para craniomaxilofacial." },
  { year: "2009", head: "Marca independente", text: "A NeoOrtho passa a ser uma marca independente (cisão com Neodent)." },
  { year: "2010", head: "Registro FDA", text: "Primeiros produtos registrados no FDA, com reconhecimento no exterior." },
  { year: "2019", head: "Personalizados", text: "Início dos projetos da linha Neocustom, de próteses personalizadas." },
  { year: "2025", head: "Aquisição", text: "Compra de 51% da NeoOrtho pela multinacional suíça Medartis." },
  { year: "2026", head: "Nova fábrica", text: "Triplo da capacidade produtiva e mais de 7 mil m²." }
] }) {
  const { SlideFrame } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="light">
      <img src="../assets/logos/neoortho_logo_color_medartis.png" alt="NeoOrtho" style={{ position: "absolute", top: 48, right: 64, width: 150 }} />
      <div style={{ position: "absolute", inset: "132px 80px 88px" }}>
        <h2 style={{ margin: "0 0 44px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 48, letterSpacing: "-0.02em", color: "var(--purple-700)" }}>{title}</h2>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 46, height: 2, background: "var(--gradient-purple-pill)" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 20 }}>
            {items.map(it => (
              <div key={it.year} style={{ position: "relative", paddingTop: 76 }}>
                <span style={{ position: "absolute", top: 0, left: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, color: "var(--purple-700)" }}>{it.year}</span>
                <span style={{ position: "absolute", top: 40, left: 0, width: 14, height: 14, borderRadius: 999, background: "var(--purple-700)", border: "3px solid #fff" }} />
                <span style={{ display: "block", fontSize: 15, fontWeight: 600, color: "var(--text-strong)", marginBottom: 8 }}>{it.head}</span>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: "var(--text-muted)" }}>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
