import * as React from "react";

/** 1px rule — #d9d9d6 on light, 28% white on purple. */
export interface DividerProps {
  tone?: "light" | "onPurple";
  vertical?: boolean;
  style?: React.CSSProperties;
}
export function Divider(props: DividerProps): JSX.Element;
