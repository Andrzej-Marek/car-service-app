import { Currency } from "../enums";

export interface ServiceCostTable {
  title: string;
  quantity: number;
  priceNet: number;
  priceGross: number;
  total: number;
  currency: Currency;
  taxRate: number;
}
