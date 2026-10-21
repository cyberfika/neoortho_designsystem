import * as React from "react";

/** Low-emphasis status chip on a 20% brand tint. Sentence case, unlike Tag. */
export interface BadgeProps {
  tone?: "purple" | "teal" | "neutral" | "solid";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
