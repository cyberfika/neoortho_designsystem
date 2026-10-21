export function ManifestoSlide({ quote = "Somos os parceiros incansáveis dos profissionais de saúde, movidos por um compromisso humano, garantindo que cada pessoa, em qualquer lugar, tenha a oportunidade de abraçar, caminhar e sorrir sem limitações.", signature = "Parceria que move" }) {
  const { SlideFrame, EllipseOutline } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="section">
      <EllipseOutline width="86%" left="52%" top="-24%" rotate={-16} color="rgba(255,255,255,.30)" thickness={2} />
      <img src="../assets/logos/neoortho_logo_branco_medartis.png" alt="NeoOrtho" style={{ position: "absolute", bottom: 56, right: 72, width: 150 }} />
      <div style={{ position: "absolute", left: 80, top: 120, width: 760 }}>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 30, lineHeight: 1.55, color: "#fff" }}>{quote}</p>
        <p style={{ margin: "56px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff" }}>
          {signature.split(" ")[0]} <span style={{ color: "var(--teal-500)" }}>{signature.split(" ").slice(1).join(" ")}</span>
        </p>
      </div>
    </SlideFrame>
  );
}
