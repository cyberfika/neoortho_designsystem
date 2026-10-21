export function PortfolioSlide({ title = "Portfólio", lines = [
  { tag: "cmf", label: "Craniomaxilofacial", sub: "CMF", img: "../assets/products/line-cmf.png" },
  { tag: "coluna", label: "Cervical · Torácico · Lombar", sub: "COLUNA", img: "../assets/products/line-coluna.png" },
  { tag: "trauma", label: "Membros superiores e inferiores", sub: "TRAUMA", img: "../assets/products/line-trauma.png" },
  { tag: "personalizados", label: "Próteses paciente-específico", sub: "PERSONALIZADOS", img: "../assets/products/line-personalizados.png" }
] }) {
  const { SlideFrame, Tag } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="light">
      <img src="../assets/logos/neoortho_logo_color_medartis.png" alt="NeoOrtho" style={{ position: "absolute", top: 48, right: 64, width: 150 }} />
      <div style={{ position: "absolute", inset: "132px 80px 80px" }}>
        <h2 style={{ margin: "0 0 36px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 52, letterSpacing: "-0.02em", color: "var(--purple-700)" }}>{title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}>
          {lines.map(l => (
            <div key={l.sub} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ height: 250, background: "rgba(255,255,255,.6)", borderRadius: "var(--radius-lg)", border: "1px solid var(--gray-200)", display: "grid", placeItems: "center", overflow: "hidden" }}>
                <img src={l.img} alt={l.sub} style={{ maxHeight: 226, maxWidth: "88%", objectFit: "contain" }} />
              </div>
              <Tag line={l.tag}>{l.sub}</Tag>
              <span style={{ fontSize: 15, color: "var(--text-body)" }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
