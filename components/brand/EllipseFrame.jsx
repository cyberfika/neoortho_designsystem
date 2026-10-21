export function EllipseFrame({ src, alt = "", ratio = "16 / 9", rotate = -12, style, ...rest }) {
  return (
    <div style={{ position: "relative", aspectRatio: ratio, overflow: "hidden", ...style }} {...rest}>
      {src && <img src={src} alt={alt} style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
        clipPath: "ellipse(58% 78% at 50% 50%)", transform: "rotate(" + rotate + "deg) scale(1.18)"
      }} />}
    </div>
  );
}

export function EllipseOutline({ width = "120%", top = "10%", left = "-10%", rotate = -14, color = "var(--purple-700)", thickness = 2, opacity = 1, style, ...rest }) {
  return (
    <div aria-hidden="true" style={{
      position: "absolute", top, left, width, aspectRatio: "1.9 / 1",
      border: thickness + "px solid " + color, borderRadius: "50%",
      transform: "rotate(" + rotate + "deg)", opacity, pointerEvents: "none", ...style
    }} {...rest} />
  );
}
