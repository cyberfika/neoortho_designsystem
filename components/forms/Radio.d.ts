import * as React from "react";

/** Circular radio — the ring thickens to 6px in roxo institucional when selected. */
export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
