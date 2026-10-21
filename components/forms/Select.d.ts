import * as React from "react";

export interface SelectOption { value: string; label: string; }
/** Native select with a purple CSS caret. No custom dropdown — the brand has no menu pattern. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  options?: (SelectOption | string)[];
}
export function Select(props: SelectProps): JSX.Element;
