export function Button({ variant = "primary", size = "md", disabled = false, full = false, as = "button", href, children, onClick, style, ...rest }) {
  const sizes = {
    sm: { padding: "8px 18px", fontSize: "var(--text-sm)" },
    md: { padding: "12px 28px", fontSize: "var(--text-base)" },
    lg: { padding: "16px 40px", fontSize: "var(--text-lg)" }
  };
  const variants = {
    primary: { background: "var(--action-primary-bg)", color: "var(--action-primary-fg)", border: "2px solid transparent" },
    secondary: { background: "transparent", color: "var(--action-secondary-fg)", border: "2px solid var(--action-secondary-border)" },
    accent: { background: "var(--action-accent-bg)", color: "var(--white)", border: "2px solid transparent" },
    ghost: { background: "transparent", color: "var(--action-secondary-fg)", border: "2px solid transparent" },
    inverse: { background: "var(--white)", color: "var(--purple-700)", border: "2px solid transparent" }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  let bg = v.background, color = v.color;
  if (!disabled && variant === "primary") bg = press ? "var(--action-primary-bg-active)" : hover ? "var(--action-primary-bg-hover)" : bg;
  if (!disabled && variant === "accent" && hover) bg = "var(--action-accent-bg-hover)";
  if (!disabled && (variant === "secondary" || variant === "ghost") && hover) bg = "var(--action-secondary-bg-hover)";
  if (!disabled && variant === "inverse" && hover) bg = "var(--purple-700-20)";
  const Tag = as === "a" ? "a" : "button";
  return (
    <Tag
      href={as === "a" ? href : undefined}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === "button" ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: full ? "flex" : "inline-flex", width: full ? "100%" : undefined,
        alignItems: "center", justifyContent: "center", gap: "var(--space-2)",
        fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)",
        lineHeight: 1, letterSpacing: "var(--tracking-normal)", textDecoration: "none",
        borderRadius: "var(--radius-pill)", cursor: disabled ? "not-allowed" : "pointer",
        transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)",
        ...sizes[size], ...v,
        background: disabled ? "var(--action-disabled-bg)" : bg,
        color: disabled ? "var(--action-disabled-fg)" : color,
        borderColor: disabled ? "transparent" : v.border.split(" ").slice(2).join(" ") || "transparent",
        ...style
      }}
      {...rest}
    >{children}</Tag>
  );
}
