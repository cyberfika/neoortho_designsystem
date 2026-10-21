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

export function Logo({ version = "color-medartis", width = 220, assetBase = "", clearSpace = false, style, ...rest }) {
  const reduced = !version.includes("medartis");
  const min = version.startsWith("symbol") ? 40 : reduced ? 70 : 110;
  const w = Math.max(width, min);
  const base = assetBase ? assetBase.replace(/\/$/, "") + "/" : "";
  return (
    <img src={base + SOURCES[version]} alt="NeoOrtho — medartis group" width={w}
      style={{ display: "block", width: w, height: "auto", padding: clearSpace ? "var(--space-brand-clear)" : 0, ...style }} {...rest} />
  );
}
