/* @ds-bundle: {"format":4,"namespace":"NeoOrthoDesignSystem_c2825f","components":[{"name":"EllipseFrame","sourcePath":"components/brand/EllipseFrame.jsx"},{"name":"EllipseOutline","sourcePath":"components/brand/EllipseFrame.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PositioningBar","sourcePath":"components/brand/PositioningBar.jsx"},{"name":"SectionEyebrow","sourcePath":"components/brand/SectionEyebrow.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CertificationsSlide","sourcePath":"slides/CertificationsSlide.jsx"},{"name":"ClosingSlide","sourcePath":"slides/ClosingSlide.jsx"},{"name":"IntroSlide","sourcePath":"slides/IntroSlide.jsx"},{"name":"ManifestoSlide","sourcePath":"slides/ManifestoSlide.jsx"},{"name":"PhotoStatSlide","sourcePath":"slides/PhotoStatSlide.jsx"},{"name":"PortfolioSlide","sourcePath":"slides/PortfolioSlide.jsx"},{"name":"PresenceSlide","sourcePath":"slides/PresenceSlide.jsx"},{"name":"SectionSlide","sourcePath":"slides/SectionSlide.jsx"},{"name":"SlideFrame","sourcePath":"slides/SlideFrame.jsx"},{"name":"SlideLogo","sourcePath":"slides/SlideFrame.jsx"},{"name":"StatsSlide","sourcePath":"slides/StatsSlide.jsx"},{"name":"TimelineSlide","sourcePath":"slides/TimelineSlide.jsx"},{"name":"TitleSlide","sourcePath":"slides/TitleSlide.jsx"},{"name":"ValuesSlide","sourcePath":"slides/ValuesSlide.jsx"},{"name":"EmailSignature","sourcePath":"ui_kits/email_signature/Signature.jsx"},{"name":"ContactForm","sourcePath":"ui_kits/website/ContactForm.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/website/Footer.jsx"},{"name":"SiteHeader","sourcePath":"ui_kits/website/Header.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"StatsStrip","sourcePath":"ui_kits/website/Sections.jsx"},{"name":"PortfolioGrid","sourcePath":"ui_kits/website/Sections.jsx"},{"name":"ManifestoBand","sourcePath":"ui_kits/website/Sections.jsx"},{"name":"QualityBand","sourcePath":"ui_kits/website/Sections.jsx"},{"name":"FactoryBand","sourcePath":"ui_kits/website/Sections.jsx"},{"name":"ResourcesBand","sourcePath":"ui_kits/website/Sections.jsx"}],"sourceHashes":{"components/brand/EllipseFrame.jsx":"2e37e0696967","components/brand/Logo.jsx":"e0963c32f23c","components/brand/PositioningBar.jsx":"484b5c255bf3","components/brand/SectionEyebrow.jsx":"2c92da2a5c03","components/core/Badge.jsx":"1e63f1d0c977","components/core/Button.jsx":"238c732fae8b","components/core/Card.jsx":"e6a3a85bb6ce","components/core/Divider.jsx":"8321b68461d2","components/core/IconButton.jsx":"a0bc569fff06","components/core/StatBlock.jsx":"702d62e23d44","components/core/Tag.jsx":"49ded3380164","components/forms/Checkbox.jsx":"f4e1099f5f76","components/forms/Input.jsx":"a09a09a71ae0","components/forms/Radio.jsx":"348323793717","components/forms/Select.jsx":"7c264265febb","components/forms/Switch.jsx":"964765dc6f7d","slides/CertificationsSlide.jsx":"47a139d8fb47","slides/ClosingSlide.jsx":"032cd56ca95a","slides/IntroSlide.jsx":"3263a8cda268","slides/ManifestoSlide.jsx":"37e7c540689f","slides/PhotoStatSlide.jsx":"3a563da915b2","slides/PortfolioSlide.jsx":"fe455f829a79","slides/PresenceSlide.jsx":"e42ab9056600","slides/SectionSlide.jsx":"42fc3f3e2cc8","slides/SlideFrame.jsx":"fca6fbad8751","slides/StatsSlide.jsx":"02ae61e29487","slides/TimelineSlide.jsx":"33e84b05abbb","slides/TitleSlide.jsx":"a820fe960deb","slides/ValuesSlide.jsx":"a857e53505b0","ui_kits/email_signature/Signature.jsx":"f08733b9c5b6","ui_kits/website/ContactForm.jsx":"8d87964031b5","ui_kits/website/Footer.jsx":"8b29ff3b461f","ui_kits/website/Header.jsx":"fa23fddcaba0","ui_kits/website/Hero.jsx":"e051ac8e5a50","ui_kits/website/Sections.jsx":"969075640a26"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NeoOrthoDesignSystem_c2825f = window.NeoOrthoDesignSystem_c2825f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/EllipseFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EllipseFrame({
  src,
  alt = "",
  ratio = "16 / 9",
  rotate = -12,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      ...style
    }
  }, rest), src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      clipPath: "ellipse(58% 78% at 50% 50%)",
      transform: "rotate(" + rotate + "deg) scale(1.18)"
    }
  }));
}
function EllipseOutline({
  width = "120%",
  top = "10%",
  left = "-10%",
  rotate = -14,
  color = "var(--purple-700)",
  thickness = 2,
  opacity = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top,
      left,
      width,
      aspectRatio: "1.9 / 1",
      border: thickness + "px solid " + color,
      borderRadius: "50%",
      transform: "rotate(" + rotate + "deg)",
      opacity,
      pointerEvents: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { EllipseFrame, EllipseOutline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EllipseFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SOURCES = {
  "color-medartis": "assets/logos/neoortho_logo_color_medartis.png",
  "white-medartis": "assets/logos/neoortho_logo_branco_medartis.png",
  "black-medartis": "assets/logos/neoortho_logo_preto_medartis.png",
  "color": "assets/logos/neoortho_logo_color.png",
  "white": "assets/logos/neoortho_logo_branco.png",
  "black": "assets/logos/neoortho_logo_preto.png",
  "symbol-color": "assets/logos/symbol_color.png",
  "symbol-white": "assets/logos/symbol_white.png"
};
function Logo({
  version = "color-medartis",
  width = 220,
  assetBase = "",
  clearSpace = false,
  style,
  ...rest
}) {
  const reduced = !version.includes("medartis");
  const min = version.startsWith("symbol") ? 40 : reduced ? 70 : 110;
  const w = Math.max(width, min);
  const base = assetBase ? assetBase.replace(/\/$/, "") + "/" : "";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base + SOURCES[version],
    alt: "NeoOrtho \u2014 medartis group",
    width: w,
    style: {
      display: "block",
      width: w,
      height: "auto",
      padding: clearSpace ? "var(--space-brand-clear)" : 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PositioningBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PositioningBar({
  line = "Viver em",
  accent = "movimento.",
  showLogo = true,
  assetBase = "",
  height = 96,
  align = "center",
  style,
  ...rest
}) {
  const base = assetBase ? assetBase.replace(/\/$/, "") + "/" : "";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height,
      background: "var(--purple-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: align === "center" ? "center" : "space-between",
      gap: "var(--space-16)",
      padding: "0 var(--gutter-page)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 28,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--white)",
      whiteSpace: "nowrap"
    }
  }, line, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-500)"
    }
  }, accent)), showLogo && /*#__PURE__*/React.createElement("img", {
    src: base + "assets/logos/neoortho_logo_branco_medartis.png",
    alt: "NeoOrtho \u2014 medartis group",
    style: {
      width: Math.max(height * 1.75, 110),
      height: "auto",
      display: "block"
    }
  }));
}
Object.assign(__ds_scope, { PositioningBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PositioningBar.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionEyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionEyebrow({
  children,
  tone = "purple",
  number,
  style,
  ...rest
}) {
  const fg = tone === "inverse" ? "var(--text-on-inverse-muted)" : tone === "teal" ? "var(--teal-500)" : "var(--purple-700)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-sm)",
      color: fg
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-caption)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: fg
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: tone === "inverse" ? "var(--border-on-purple)" : "var(--gray-200)"
    }
  }));
}
Object.assign(__ds_scope, { SectionEyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionEyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "purple",
  children,
  style,
  ...rest
}) {
  const tones = {
    purple: {
      bg: "var(--purple-700-20)",
      fg: "var(--purple-700)"
    },
    teal: {
      bg: "var(--teal-500-20)",
      fg: "#00767c"
    },
    neutral: {
      bg: "var(--gray-100)",
      fg: "var(--gray-800)"
    },
    solid: {
      bg: "var(--purple-700)",
      fg: "var(--white)"
    }
  };
  const t = tones[tone] || tones.purple;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.2,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  full = false,
  as = "button",
  href,
  children,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 18px",
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "12px 28px",
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "16px 40px",
      fontSize: "var(--text-lg)"
    }
  };
  const variants = {
    primary: {
      background: "var(--action-primary-bg)",
      color: "var(--action-primary-fg)",
      border: "2px solid transparent"
    },
    secondary: {
      background: "transparent",
      color: "var(--action-secondary-fg)",
      border: "2px solid var(--action-secondary-border)"
    },
    accent: {
      background: "var(--action-accent-bg)",
      color: "var(--white)",
      border: "2px solid transparent"
    },
    ghost: {
      background: "transparent",
      color: "var(--action-secondary-fg)",
      border: "2px solid transparent"
    },
    inverse: {
      background: "var(--white)",
      color: "var(--purple-700)",
      border: "2px solid transparent"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  let bg = v.background,
    color = v.color;
  if (!disabled && variant === "primary") bg = press ? "var(--action-primary-bg-active)" : hover ? "var(--action-primary-bg-hover)" : bg;
  if (!disabled && variant === "accent" && hover) bg = "var(--action-accent-bg-hover)";
  if (!disabled && (variant === "secondary" || variant === "ghost") && hover) bg = "var(--action-secondary-bg-hover)";
  if (!disabled && variant === "inverse" && hover) bg = "var(--purple-700-20)";
  const Tag = as === "a" ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: as === "a" ? href : undefined,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: full ? "flex" : "inline-flex",
      width: full ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-normal)",
      textDecoration: "none",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)",
      ...sizes[size],
      ...v,
      background: disabled ? "var(--action-disabled-bg)" : bg,
      color: disabled ? "var(--action-disabled-fg)" : color,
      borderColor: disabled ? "transparent" : v.border.split(" ").slice(2).join(" ") || "transparent",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  surface = "light",
  padding = "var(--space-8)",
  children,
  style,
  ...rest
}) {
  const surfaces = {
    light: {
      background: "var(--surface-card)",
      border: "1px solid var(--gray-200)",
      boxShadow: "var(--shadow-sm)",
      color: "var(--text-body)"
    },
    muted: {
      background: "var(--surface-muted)",
      border: "1px solid var(--gray-200)",
      boxShadow: "none",
      color: "var(--text-body)"
    },
    onPurple: {
      background: "rgba(255,255,255,.08)",
      border: "1px solid var(--border-on-purple)",
      boxShadow: "none",
      color: "var(--white)"
    },
    solid: {
      background: "var(--purple-700)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-md)",
      color: "var(--white)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      fontFamily: "var(--font-body)",
      ...surfaces[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = "light",
  vertical = false,
  style,
  ...rest
}) {
  const color = tone === "onPurple" ? "var(--border-on-purple)" : "var(--gray-200)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: vertical ? {
      width: 1,
      alignSelf: "stretch",
      background: color,
      ...style
    } : {
      height: 1,
      width: "100%",
      background: color,
      border: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  variant = "ghost",
  size = 40,
  label,
  children,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const palettes = {
    ghost: {
      bg: "transparent",
      fg: "var(--purple-700)",
      hoverBg: "var(--purple-700-20)"
    },
    solid: {
      bg: "var(--purple-700)",
      fg: "var(--white)",
      hoverBg: "var(--purple-600)"
    },
    inverse: {
      bg: "rgba(255,255,255,.12)",
      fg: "var(--white)",
      hoverBg: "rgba(255,255,255,.22)"
    }
  };
  const p = palettes[variant] || palettes.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      background: disabled ? "var(--action-disabled-bg)" : hover ? p.hoverBg : p.bg,
      color: disabled ? "var(--action-disabled-fg)" : p.fg,
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  tone = "purple",
  align = "left",
  style,
  ...rest
}) {
  const fg = tone === "inverse" ? "var(--white)" : tone === "teal" ? "var(--teal-500)" : "var(--purple-700)";
  const labelFg = tone === "inverse" ? "var(--text-on-inverse-muted)" : "var(--text-body)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-display-2)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      color: fg,
      whiteSpace: "nowrap"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-snug)",
      color: labelFg,
      maxWidth: "22ch"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LINE_COLORS = {
  trauma: "var(--line-trauma)",
  coluna: "var(--line-coluna)",
  cmf: "var(--line-cmf)",
  personalizados: "var(--line-custom)"
};
function Tag({
  line,
  tone = "purple",
  children,
  style,
  ...rest
}) {
  const bg = line ? LINE_COLORS[line] : tone === "teal" ? "var(--teal-500)" : tone === "neutral" ? "var(--gray-200)" : "var(--purple-700)";
  const dark = line === "personalizados" || tone === "neutral";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: dark ? "var(--purple-900)" : "var(--white)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-caption)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      lineHeight: 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: disabled ? "var(--action-disabled-fg)" : "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: "0 0 20px",
      borderRadius: "var(--radius-xs)",
      border: checked ? "2px solid var(--purple-700)" : "2px solid var(--gray-200)",
      background: checked ? "var(--purple-700)" : "var(--white)",
      display: "grid",
      placeItems: "center",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 6.5 4.5 9.5 10.5 2.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || "in-" + (label || "field").replace(/\W+/g, "-").toLowerCase();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: "100%",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-base)",
        color: "var(--text-strong)",
        background: "var(--white)",
        padding: "12px 16px",
        border: "1px solid var(--gray-200)",
        borderRadius: "var(--radius-md)",
        outline: "none",
        transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
      },
      background: disabled ? "var(--gray-100)" : "var(--white)",
      color: disabled ? "var(--action-disabled-fg)" : "var(--text-strong)",
      borderColor: error ? "var(--purple-vivid)" : focus ? "var(--purple-700)" : "var(--gray-200)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--purple-vivid)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: disabled ? "var(--action-disabled-fg)" : "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: "0 0 20px",
      borderRadius: "var(--radius-pill)",
      border: checked ? "6px solid var(--purple-700)" : "2px solid var(--gray-200)",
      background: "var(--white)",
      transition: "border var(--duration-fast) var(--ease-standard)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || "sel-" + (label || "field").replace(/\W+/g, "-").toLowerCase();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: "100%",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-base)",
        color: "var(--text-strong)",
        background: "var(--white)",
        padding: "12px 16px",
        border: "1px solid var(--gray-200)",
        borderRadius: "var(--radius-md)",
        outline: "none",
        transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
      },
      appearance: "none",
      paddingRight: 40,
      cursor: disabled ? "not-allowed" : "pointer",
      backgroundImage: "linear-gradient(45deg,transparent 50%,var(--purple-700) 50%),linear-gradient(135deg,var(--purple-700) 50%,transparent 50%)",
      backgroundPosition: "calc(100% - 20px) calc(50% + 1px),calc(100% - 14px) calc(50% + 1px)",
      backgroundSize: "6px 6px,6px 6px",
      backgroundRepeat: "no-repeat",
      borderColor: focus ? "var(--purple-700)" : "var(--gray-200)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      background: disabled ? "var(--gray-100)" : undefined,
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: disabled ? "var(--action-disabled-fg)" : "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 24,
      flex: "0 0 44px",
      borderRadius: "var(--radius-pill)",
      padding: 2,
      background: disabled ? "var(--gray-200)" : checked ? "var(--purple-700)" : "var(--gray-200)",
      display: "flex",
      alignItems: "center",
      justifyContent: checked ? "flex-end" : "flex-start",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transition: "transform var(--duration-base) var(--ease-standard)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// slides/CertificationsSlide.jsx
try { (() => {
function CertificationsSlide({
  title = "Matéria-prima e certificações"
}) {
  const {
    SlideFrame,
    Card,
    Badge,
    SectionEyebrow
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "light"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_color_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      top: 48,
      right: 64,
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "132px 80px 88px",
      display: "grid",
      gridTemplateColumns: "1.15fr .85fr",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 32px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 46,
      letterSpacing: "-0.02em",
      color: "var(--purple-700)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 19,
      lineHeight: 1.6
    }
  }, "Material biocompat\xEDvel e hipoalerg\xEAnico, usinado em tit\xE2nio puro ou liga conforme a regi\xE3o de aplica\xE7\xE3o."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "24px 0 0",
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: 16,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u25CF ASTM F136 / F67 / F382 / F543 \u2014 placas e parafusos"), /*#__PURE__*/React.createElement("li", null, "\u25CF ASTM F136 / F543 / F1264 \u2014 hastes e parafusos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "purple"
  }, "ISO 13485:2016"), /*#__PURE__*/React.createElement(Badge, {
    tone: "purple"
  }, "ANVISA BPF"), /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, "ISO 37001"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "ESG em Foco"))), /*#__PURE__*/React.createElement(Card, {
    surface: "light",
    padding: "32px"
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    style: {
      marginBottom: 26
    }
  }, "Certifica\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/certs/cert-iso13485-anvisa.png",
    alt: "ISO 13485 e ANVISA",
    style: {
      height: 88
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/certs/cert-iso37001.png",
    alt: "ISO 37001",
    style: {
      height: 78
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../assets/certs/cert-esg.png",
    alt: "ESG em Foco",
    style: {
      height: 86
    }
  }))))));
}
Object.assign(__ds_scope, { CertificationsSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/CertificationsSlide.jsx", error: String((e && e.message) || e) }); }

// slides/ClosingSlide.jsx
try { (() => {
function ClosingSlide({
  title = "Obrigado",
  line = "Viver em",
  accent = "movimento.",
  contact = "neoortho.com.br · Curitiba, PR — Brasil"
}) {
  const {
    SlideFrame,
    EllipseOutline
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "title"
  }, /*#__PURE__*/React.createElement(EllipseOutline, {
    width: "80%",
    left: "34%",
    top: "-30%",
    rotate: -12,
    color: "rgba(255,255,255,.26)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 104,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#fff"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "32px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 34,
      color: "#fff"
    }
  }, line, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-500)"
    }
  }, accent)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "40px 0 0",
      fontSize: 16,
      color: "rgba(255,255,255,.72)"
    }
  }, contact)), /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_branco_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      bottom: 64,
      right: 80,
      width: 190
    }
  }));
}
Object.assign(__ds_scope, { ClosingSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/ClosingSlide.jsx", error: String((e && e.message) || e) }); }

// slides/IntroSlide.jsx
try { (() => {
function IntroSlide({
  heading = "Quem somos",
  paragraphs = ["A NeoOrtho desenvolve implantes e próteses ortopédicas há mais de 20 anos, com um propósito claro: devolver às pessoas a liberdade de se movimentar com segurança, qualidade e confiança.", "Nosso portfólio oferece soluções completas nas linhas de Traumatologia, Craniomaxilofacial, Coluna e próteses personalizadas de ATM.", "Com sede em Curitiba, Brasil, a NeoOrtho integra o Medartis Group desde março de 2025, fortalecendo sua estrutura, capacidade tecnológica e presença no mercado global."]
}) {
  const {
    SlideFrame,
    SectionEyebrow,
    EllipseFrame
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "light"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_color_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      top: 48,
      right: 64,
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "132px 80px 80px",
      display: "grid",
      gridTemplateColumns: "1fr 470px",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, {
    number: "01.",
    style: {
      marginBottom: 28,
      maxWidth: 420
    }
  }, heading), paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: "0 0 20px",
      fontSize: 21,
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "58ch"
    }
  }, p))), /*#__PURE__*/React.createElement(EllipseFrame, {
    src: "../assets/photos/photo-hands.png",
    ratio: "4 / 5",
    rotate: -10
  })));
}
Object.assign(__ds_scope, { IntroSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/IntroSlide.jsx", error: String((e && e.message) || e) }); }

// slides/ManifestoSlide.jsx
try { (() => {
function ManifestoSlide({
  quote = "Somos os parceiros incansáveis dos profissionais de saúde, movidos por um compromisso humano, garantindo que cada pessoa, em qualquer lugar, tenha a oportunidade de abraçar, caminhar e sorrir sem limitações.",
  signature = "Parceria que move"
}) {
  const {
    SlideFrame,
    EllipseOutline
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "section"
  }, /*#__PURE__*/React.createElement(EllipseOutline, {
    width: "86%",
    left: "52%",
    top: "-24%",
    rotate: -16,
    color: "rgba(255,255,255,.30)",
    thickness: 2
  }), /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_branco_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      bottom: 56,
      right: 72,
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 120,
      width: 760
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 30,
      lineHeight: 1.55,
      color: "#fff"
    }
  }, quote), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "56px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 56,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, signature.split(" ")[0], " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-500)"
    }
  }, signature.split(" ").slice(1).join(" ")))));
}
Object.assign(__ds_scope, { ManifestoSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/ManifestoSlide.jsx", error: String((e && e.message) || e) }); }

// slides/PhotoStatSlide.jsx
try { (() => {
function PhotoStatSlide({
  value = "+250",
  unit = "colaboradores",
  text = "Investimos constantemente em capacitação especializada de colaboradores, novos equipamentos e maquinário de última geração.",
  photo = "../assets/photos/photo-team.png"
}) {
  const {
    SlideFrame
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "plain"
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,rgba(39,20,76,.94) 0%,rgba(39,20,76,.80) 42%,rgba(39,20,76,0) 78%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 150,
      width: 520,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 116,
      lineHeight: 1,
      letterSpacing: "-0.03em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 34,
      marginTop: 6,
      color: "var(--teal-500)"
    }
  }, unit), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "36px 0 0",
      fontSize: 19,
      lineHeight: 1.6,
      color: "rgba(255,255,255,.84)"
    }
  }, text)), /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_branco_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      bottom: 52,
      left: 80,
      width: 150
    }
  }));
}
Object.assign(__ds_scope, { PhotoStatSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/PhotoStatSlide.jsx", error: String((e && e.message) || e) }); }

// slides/PortfolioSlide.jsx
try { (() => {
function PortfolioSlide({
  title = "Portfólio",
  lines = [{
    tag: "cmf",
    label: "Craniomaxilofacial",
    sub: "CMF",
    img: "../assets/products/line-cmf.png"
  }, {
    tag: "coluna",
    label: "Cervical · Torácico · Lombar",
    sub: "COLUNA",
    img: "../assets/products/line-coluna.png"
  }, {
    tag: "trauma",
    label: "Membros superiores e inferiores",
    sub: "TRAUMA",
    img: "../assets/products/line-trauma.png"
  }, {
    tag: "personalizados",
    label: "Próteses paciente-específico",
    sub: "PERSONALIZADOS",
    img: "../assets/products/line-personalizados.png"
  }]
}) {
  const {
    SlideFrame,
    Tag
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "light"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_color_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      top: 48,
      right: 64,
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "132px 80px 80px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 36px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 52,
      letterSpacing: "-0.02em",
      color: "var(--purple-700)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 28
    }
  }, lines.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.sub,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 250,
      background: "rgba(255,255,255,.6)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--gray-200)",
      display: "grid",
      placeItems: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: l.img,
    alt: l.sub,
    style: {
      maxHeight: 226,
      maxWidth: "88%",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement(Tag, {
    line: l.tag
  }, l.sub), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, l.label))))));
}
Object.assign(__ds_scope, { PortfolioSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/PortfolioSlide.jsx", error: String((e && e.message) || e) }); }

// slides/PresenceSlide.jsx
try { (() => {
function PresenceSlide({
  title = "Presença nacional e internacional"
}) {
  const {
    SlideFrame,
    StatBlock,
    Divider
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "light"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_color_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      top: 48,
      right: 64,
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "132px 80px 88px",
      display: "grid",
      gridTemplateColumns: "1fr 420px",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 28px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 50,
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
      color: "var(--purple-700)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 36px",
      fontSize: 20,
      lineHeight: 1.6,
      maxWidth: "44ch"
    }
  }, "Ampla cobertura com mais de 100 distribuidores no Brasil e 5 distribuidores em outros pa\xEDses da Am\xE9rica Latina."), /*#__PURE__*/React.createElement(Divider, {
    style: {
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "+100",
    label: "distribuidores no Brasil"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "9 pa\xEDses",
    label: "na Am\xE9rica Latina",
    tone: "teal"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "Out 2026",
    label: "in\xEDcio das opera\xE7\xF5es no M\xE9xico"
  }))), /*#__PURE__*/React.createElement("img", {
    src: "../assets/maps/presence-map.png",
    alt: "Am\xE9rica Latina",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  })));
}
Object.assign(__ds_scope, { PresenceSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/PresenceSlide.jsx", error: String((e && e.message) || e) }); }

// slides/SectionSlide.jsx
try { (() => {
function SectionSlide({
  number = "02.",
  label = "Nossa trajetória",
  title = "Uma trajetória de excelência pela inovação"
}) {
  const {
    SlideFrame,
    EllipseOutline
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "title"
  }, /*#__PURE__*/React.createElement(EllipseOutline, {
    width: "70%",
    left: "-16%",
    top: "42%",
    rotate: -8,
    color: "rgba(255,255,255,.28)"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_branco_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      top: 56,
      right: 72,
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: "50%",
      transform: "translateY(-50%)",
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "var(--teal-500)",
      marginBottom: 22
    }
  }, number, " ", label), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 72,
      lineHeight: 1.06,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, title)));
}
Object.assign(__ds_scope, { SectionSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/SectionSlide.jsx", error: String((e && e.message) || e) }); }

// slides/SlideFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SlideFrame({
  variant = "light",
  children,
  style,
  ...rest
}) {
  const bgs = {
    light: {
      backgroundImage: "url(../assets/backgrounds/slide-bg-light.png)"
    },
    title: {
      backgroundImage: "url(../assets/backgrounds/slide-bg-title.png)"
    },
    section: {
      backgroundImage: "url(../assets/backgrounds/slide-bg-section.png)"
    },
    plain: {
      background: "var(--white)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: 1280,
      height: 720,
      position: "relative",
      overflow: "hidden",
      fontFamily: "var(--font-body)",
      color: variant === "light" || variant === "plain" ? "var(--text-body)" : "var(--white)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      ...bgs[variant],
      ...style
    }
  }, rest), children);
}
function SlideLogo({
  dark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: dark ? "../assets/logos/neoortho_logo_preto_medartis.png" : "../assets/logos/neoortho_logo_branco_medartis.png",
    alt: "NeoOrtho \u2014 medartis group",
    style: {
      position: "absolute",
      width: 176,
      height: "auto",
      ...style
    }
  });
}
Object.assign(__ds_scope, { SlideFrame, SlideLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// slides/StatsSlide.jsx
try { (() => {
function StatsSlide({
  title = "Parceria",
  accent = "que move",
  stats = [{
    value: "20 anos",
    label: "de excelência. Qualidade, tecnologia, confiabilidade e custo-benefício."
  }, {
    value: "+16 mil",
    label: "soluções seguras para a saúde nas linhas de CMF, Trauma, Coluna e personalizados."
  }, {
    value: "+100",
    label: "distribuidores no Brasil e em outros 9 países da América Latina."
  }]
}) {
  const {
    SlideFrame,
    Divider
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "light"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_color_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      top: 48,
      right: 64,
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "140px 80px 96px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 56px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 62,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: "var(--purple-700)"
    }
  }, title, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-500)"
    }
  }, accent)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 56
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(Divider, {
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 54,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: "var(--purple-700)"
    }
  }, s.value), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--text-body)"
    }
  }, s.label))))));
}
Object.assign(__ds_scope, { StatsSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/StatsSlide.jsx", error: String((e && e.message) || e) }); }

// slides/TimelineSlide.jsx
try { (() => {
function TimelineSlide({
  title = "Uma trajetória de excelência",
  items = [{
    year: "2004",
    head: "Fundação",
    text: "A NeoOrtho nasceu dentro da Neodent com a produção de implantes para craniomaxilofacial."
  }, {
    year: "2009",
    head: "Marca independente",
    text: "A NeoOrtho passa a ser uma marca independente (cisão com Neodent)."
  }, {
    year: "2010",
    head: "Registro FDA",
    text: "Primeiros produtos registrados no FDA, com reconhecimento no exterior."
  }, {
    year: "2019",
    head: "Personalizados",
    text: "Início dos projetos da linha Neocustom, de próteses personalizadas."
  }, {
    year: "2025",
    head: "Aquisição",
    text: "Compra de 51% da NeoOrtho pela multinacional suíça Medartis."
  }, {
    year: "2026",
    head: "Nova fábrica",
    text: "Triplo da capacidade produtiva e mais de 7 mil m²."
  }]
}) {
  const {
    SlideFrame
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "light"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_color_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      top: 48,
      right: 64,
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "132px 80px 88px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 44px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 48,
      letterSpacing: "-0.02em",
      color: "var(--purple-700)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 46,
      height: 2,
      background: "var(--gradient-purple-pill)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6,1fr)",
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.year,
    style: {
      position: "relative",
      paddingTop: 76
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 26,
      color: "var(--purple-700)"
    }
  }, it.year), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 40,
      left: 0,
      width: 14,
      height: 14,
      borderRadius: 999,
      background: "var(--purple-700)",
      border: "3px solid #fff"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, it.head), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, it.text)))))));
}
Object.assign(__ds_scope, { TimelineSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/TimelineSlide.jsx", error: String((e && e.message) || e) }); }

// slides/TitleSlide.jsx
try { (() => {
function TitleSlide({
  eyebrow = "Apresentação institucional 2026",
  title = "Viver em",
  accent = "movimento.",
  subtitle = "NeoOrtho — medartis group"
}) {
  const {
    SlideFrame
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "title"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_branco_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      top: 64,
      left: 80,
      width: 210
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      bottom: 96,
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "rgba(255,255,255,.72)",
      marginBottom: 24
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 92,
      lineHeight: 1.02,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, title, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-500)"
    }
  }, accent)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "28px 0 0",
      fontSize: 20,
      color: "rgba(255,255,255,.78)"
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { TitleSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/TitleSlide.jsx", error: String((e && e.message) || e) }); }

// slides/ValuesSlide.jsx
try { (() => {
function ValuesSlide({
  title = "Valores",
  values = [{
    name: "EXCELÊNCIA",
    text: "Excelência em produtos de qualidade e na prestação dos serviços."
  }, {
    name: "COMPROMETIMENTO",
    text: "Integridade desde a fundação com nossos distribuidores, médicos e pacientes."
  }, {
    name: "SAÚDE",
    text: "O princípio pelo qual desenvolvemos soluções ortopédicas."
  }, {
    name: "PARCERIA",
    text: "Proximidade real e foco nos clientes."
  }]
}) {
  const {
    SlideFrame,
    Card
  } = window.NeoOrthoDesignSystem_c2825f;
  const colors = ["var(--line-trauma)", "var(--purple-700)", "var(--line-cmf)", "var(--line-coluna)"];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    variant: "light"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/neoortho_logo_color_medartis.png",
    alt: "NeoOrtho",
    style: {
      position: "absolute",
      top: 48,
      right: 64,
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "140px 80px 96px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 48px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 58,
      letterSpacing: "-0.02em",
      color: "var(--purple-700)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, values.map((v, i) => /*#__PURE__*/React.createElement(Card, {
    key: v.name,
    padding: "28px",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 6,
      borderRadius: 999,
      background: colors[i]
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "var(--tracking-caps)",
      color: colors[i]
    }
  }, v.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.55
    }
  }, v.text))))));
}
Object.assign(__ds_scope, { ValuesSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/ValuesSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/email_signature/Signature.jsx
try { (() => {
function EmailSignature({
  name = "Nome Sobrenome",
  rolePt = "Cargo Português",
  roleEn = "Cargo Inglês",
  company = "NeoOrtho - Medartis Group",
  phone = "+55 41 0000 0000",
  mobile = "+55 41 9 0000 0000",
  email = "email@neoortho.com.br",
  site = "neoortho.com.br",
  address = "Rua Ângelo Domingos Durigan, 607, Cascatinha, Curitiba - PR - Brasil",
  symbol = "../../assets/logos/symbol_color.png"
}) {
  return /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    style: {
      fontFamily: "'Poppins', Arial, sans-serif",
      width: "100%",
      maxWidth: 700,
      background: "none"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "16px 0 0 16px",
      verticalAlign: "top",
      width: "80%"
    }
  }, /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      verticalAlign: "top",
      width: 100
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: symbol,
    alt: "NeoOrtho Logo",
    width: "80",
    height: "80",
    style: {
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      verticalAlign: "middle"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      color: "#111111",
      fontWeight: 700,
      letterSpacing: ".5px"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 14,
      color: "#582c83",
      fontWeight: 500
    }
  }, rolePt, " | ", roleEn), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 13,
      color: "#333"
    }
  }, company))))), /*#__PURE__*/React.createElement("table", {
    cellPadding: "1",
    cellSpacing: "1",
    style: {
      width: "100%",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      verticalAlign: "middle",
      fontSize: 13,
      color: "#111111",
      paddingLeft: 100
    }
  }, phone, " | ", mobile)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      verticalAlign: "middle",
      fontSize: 13,
      color: "#111111",
      paddingLeft: 100
    }
  }, email)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      verticalAlign: "middle",
      fontSize: 13,
      color: "#111111",
      paddingLeft: 100
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://" + site,
    style: {
      color: "#582c83",
      textDecoration: "none",
      fontWeight: 500
    }
  }, site))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      verticalAlign: "middle",
      fontSize: 13,
      color: "#111111",
      paddingLeft: 100
    }
  }, address))))))));
}
Object.assign(__ds_scope, { EmailSignature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/email_signature/Signature.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactForm.jsx
try { (() => {
function ContactForm() {
  const {
    Input,
    Select,
    Checkbox,
    Button,
    Card
  } = window.NeoOrthoDesignSystem_c2825f;
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contato",
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "96px 40px",
      display: "grid",
      gridTemplateColumns: "1fr 520px",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "var(--purple-700)",
      marginBottom: 18
    }
  }, "Contato"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 20px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 42,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)"
    }
  }, "Estamos aqui para voc\xEA."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      fontSize: 19,
      lineHeight: 1.6,
      maxWidth: "48ch"
    }
  }, "Fale com nossa equipe sobre produtos, distribui\xE7\xE3o ou pr\xF3teses personalizadas."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 2,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("div", null, "Rua \xC2ngelo Domingos Durigan, 607"), /*#__PURE__*/React.createElement("div", null, "Cascatinha, Curitiba \u2014 PR, Brasil"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "https://neoortho.com.br"
  }, "neoortho.com.br")))), /*#__PURE__*/React.createElement(Card, {
    padding: "34px"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "28px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 26,
      color: "var(--purple-700)"
    }
  }, "Obrigado!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6
    }
  }, "Recebemos sua mensagem. Nossa equipe entrar\xE1 em contato em breve."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 12,
      alignSelf: "flex-start"
    },
    onClick: () => setSent(false)
  }, "Enviar outra")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome completo",
    placeholder: "Nome Sobrenome",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "email@empresa.com.br",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefone",
    placeholder: "+55 41 0 0000 0000"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Assunto",
    options: ["Linha Trauma", "Linha Coluna", "Linha CMF", "Personalizados", "Distribuição"]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Aceito receber comunica\xE7\xF5es da NeoOrtho",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    full: true,
    style: {
      marginTop: 6
    }
  }, "Enviar mensagem"))));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function SiteFooter() {
  const {
    PositioningBar,
    Divider
  } = window.NeoOrthoDesignSystem_c2825f;
  const cols = [["Produtos", ["Craniomaxilofacial", "Coluna", "Traumatologia", "Próteses"]], ["Materiais técnicos", ["IFU", "Catálogos", "Técnicas cirúrgicas"]], ["A NeoOrtho", ["Nossa história", "Qualidade e SGQ", "Medartis Group", "Trabalhe conosco"]]];
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(PositioningBar, {
    assetBase: "../..",
    align: "between",
    height: 96
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--purple-900)",
      color: "rgba(255,255,255,.78)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "56px 40px 40px",
      display: "grid",
      gridTemplateColumns: "1.3fr repeat(3,1fr)",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/neoortho_logo_branco_medartis.png",
    alt: "NeoOrtho \u2014 medartis group",
    style: {
      width: 168,
      display: "block",
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.7
    }
  }, "Rua \xC2ngelo Domingos Durigan, 607", /*#__PURE__*/React.createElement("br", null), "Cascatinha, Curitiba \u2014 PR, Brasil"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/medartis_logo_branco.png",
    alt: "Medartis",
    style: {
      height: 20,
      marginTop: 26,
      opacity: .85,
      display: "block"
    }
  })), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "var(--teal-500)",
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,.78)",
      fontSize: 14
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 40px 40px"
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    tone: "onPurple",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.56)"
    }
  }, "NEOORTHO\xAE Produtos Ortop\xE9dicos S.A. \xA92026 Todos os direitos reservados."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.72)"
    }
  }, "facebook"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.72)"
    }
  }, "linkedin"))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function SiteHeader({
  active = "Traumatologia",
  onNav = () => {}
}) {
  const [lang, setLang] = React.useState("PT");
  // Nav mirrors the live site: product lines first, then IFU/resources, then company.
  const items = ["Craniomaxilofacial", "Coluna", "Traumatologia", "Próteses", "IFU", "Nossa História"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(255,255,255,.94)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "18px 40px",
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/neoortho_logo_color_medartis.png",
    alt: "NeoOrtho \u2014 medartis group",
    style: {
      width: 168,
      height: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24,
      marginLeft: "auto"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => onNav(it),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "6px 0",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: active === it ? 600 : 400,
      color: active === it ? "var(--purple-700)" : "var(--text-body)",
      borderBottom: active === it ? "2px solid var(--purple-700)" : "2px solid transparent"
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      paddingLeft: 8,
      borderLeft: "1px solid var(--gray-200)"
    }
  }, ["PT", "ES", "EN"].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      fontFamily: "var(--font-body)",
      fontSize: 12,
      letterSpacing: "var(--tracking-wide)",
      fontWeight: lang === l ? 600 : 400,
      color: lang === l ? "var(--purple-700)" : "var(--text-muted)"
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "11px 24px",
      borderRadius: "var(--radius-pill)",
      background: "var(--purple-700)",
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "Fale conosco")));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  const {
    EllipseOutline
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--purple-900)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/photo-hands.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,rgba(39,20,76,.92) 0%,rgba(39,20,76,.66) 46%,rgba(39,20,76,.10) 82%)"
    }
  }), /*#__PURE__*/React.createElement(EllipseOutline, {
    width: "86%",
    left: "26%",
    top: "-30%",
    rotate: -12,
    color: "rgba(255,255,255,.34)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "120px 40px 132px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "var(--teal-500)",
      marginBottom: 22
    }
  }, "Implantes e pr\xF3teses ortop\xE9dicas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: 700,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 74,
      lineHeight: 1.03,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, "Viver em ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-500)"
    }
  }, "movimento.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "30px 0 0",
      maxWidth: 560,
      fontSize: 20,
      lineHeight: 1.6,
      color: "rgba(255,255,255,.86)"
    }
  }, "Devolvemos movimento a quem pensou t\xEA-lo perdido. H\xE1 mais de 20 anos, dedicamos cada dia a transformar vidas atrav\xE9s de produtos de alta tecnologia e qualidade excepcional."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#portfolio",
    style: {
      padding: "16px 34px",
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      color: "var(--purple-700)",
      fontWeight: 600,
      fontSize: 16,
      textDecoration: "none"
    }
  }, "Conhe\xE7a o portf\xF3lio"), /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    style: {
      padding: "16px 34px",
      borderRadius: "var(--radius-pill)",
      border: "2px solid rgba(255,255,255,.6)",
      color: "#fff",
      fontWeight: 600,
      fontSize: 16,
      textDecoration: "none"
    }
  }, "Fale com um especialista"))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function StatsStrip() {
  const {
    StatBlock
  } = window.NeoOrthoDesignSystem_c2825f;
  const items = [["+20 anos", "de excelência em ortopedia"], ["+16 mil", "itens em portfólio"], ["+100", "distribuidores no Brasil"], ["+250", "colaboradores"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-light-field)",
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "56px 40px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 40
    }
  }, items.map(([v, l]) => /*#__PURE__*/React.createElement(StatBlock, {
    key: v,
    value: v,
    label: l
  }))));
}
function PortfolioGrid({
  onSelect = () => {}
}) {
  const {
    Tag
  } = window.NeoOrthoDesignSystem_c2825f;
  const lines = [{
    id: "trauma",
    tag: "trauma",
    name: "Traumatologia",
    sub: "Membros superiores, inferiores, pelve, costelas e extremidades",
    img: "../../assets/products/line-trauma.png",
    body: "A Linha Trauma NeoOrtho reúne um portfólio completo de implantes para o tratamento cirúrgico de fraturas, deformidades, pseudoartroses e reconstruções ósseas em diferentes níveis de complexidade."
  }, {
    id: "coluna",
    tag: "coluna",
    name: "Coluna",
    sub: "Parafusos · cages · placas",
    img: "../../assets/products/line-coluna.png",
    body: "Soluções cervicais, torácicas e lombares para estabilização e correção, com sistemas de parafusos, cages e placas."
  }, {
    id: "cmf",
    tag: "cmf",
    name: "Craniomaxilofacial",
    sub: "Placas · telas · parafusos",
    img: "../../assets/products/line-cmf.png",
    body: "A linha que deu origem à NeoOrtho em 2004: placas, telas e parafusos para osteossíntese craniomaxilofacial."
  }, {
    id: "custom",
    tag: "personalizados",
    name: "Próteses",
    sub: "Paciente-específico · ATM · impressão 3D em titânio",
    img: "../../assets/products/line-personalizados.png",
    body: "Linha Neocustom: próteses paciente-específico, incluindo articulação temporomandibular (ATM), com impressão 3D em titânio."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "96px 40px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "var(--purple-700)",
      marginBottom: 18
    }
  }, "Nosso portf\xF3lio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 46,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)"
    }
  }, "Quatro linhas, uma s\xF3 exig\xEAncia."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 48px",
      maxWidth: "60ch",
      fontSize: 19,
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, "Solu\xE7\xF5es completas em tit\xE2nio puro ou liga, desenvolvidas para cada regi\xE3o de aplica\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, lines.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onSelect(l),
    style: {
      textAlign: "left",
      cursor: "pointer",
      background: "var(--white)",
      border: "1px solid var(--gray-200)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 0,
      overflow: "hidden",
      fontFamily: "var(--font-body)",
      transition: "box-shadow var(--duration-base) var(--ease-standard)"
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = "var(--shadow-md)",
    onMouseLeave: e => e.currentTarget.style.boxShadow = "var(--shadow-sm)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 230,
      background: "var(--gray-100)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: l.img,
    alt: l.name,
    style: {
      maxHeight: 206,
      maxWidth: "84%",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 22px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    line: l.tag
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, l.sub), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--purple-700)"
    }
  }, "Ver produtos \u2192"))))));
}
function ManifestoBand() {
  const {
    EllipseOutline
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--purple-700)",
      backgroundImage: "url(../../assets/backgrounds/slide-bg-section.png)",
      backgroundSize: "cover"
    }
  }, /*#__PURE__*/React.createElement(EllipseOutline, {
    width: "60%",
    left: "-14%",
    top: "30%",
    rotate: -8,
    color: "rgba(255,255,255,.26)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "104px 40px",
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: 72,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 26,
      lineHeight: 1.6,
      color: "#fff"
    }
  }, "Acreditamos que o movimento \xE9 a ess\xEAncia da liberdade. \xC9 o direito de caminhar sob o pr\xF3prio passo, de abra\xE7ar sem hesitar, de sorrir e viver plenamente."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "40px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 44,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, "Parceria ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-500)"
    }
  }, "que move."))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/photo-partnership.png",
    alt: "",
    style: {
      width: "100%",
      borderRadius: "var(--radius-xl)",
      display: "block"
    }
  })));
}
function QualityBand() {
  const {
    Card,
    Badge,
    Divider
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "96px 40px",
      display: "grid",
      gridTemplateColumns: "1fr 420px",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "var(--purple-700)",
      marginBottom: 18
    }
  }, "Qualidade"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 22px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 42,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)"
    }
  }, "Seguran\xE7a auditada, n\xE3o declarada."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 18px",
      fontSize: 19,
      lineHeight: 1.6,
      maxWidth: "58ch"
    }
  }, "O sistema de gest\xE3o da qualidade da NeoOrtho e todas as suas linhas de produtos s\xE3o certificados e passam frequentemente por auditorias de certifica\xE7\xE3o."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "0 0 28px",
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u25CF Material biocompat\xEDvel e hipoalerg\xEAnico"), /*#__PURE__*/React.createElement("li", null, "\u25CF Tit\xE2nio puro ou liga, conforme regi\xE3o de aplica\xE7\xE3o"), /*#__PURE__*/React.createElement("li", null, "\u25CF ASTM F136 / F67 / F382 / F543 / F1264")), /*#__PURE__*/React.createElement(Divider, {
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "ISO 13485:2016"), /*#__PURE__*/React.createElement(Badge, null, "ANVISA BPF"), /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, "ISO 37001"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "ESG em Foco 2024"))), /*#__PURE__*/React.createElement(Card, {
    padding: "30px",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/certs/cert-iso13485-anvisa.png",
    alt: "ISO 13485 e ANVISA",
    style: {
      height: 82
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/certs/cert-iso37001.png",
    alt: "ISO 37001",
    style: {
      height: 72
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/certs/cert-esg.png",
    alt: "ESG em Foco",
    style: {
      height: 80
    }
  }))));
}
function FactoryBand() {
  const {
    StatBlock
  } = window.NeoOrthoDesignSystem_c2825f;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-light-field)",
      borderTop: "1px solid var(--gray-200)",
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "88px 40px",
      display: "grid",
      gridTemplateColumns: "480px 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/photo-new-factory.png",
    alt: "Nova f\xE1brica NeoOrtho",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 20px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: "-0.02em",
      color: "var(--purple-700)"
    }
  }, "Nova f\xE1brica, 2026."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 34px",
      fontSize: 19,
      lineHeight: 1.6,
      maxWidth: "50ch"
    }
  }, "Cont\xEDnua expans\xE3o: uma nova unidade com o triplo da capacidade produtiva anual e certifica\xE7\xE3o LEED."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "+7,8 mil m\xB2",
    label: "de \xE1rea constru\xEDda"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3\xD7",
    label: "capacidade produtiva anual",
    tone: "teal"
  })))));
}
function ResourcesBand() {
  const {
    Card
  } = window.NeoOrthoDesignSystem_c2825f;
  // Mirrors the live site's technical-materials area.
  const items = [["IFU", "Documentações oficiais de uso, instruções e recomendações para aplicação segura de cada produto."], ["Catálogos", "Catálogos completos com especificações técnicas, variações e detalhes de nossos sistemas."], ["Técnicas cirúrgicas", "Guias e materiais de apoio com técnicas cirúrgicas, recomendações e fluxos de utilização."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "ifu",
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "var(--purple-700)",
      marginBottom: 18
    }
  }, "Materiais t\xE9cnicos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 14px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 42,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)"
    }
  }, "Informa\xE7\xE3o atualizada para a pr\xE1tica cl\xEDnica."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 44px",
      maxWidth: "62ch",
      fontSize: 19,
      lineHeight: 1.6
    }
  }, "Uma \xE1rea dedicada a materiais t\xE9cnicos, documenta\xE7\xF5es e conte\xFAdos essenciais para o uso seguro, eficiente e preciso dos nossos produtos e sistemas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, items.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "28px",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 24,
      color: "var(--purple-700)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.55
    }
  }, d), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginTop: 6
    }
  }, "Download \u2192")))));
}
Object.assign(__ds_scope, { StatsStrip, PortfolioGrid, ManifestoBand, QualityBand, FactoryBand, ResourcesBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EllipseFrame = __ds_scope.EllipseFrame;

__ds_ns.EllipseOutline = __ds_scope.EllipseOutline;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PositioningBar = __ds_scope.PositioningBar;

__ds_ns.SectionEyebrow = __ds_scope.SectionEyebrow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CertificationsSlide = __ds_scope.CertificationsSlide;

__ds_ns.ClosingSlide = __ds_scope.ClosingSlide;

__ds_ns.IntroSlide = __ds_scope.IntroSlide;

__ds_ns.ManifestoSlide = __ds_scope.ManifestoSlide;

__ds_ns.PhotoStatSlide = __ds_scope.PhotoStatSlide;

__ds_ns.PortfolioSlide = __ds_scope.PortfolioSlide;

__ds_ns.PresenceSlide = __ds_scope.PresenceSlide;

__ds_ns.SectionSlide = __ds_scope.SectionSlide;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.SlideLogo = __ds_scope.SlideLogo;

__ds_ns.StatsSlide = __ds_scope.StatsSlide;

__ds_ns.TimelineSlide = __ds_scope.TimelineSlide;

__ds_ns.TitleSlide = __ds_scope.TitleSlide;

__ds_ns.ValuesSlide = __ds_scope.ValuesSlide;

__ds_ns.EmailSignature = __ds_scope.EmailSignature;

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.StatsStrip = __ds_scope.StatsStrip;

__ds_ns.PortfolioGrid = __ds_scope.PortfolioGrid;

__ds_ns.ManifestoBand = __ds_scope.ManifestoBand;

__ds_ns.QualityBand = __ds_scope.QualityBand;

__ds_ns.FactoryBand = __ds_scope.FactoryBand;

__ds_ns.ResourcesBand = __ds_scope.ResourcesBand;

})();
