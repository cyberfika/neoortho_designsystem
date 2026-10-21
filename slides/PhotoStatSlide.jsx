export function PhotoStatSlide({ value = "+250", unit = "colaboradores", text = "Investimos constantemente em capacitação especializada de colaboradores, novos equipamentos e maquinário de última geração.", photo = "../assets/photos/photo-team.png" }) {
  const { SlideFrame } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="plain">
      <img src={photo} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(39,20,76,.94) 0%,rgba(39,20,76,.80) 42%,rgba(39,20,76,0) 78%)" }} />
      <div style={{ position: "absolute", left: 80, top: 150, width: 520, color: "#fff" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 116, lineHeight: 1, letterSpacing: "-0.03em" }}>{value}</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 34, marginTop: 6, color: "var(--teal-500)" }}>{unit}</div>
        <p style={{ margin: "36px 0 0", fontSize: 19, lineHeight: 1.6, color: "rgba(255,255,255,.84)" }}>{text}</p>
      </div>
      <img src="../assets/logos/neoortho_logo_branco_medartis.png" alt="NeoOrtho" style={{ position: "absolute", bottom: 52, left: 80, width: 150 }} />
    </SlideFrame>
  );
}
