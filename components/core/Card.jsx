export function Card({ surface = "light", padding = "var(--space-8)", children, style, ...rest }) {
  const surfaces = {
    light: { background: "var(--surface-card)", border: "1px solid var(--gray-200)", boxShadow: "var(--shadow-sm)", color: "var(--text-body)" },
    muted: { background: "var(--surface-muted)", border: "1px solid var(--gray-200)", boxShadow: "none", color: "var(--text-body)" },
    onPurple: { background: "rgba(255,255,255,.08)", border: "1px solid var(--border-on-purple)", boxShadow: "none", color: "var(--white)" },
    solid: { background: "var(--purple-700)", border: "1px solid transparent", boxShadow: "var(--shadow-md)", color: "var(--white)" }
  };
  return (
    <div style={{ borderRadius: "var(--radius-lg)", padding, fontFamily: "var(--font-body)", ...surfaces[surface], ...style }} {...rest}>{children}</div>
  );
}
