export function Badge({ tone = "purple", children, style, ...rest }) {
  const tones = {
    purple: { bg: "var(--purple-700-20)", fg: "var(--purple-700)" },
    teal: { bg: "var(--teal-500-20)", fg: "#00767c" },
    neutral: { bg: "var(--gray-100)", fg: "var(--gray-800)" },
    solid: { bg: "var(--purple-700)", fg: "var(--white)" }
  };
  const t = tones[tone] || tones.purple;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "4px 10px",
      borderRadius: "var(--radius-sm)", background: t.bg, color: t.fg,
      fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-xs)", lineHeight: 1.2, ...style
    }} {...rest}>{children}</span>
  );
}
