export function IconButton({ variant = "ghost", size = 40, label, children, onClick, disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const palettes = {
    ghost: { bg: "transparent", fg: "var(--purple-700)", hoverBg: "var(--purple-700-20)" },
    solid: { bg: "var(--purple-700)", fg: "var(--white)", hoverBg: "var(--purple-600)" },
    inverse: { bg: "rgba(255,255,255,.12)", fg: "var(--white)", hoverBg: "rgba(255,255,255,.22)" }
  };
  const p = palettes[variant] || palettes.ghost;
  return (
    <button aria-label={label} onClick={disabled ? undefined : onClick} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-pill)", border: "none", cursor: disabled ? "not-allowed" : "pointer",
        background: disabled ? "var(--action-disabled-bg)" : hover ? p.hoverBg : p.bg,
        color: disabled ? "var(--action-disabled-fg)" : p.fg,
        transition: "background var(--duration-fast) var(--ease-standard)", ...style
      }} {...rest}>{children}</button>
  );
}
