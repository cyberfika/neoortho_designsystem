export function Select({ label, hint, options = [], disabled = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || "sel-" + (label || "field").replace(/\W+/g, "-").toLowerCase();
  return (
    <label htmlFor={fid} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontFamily: "var(--font-body)" }}>
      {label && <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--text-body)" }}>{label}</span>}
      <select id={fid} disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          ...{
    width: "100%", fontFamily: "var(--font-body)", fontSize: "var(--text-base)",
    color: "var(--text-strong)", background: "var(--white)", padding: "12px 16px",
    border: "1px solid var(--gray-200)", borderRadius: "var(--radius-md)",
    outline: "none", transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
  }, appearance: "none", paddingRight: 40, cursor: disabled ? "not-allowed" : "pointer",
          backgroundImage: "linear-gradient(45deg,transparent 50%,var(--purple-700) 50%),linear-gradient(135deg,var(--purple-700) 50%,transparent 50%)",
          backgroundPosition: "calc(100% - 20px) calc(50% + 1px),calc(100% - 14px) calc(50% + 1px)",
          backgroundSize: "6px 6px,6px 6px", backgroundRepeat: "no-repeat",
          borderColor: focus ? "var(--purple-700)" : "var(--gray-200)",
          boxShadow: focus ? "var(--focus-ring)" : "none",
          background: disabled ? "var(--gray-100)" : undefined,
          ...style
        }} {...rest}>
        {options.map(o => <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>)}
      </select>
      {hint && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{hint}</span>}
    </label>
  );
}
