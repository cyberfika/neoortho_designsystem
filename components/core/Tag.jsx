const LINE_COLORS = {
  trauma: "var(--line-trauma)",
  coluna: "var(--line-coluna)",
  cmf: "var(--line-cmf)",
  personalizados: "var(--line-custom)"
};

export function Tag({ line, tone = "purple", children, style, ...rest }) {
  const bg = line ? LINE_COLORS[line] : tone === "teal" ? "var(--teal-500)" : tone === "neutral" ? "var(--gray-200)" : "var(--purple-700)";
  const dark = line === "personalizados" || tone === "neutral";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "var(--space-2)",
      padding: "6px 14px", borderRadius: "var(--radius-pill)", background: bg,
      color: dark ? "var(--purple-900)" : "var(--white)", fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)", fontSize: "var(--text-caption)",
      letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", lineHeight: 1, ...style
    }} {...rest}>{children}</span>
  );
}
