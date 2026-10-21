import * as React from "react";

/**
 * The NeoOrtho logo. Enforces the brandbook minimum widths (110px preferential,
 * 70px reduced) by clamping `width` — it cannot render smaller.
 * The preferential lockup (with the medartis group signature) is always first choice;
 * only drop to a reduced version when the signature becomes illegible.
 */
export interface LogoProps {
  version?: "color-medartis" | "white-medartis" | "black-medartis" | "color" | "white" | "black" | "symbol-color" | "symbol-white";
  /** px. Clamped up to the brandbook minimum for the chosen version. */
  width?: number;
  /** Path prefix to the design-system root, e.g. "../.." — assets are resolved against it. */
  assetBase?: string;
  /** Adds the respiro: one "O" of negative space on every side. */
  clearSpace?: boolean;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
