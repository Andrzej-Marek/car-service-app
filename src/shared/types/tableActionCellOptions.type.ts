import { ReactNode } from "react";
import { RouteUrl } from "../enums";

export interface TableActionCellOptions {
  icon: ReactNode;
  tooltipText?: string;
  link?: RouteUrl;
  onClick?: () => void;
  color?: string;
}
