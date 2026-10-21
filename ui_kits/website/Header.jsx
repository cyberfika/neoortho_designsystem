export function SiteHeader({ active = "Traumatologia", onNav = () => {} }) {
  const [lang, setLang] = React.useState("PT");
  // Nav mirrors the live site: product lines first, then IFU/resources, then company.
  const items = ["Craniomaxilofacial", "Coluna", "Traumatologia", "Próteses", "IFU", "Nossa História"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,.94)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--gray-200)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 40px", display: "flex", alignItems: "center", gap: 40 }}>
        <img src="../../assets/logos/neoortho_logo_color_medartis.png" alt="NeoOrtho — medartis group" style={{ width: 168, height: "auto", display: "block" }} />
        <nav style={{ display: "flex", gap: 24, marginLeft: "auto" }}>
          {items.map(it => (
            <button key={it} onClick={() => onNav(it)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "6px 0",
              fontFamily: "var(--font-body)", fontSize: 14,
              fontWeight: active === it ? 600 : 400,
              color: active === it ? "var(--purple-700)" : "var(--text-body)",
              borderBottom: active === it ? "2px solid var(--purple-700)" : "2px solid transparent"
            }}>{it}</button>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10, paddingLeft: 8, borderLeft: "1px solid var(--gray-200)" }}>
          {["PT", "ES", "EN"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              background: "none", border: "none", cursor: "pointer", padding: 0,
              fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "var(--tracking-wide)",
              fontWeight: lang === l ? 600 : 400,
              color: lang === l ? "var(--purple-700)" : "var(--text-muted)"
            }}>{l}</button>
          ))}
        </div>
        <a href="#contato" style={{ display: "inline-flex", alignItems: "center", padding: "11px 24px", borderRadius: "var(--radius-pill)", background: "var(--purple-700)", color: "#fff", fontSize: 13, fontWeight: 600, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", textDecoration: "none" }}>Fale conosco</a>
      </div>
    </header>
  );
}
