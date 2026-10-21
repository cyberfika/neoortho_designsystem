import * as React from "react";

/** Small caps pill used for the four product lines and for category labels. */
export interface TagProps {
  /** Product line — sets the line color from the brandbook palette. */
  line?: "trauma" | "coluna" | "cmf" | "personalizados";
  /** Used when `line` is not set. */
  tone?: "purple" | "teal" | "neutral";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
