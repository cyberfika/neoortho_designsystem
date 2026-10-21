import * as React from "react";

/** Small-caps section label with a trailing rule — the deck's chapter marker (e.g. "01. LOGOTIPO"). */
export interface SectionEyebrowProps {
  children?: React.ReactNode;
  tone?: "purple" | "teal" | "inverse";
  /** Chapter number, e.g. "01." */
  number?: string;
  style?: React.CSSProperties;
}
export function SectionEyebrow(props: SectionEyebrowProps): JSX.Element;
