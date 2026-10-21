export function Divider({ tone = "light", vertical = false, style, ...rest }) {
  const color = tone === "onPurple" ? "var(--border-on-purple)" : "var(--gray-200)";
  return <div role="separator" style={vertical
    ? { width: 1, alignSelf: "stretch", background: color, ...style }
    : { height: 1, width: "100%", background: color, border: "none", ...style }} {...rest} />;
}
