import * as React from "react";

/** Pill toggle. Track turns roxo institucional when on; the knob slides, it never bounces. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
