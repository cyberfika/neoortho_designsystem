import * as React from "react";

/**
 * Container block. 20px radius, hairline #d9d9d6 border first, low shadow second.
 * Never add a colored left border — the brand does not use that pattern.
 */
export interface CardProps {
  /** `onPurple` = 8% white fill with a 28% white hairline, for use on purple fields. */
  surface?: "light" | "muted" | "onPurple" | "solid";
  padding?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
