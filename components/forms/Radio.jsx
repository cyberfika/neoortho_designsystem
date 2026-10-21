export function Radio({ label, checked, onChange, name, value, disabled = false, style, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: disabled ? "var(--action-disabled-fg)" : "var(--text-body)", cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <span style={{
        width: 20, height: 20, flex: "0 0 20px", borderRadius: "var(--radius-pill)",
        border: checked ? "6px solid var(--purple-700)" : "2px solid var(--gray-200)",
        background: "var(--white)",
        transition: "border var(--duration-fast) var(--ease-standard)"
      }} />
      <input type="radio" name={name} value={value} checked={!!checked} disabled={disabled} onChange={onChange} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
