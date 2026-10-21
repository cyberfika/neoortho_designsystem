import * as React from "react";

/**
 * The full-width purple footer bar from the wallpapers and LinkedIn cover:
 * the positioning line with its last word in azul institucional, plus the white lockup.
 */
export interface PositioningBarProps {
  /** White part of the line. Default "Viver em". */
  line?: string;
  /** Teal part. Default "movimento." — keep the period. */
  accent?: string;
  showLogo?: boolean;
  assetBase?: string;
  height?: number;
  align?: "center" | "between";
  style?: React.CSSProperties;
}
export function PositioningBar(props: PositioningBarProps): JSX.Element;
