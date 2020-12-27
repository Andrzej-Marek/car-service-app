import { ReactNode } from "react";
import { RouteUrl } from "../enums";

export interface TableActionCellOptions {
  icon: ReactNode;
  tooltipText?: string;
  link?: RouteUrl | string;
  onClick?: () => void;
  color?: string;
}
