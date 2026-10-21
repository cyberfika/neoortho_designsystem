export function StatsSlide({ title = "Parceria", accent = "que move", stats = [
  { value: "20 anos", label: "de excelência. Qualidade, tecnologia, confiabilidade e custo-benefício." },
  { value: "+16 mil", label: "soluções seguras para a saúde nas linhas de CMF, Trauma, Coluna e personalizados." },
  { value: "+100", label: "distribuidores no Brasil e em outros 9 países da América Latina." }
] }) {
  const { SlideFrame, Divider } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="light">
      <img src="../assets/logos/neoortho_logo_color_medartis.png" alt="NeoOrtho" style={{ position: "absolute", top: 48, right: 64, width: 150 }} />
      <div style={{ position: "absolute", inset: "140px 80px 96px" }}>
        <h2 style={{ margin: "0 0 56px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 62, lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--purple-700)" }}>
          {title} <span style={{ color: "var(--teal-500)" }}>{accent}</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 56 }}>
          {stats.map((s, i) => (
            <div key={i}>
              <Divider style={{ marginBottom: 24 }} />
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 54, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--purple-700)" }}>{s.value}</div>
              <p style={{ margin: "16px 0 0", fontSize: 17, lineHeight: 1.55, color: "var(--text-body)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
