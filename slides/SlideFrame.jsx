export function SlideFrame({ variant = "light", children, style, ...rest }) {
  const bgs = {
    light: { backgroundImage: "url(../assets/backgrounds/slide-bg-light.png)" },
    title: { backgroundImage: "url(../assets/backgrounds/slide-bg-title.png)" },
    section: { backgroundImage: "url(../assets/backgrounds/slide-bg-section.png)" },
    plain: { background: "var(--white)" }
  };
  return (
    <div style={{
      width: 1280, height: 720, position: "relative", overflow: "hidden",
      fontFamily: "var(--font-body)", color: variant === "light" || variant === "plain" ? "var(--text-body)" : "var(--white)",
      backgroundSize: "cover", backgroundPosition: "center", ...bgs[variant], ...style
    }} {...rest}>{children}</div>
  );
}

export function SlideLogo({ dark = false, style }) {
  return <img src={dark ? "../assets/logos/neoortho_logo_preto_medartis.png" : "../assets/logos/neoortho_logo_branco_medartis.png"}
    alt="NeoOrtho — medartis group"
    style={{ position: "absolute", width: 176, height: "auto", ...style }} />;
}
