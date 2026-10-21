import * as React from "react";

/**
 * The NeoOrtho action control. Pill geometry, Poppins SemiBold, 20%-step hover.
 */
export interface ButtonProps {
  /** primary = solid roxo institucional; accent = azul institucional; inverse = white on purple */
  variant?: "primary" | "secondary" | "accent" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Stretch to the container width */
  full?: boolean;
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
