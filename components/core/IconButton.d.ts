import * as React from "react";

/** Circular icon-only control. Always pass `label` — icons carry no text. */
export interface IconButtonProps {
  variant?: "ghost" | "solid" | "inverse";
  /** Square edge in px. 40 default; never below 44 on touch surfaces. */
  size?: number;
  label: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
