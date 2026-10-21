export function Hero() {
  const { EllipseOutline } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--purple-900)" }}>
      <img src="../../assets/photos/photo-hands.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(39,20,76,.92) 0%,rgba(39,20,76,.66) 46%,rgba(39,20,76,.10) 82%)" }} />
      <EllipseOutline width="86%" left="26%" top="-30%" rotate={-12} color="rgba(255,255,255,.34)" />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "120px 40px 132px" }}>
        <span style={{ display: "block", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", fontWeight: 600, color: "var(--teal-500)", marginBottom: 22 }}>Implantes e próteses ortopédicas</span>
        <h1 style={{ margin: 0, maxWidth: 700, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 74, lineHeight: 1.03, letterSpacing: "-0.02em", color: "#fff" }}>
          Viver em <span style={{ color: "var(--teal-500)" }}>movimento.</span>
        </h1>
        <p style={{ margin: "30px 0 0", maxWidth: 560, fontSize: 20, lineHeight: 1.6, color: "rgba(255,255,255,.86)" }}>
          Devolvemos movimento a quem pensou tê-lo perdido. Há mais de 20 anos, dedicamos cada dia a transformar vidas através de produtos de alta tecnologia e qualidade excepcional.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
          <a href="#portfolio" style={{ padding: "16px 34px", borderRadius: "var(--radius-pill)", background: "#fff", color: "var(--purple-700)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Conheça o portfólio</a>
          <a href="#contato" style={{ padding: "16px 34px", borderRadius: "var(--radius-pill)", border: "2px solid rgba(255,255,255,.6)", color: "#fff", fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Fale com um especialista</a>
        </div>
      </div>
    </section>
  );
}
