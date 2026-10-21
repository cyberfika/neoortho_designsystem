export function ValuesSlide({ title = "Valores", values = [
  { name: "EXCELÊNCIA", text: "Excelência em produtos de qualidade e na prestação dos serviços." },
  { name: "COMPROMETIMENTO", text: "Integridade desde a fundação com nossos distribuidores, médicos e pacientes." },
  { name: "SAÚDE", text: "O princípio pelo qual desenvolvemos soluções ortopédicas." },
  { name: "PARCERIA", text: "Proximidade real e foco nos clientes." }
] }) {
  const { SlideFrame, Card } = window.NeoOrthoDesignSystem_c2825f;
  const colors = ["var(--line-trauma)", "var(--purple-700)", "var(--line-cmf)", "var(--line-coluna)"];
  return (
    <SlideFrame variant="light">
      <img src="../assets/logos/neoortho_logo_color_medartis.png" alt="NeoOrtho" style={{ position: "absolute", top: 48, right: 64, width: 150 }} />
      <div style={{ position: "absolute", inset: "140px 80px 96px" }}>
        <h2 style={{ margin: "0 0 48px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 58, letterSpacing: "-0.02em", color: "var(--purple-700)" }}>{title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {values.map((v, i) => (
            <Card key={v.name} padding="28px" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ width: 40, height: 6, borderRadius: 999, background: colors[i] }} />
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "var(--tracking-caps)", color: colors[i] }}>{v.name}</span>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55 }}>{v.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
