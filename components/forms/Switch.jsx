export function Switch({ label, checked, onChange, disabled = false, style, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: disabled ? "var(--action-disabled-fg)" : "var(--text-body)", cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <span style={{
        width: 44, height: 24, flex: "0 0 44px", borderRadius: "var(--radius-pill)", padding: 2,
        background: disabled ? "var(--gray-200)" : checked ? "var(--purple-700)" : "var(--gray-200)",
        display: "flex", alignItems: "center", justifyContent: checked ? "flex-end" : "flex-start",
        transition: "background var(--duration-base) var(--ease-standard)"
      }}>
        <span style={{ width: 20, height: 20, borderRadius: "var(--radius-pill)", background: "var(--white)", boxShadow: "var(--shadow-sm)", transition: "transform var(--duration-base) var(--ease-standard)" }} />
      </span>
      <input type="checkbox" role="switch" checked={!!checked} disabled={disabled} onChange={onChange} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
