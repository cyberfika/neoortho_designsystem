export function SectionSlide({ number = "02.", label = "Nossa trajetória", title = "Uma trajetória de excelência pela inovação" }) {
  const { SlideFrame, EllipseOutline } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="title">
      <EllipseOutline width="70%" left="-16%" top="42%" rotate={-8} color="rgba(255,255,255,.28)" />
      <img src="../assets/logos/neoortho_logo_branco_medartis.png" alt="NeoOrtho" style={{ position: "absolute", top: 56, right: 72, width: 150 }} />
      <div style={{ position: "absolute", left: 80, top: "50%", transform: "translateY(-50%)", maxWidth: 760 }}>
        <span style={{ display: "block", fontSize: 13, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", fontWeight: 600, color: "var(--teal-500)", marginBottom: 22 }}>{number} {label}</span>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 72, lineHeight: 1.06, letterSpacing: "-0.02em", color: "#fff" }}>{title}</h2>
      </div>
    </SlideFrame>
  );
}
