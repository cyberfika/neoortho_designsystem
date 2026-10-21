export function PositioningBar({ line = "Viver em", accent = "movimento.", showLogo = true, assetBase = "", height = 96, align = "center", style, ...rest }) {
  const base = assetBase ? assetBase.replace(/\/$/, "") + "/" : "";
  return (
    <div style={{
      height, background: "var(--purple-700)", display: "flex", alignItems: "center",
      justifyContent: align === "center" ? "center" : "space-between", gap: "var(--space-16)",
      padding: "0 var(--gutter-page)", ...style
    }} {...rest}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 28, letterSpacing: "var(--tracking-tight)", color: "var(--white)", whiteSpace: "nowrap" }}>
        {line} <span style={{ color: "var(--teal-500)" }}>{accent}</span>
      </span>
      {showLogo && <img src={base + "assets/logos/neoortho_logo_branco_medartis.png"} alt="NeoOrtho — medartis group" style={{ width: Math.max(height * 1.75, 110), height: "auto", display: "block" }} />}
    </div>
  );
}
