import * as React from "react";

/**
 * The "+250 colaboradores" figure treatment: Area Normal SemiBold numeral over a Poppins caption.
 * Always write values with a leading plus and Brazilian scale words: +16 mil, +7,8 mil m².
 */
export interface StatBlockProps {
  value: string;
  label: string;
  tone?: "purple" | "teal" | "inverse";
  align?: "left" | "center";
  style?: React.CSSProperties;
}
export function StatBlock(props: StatBlockProps): JSX.Element;
