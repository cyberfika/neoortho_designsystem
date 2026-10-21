export function Checkbox({ label, checked, onChange, disabled = false, style, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: disabled ? "var(--action-disabled-fg)" : "var(--text-body)", cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <span style={{
        width: 20, height: 20, flex: "0 0 20px", borderRadius: "var(--radius-xs)",
        border: checked ? "2px solid var(--purple-700)" : "2px solid var(--gray-200)",
        background: checked ? "var(--purple-700)" : "var(--white)",
        display: "grid", placeItems: "center",
        transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
      }}>
        {checked && <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M1.5 6.5 4.5 9.5 10.5 2.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </span>
      <input type="checkbox" checked={!!checked} disabled={disabled} onChange={onChange} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
