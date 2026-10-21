export function SectionEyebrow({ children, tone = "purple", number, style, ...rest }) {
  const fg = tone === "inverse" ? "var(--text-on-inverse-muted)" : tone === "teal" ? "var(--teal-500)" : "var(--purple-700)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", ...style }} {...rest}>
      {number && <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-sm)", color: fg }}>{number}</span>}
      <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-caption)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: fg }}>{children}</span>
      <span style={{ flex: 1, height: 1, background: tone === "inverse" ? "var(--border-on-purple)" : "var(--gray-200)" }} />
    </div>
  );
}
