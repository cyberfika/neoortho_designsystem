export function PresenceSlide({ title = "Presença nacional e internacional" }) {
  const { SlideFrame, StatBlock, Divider } = window.NeoOrthoDesignSystem_c2825f;
  return (
    <SlideFrame variant="light">
      <img src="../assets/logos/neoortho_logo_color_medartis.png" alt="NeoOrtho" style={{ position: "absolute", top: 48, right: 64, width: 150 }} />
      <div style={{ position: "absolute", inset: "132px 80px 88px", display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>
        <div>
          <h2 style={{ margin: "0 0 28px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 50, lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--purple-700)" }}>{title}</h2>
          <p style={{ margin: "0 0 36px", fontSize: 20, lineHeight: 1.6, maxWidth: "44ch" }}>Ampla cobertura com mais de 100 distribuidores no Brasil e 5 distribuidores em outros países da América Latina.</p>
          <Divider style={{ marginBottom: 28 }} />
          <div style={{ display: "flex", gap: 56 }}>
            <StatBlock value="+100" label="distribuidores no Brasil" />
            <StatBlock value="9 países" label="na América Latina" tone="teal" />
            <StatBlock value="Out 2026" label="início das operações no México" />
          </div>
        </div>
        <img src="../assets/maps/presence-map.png" alt="América Latina" style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
    </SlideFrame>
  );
}
