export function IntroSlide({ heading = "Quem somos", paragraphs = [
  "A NeoOrtho desenvolve implantes e próteses ortopédicas há mais de 20 anos, com um propósito claro: devolver às pessoas a liberdade de se movimentar com segurança, qualidade e confiança.",
  "Nosso portfólio oferece soluções completas nas linhas de Traumatologia, Craniomaxilofacial, Coluna e próteses personalizadas de ATM.",
  "Com sede em Curitiba, Brasil, a NeoOrtho integra o Medartis Group desde março de 2025, fortalecendo sua estrutura, capacidade tecnológica e presença no mercado global."
] }) {
  const { SlideFrame, SectionEyebrow, EllipseFrame } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="light">
      <img src="../assets/logos/neoortho_logo_color_medartis.png" alt="NeoOrtho" style={{ position: "absolute", top: 48, right: 64, width: 150 }} />
      <div style={{ position: "absolute", inset: "132px 80px 80px", display: "grid", gridTemplateColumns: "1fr 470px", gap: 72, alignItems: "start" }}>
        <div>
          <SectionEyebrow number="01." style={{ marginBottom: 28, maxWidth: 420 }}>{heading}</SectionEyebrow>
          {paragraphs.map((p, i) => (
            <p key={i} style={{ margin: "0 0 20px", fontSize: 21, lineHeight: 1.6, color: "var(--text-body)", maxWidth: "58ch" }}>{p}</p>
          ))}
        </div>
        <EllipseFrame src="../assets/photos/photo-hands.png" ratio="4 / 5" rotate={-10} />
      </div>
    </SlideFrame>
  );
}
