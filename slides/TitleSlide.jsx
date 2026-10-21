export function TitleSlide({ eyebrow = "Apresentação institucional 2026", title = "Viver em", accent = "movimento.", subtitle = "NeoOrtho — medartis group" }) {
  const { SlideFrame } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="title">
      <img src="../assets/logos/neoortho_logo_branco_medartis.png" alt="NeoOrtho" style={{ position: "absolute", top: 64, left: 80, width: 210 }} />
      <div style={{ position: "absolute", left: 80, bottom: 96, maxWidth: 780 }}>
        <span style={{ display: "block", fontSize: 13, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", fontWeight: 600, color: "rgba(255,255,255,.72)", marginBottom: 24 }}>{eyebrow}</span>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 92, lineHeight: 1.02, letterSpacing: "-0.02em", color: "#fff" }}>
          {title} <span style={{ color: "var(--teal-500)" }}>{accent}</span>
        </h1>
        <p style={{ margin: "28px 0 0", fontSize: 20, color: "rgba(255,255,255,.78)" }}>{subtitle}</p>
      </div>
    </SlideFrame>
  );
}
