export function Input({ label, hint, error, id, type = "text", disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || "in-" + (label || "field").replace(/\W+/g, "-").toLowerCase();
  return (
    <label htmlFor={fid} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontFamily: "var(--font-body)" }}>
      {label && <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--text-body)" }}>{label}</span>}
      <input id={fid} type={type} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          ...{
    width: "100%", fontFamily: "var(--font-body)", fontSize: "var(--text-base)",
    color: "var(--text-strong)", background: "var(--white)", padding: "12px 16px",
    border: "1px solid var(--gray-200)", borderRadius: "var(--radius-md)",
    outline: "none", transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
  },
          background: disabled ? "var(--gray-100)" : "var(--white)",
          color: disabled ? "var(--action-disabled-fg)" : "var(--text-strong)",
          borderColor: error ? "var(--purple-vivid)" : focus ? "var(--purple-700)" : "var(--gray-200)",
          boxShadow: focus ? "var(--focus-ring)" : "none",
          ...style
        }} {...rest} />
      {(error || hint) && <span style={{ fontSize: "var(--text-xs)", color: error ? "var(--purple-vivid)" : "var(--text-muted)" }}>{error || hint}</span>}
    </label>
  );
}
