export function ClosingSlide({ title = "Obrigado", line = "Viver em", accent = "movimento.", contact = "neoortho.com.br · Curitiba, PR — Brasil" }) {
  const { SlideFrame, EllipseOutline } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="title">
      <EllipseOutline width="80%" left="34%" top="-30%" rotate={-12} color="rgba(255,255,255,.26)" />
      <div style={{ position: "absolute", left: 80, top: "50%", transform: "translateY(-50%)" }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 104, lineHeight: 1, letterSpacing: "-0.03em", color: "#fff" }}>{title}</h2>
        <p style={{ margin: "32px 0 0", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 34, color: "#fff" }}>{line} <span style={{ color: "var(--teal-500)" }}>{accent}</span></p>
        <p style={{ margin: "40px 0 0", fontSize: 16, color: "rgba(255,255,255,.72)" }}>{contact}</p>
      </div>
      <img src="../assets/logos/neoortho_logo_branco_medartis.png" alt="NeoOrtho" style={{ position: "absolute", bottom: 64, right: 80, width: 190 }} />
    </SlideFrame>
  );
}
