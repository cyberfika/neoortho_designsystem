export function SiteFooter() {
  const { PositioningBar, Divider } = window.NeoOrthoDesignSystem_c2825f;
  const cols = [
    ["Produtos", ["Craniomaxilofacial", "Coluna", "Traumatologia", "Próteses"]],
    ["Materiais técnicos", ["IFU", "Catálogos", "Técnicas cirúrgicas"]],
    ["A NeoOrtho", ["Nossa história", "Qualidade e SGQ", "Medartis Group", "Trabalhe conosco"]]
  ];
  return (
    <footer>
      <PositioningBar assetBase="../.." align="between" height={96} />
      <div style={{ background: "var(--purple-900)", color: "rgba(255,255,255,.78)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 40px 40px", display: "grid", gridTemplateColumns: "1.3fr repeat(3,1fr)", gap: 48 }}>
          <div>
            <img src="../../assets/logos/neoortho_logo_branco_medartis.png" alt="NeoOrtho — medartis group" style={{ width: 168, display: "block", marginBottom: 20 }} />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7 }}>Rua Ângelo Domingos Durigan, 607<br />Cascatinha, Curitiba — PR, Brasil</p>
            <img src="../../assets/logos/medartis_logo_branco.png" alt="Medartis" style={{ height: 20, marginTop: 26, opacity: .85, display: "block" }} />
          </div>
          {cols.map(([h, links]) => (
            <div key={h}>
              <span style={{ display: "block", fontSize: 12, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", fontWeight: 600, color: "var(--teal-500)", marginBottom: 16 }}>{h}</span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(l => <li key={l}><a href="#" style={{ color: "rgba(255,255,255,.78)", fontSize: 14 }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 40px 40px" }}>
          <Divider tone="onPurple" style={{ marginBottom: 20 }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,.56)" }}>NEOORTHO® Produtos Ortopédicos S.A. ©2026 Todos os direitos reservados.</span>
            <div style={{ display: "flex", gap: 18 }}>
              <a href="#" style={{ fontSize: 12, color: "rgba(255,255,255,.72)" }}>facebook</a>
              <a href="#" style={{ fontSize: 12, color: "rgba(255,255,255,.72)" }}>linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
