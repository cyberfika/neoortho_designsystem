import * as React from "react";

/**
 * The grafismo. `EllipseFrame` clips photography to the brand ellipse;
 * `EllipseOutline` is the oversized hairline ellipse laid over imagery or purple fields.
 * These are the ONLY approved graphic shapes — never invent another.
 */
export interface EllipseFrameProps {
  src?: string;
  alt?: string;
  /** CSS aspect-ratio for the frame. */
  ratio?: string;
  /** Degrees of tilt on the mask. Keep between -20 and 20. */
  rotate?: number;
  style?: React.CSSProperties;
}
export function EllipseFrame(props: EllipseFrameProps): JSX.Element;

export interface EllipseOutlineProps {
  width?: string;
  top?: string;
  left?: string;
  rotate?: number;
  color?: string;
  thickness?: number;
  opacity?: number;
  style?: React.CSSProperties;
}
export function EllipseOutline(props: EllipseOutlineProps): JSX.Element;
