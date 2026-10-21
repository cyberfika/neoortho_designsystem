import * as React from "react";

/** Single-line text field. 12px radius, hairline border, purple focus ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Shown in place of hint, in #731ea0 — the brand has no red. */
  error?: string;
}
export function Input(props: InputProps): JSX.Element;
