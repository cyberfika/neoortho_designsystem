export function StatBlock({ value, label, tone = "purple", align = "left", style, ...rest }) {
  const fg = tone === "inverse" ? "var(--white)" : tone === "teal" ? "var(--teal-500)" : "var(--purple-700)";
  const labelFg = tone === "inverse" ? "var(--text-on-inverse-muted)" : "var(--text-body)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", textAlign: align, alignItems: align === "center" ? "center" : "flex-start", ...style }} {...rest}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-display-2)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)", color: fg, whiteSpace: "nowrap" }}>{value}</span>
      <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-regular)", fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)", color: labelFg, maxWidth: "22ch" }}>{label}</span>
    </div>
  );
}
