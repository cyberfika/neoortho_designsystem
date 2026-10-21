export function CertificationsSlide({ title = "Matéria-prima e certificações" }) {
  const { SlideFrame, Card, Badge, SectionEyebrow } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="light">
      <img src="../assets/logos/neoortho_logo_color_medartis.png" alt="NeoOrtho" style={{ position: "absolute", top: 48, right: 64, width: 150 }} />
      <div style={{ position: "absolute", inset: "132px 80px 88px", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 56 }}>
        <div>
          <h2 style={{ margin: "0 0 32px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 46, letterSpacing: "-0.02em", color: "var(--purple-700)" }}>{title}</h2>
          <p style={{ margin: "0 0 14px", fontSize: 19, lineHeight: 1.6 }}>Material biocompatível e hipoalergênico, usinado em titânio puro ou liga conforme a região de aplicação.</p>
          <ul style={{ margin: "24px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 16, color: "var(--text-body)" }}>
            <li>● ASTM F136 / F67 / F382 / F543 — placas e parafusos</li>
            <li>● ASTM F136 / F543 / F1264 — hastes e parafusos</li>
          </ul>
          <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
            <Badge tone="purple">ISO 13485:2016</Badge><Badge tone="purple">ANVISA BPF</Badge><Badge tone="teal">ISO 37001</Badge><Badge tone="neutral">ESG em Foco</Badge>
          </div>
        </div>
        <Card surface="light" padding="32px">
          <SectionEyebrow style={{ marginBottom: 26 }}>Certificações</SectionEyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 26, alignItems: "flex-start" }}>
            <img src="../assets/certs/cert-iso13485-anvisa.png" alt="ISO 13485 e ANVISA" style={{ height: 88 }} />
            <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
              <img src="../assets/certs/cert-iso37001.png" alt="ISO 37001" style={{ height: 78 }} />
              <img src="../assets/certs/cert-esg.png" alt="ESG em Foco" style={{ height: 86 }} />
            </div>
          </div>
        </Card>
      </div>
    </SlideFrame>
  );
}
