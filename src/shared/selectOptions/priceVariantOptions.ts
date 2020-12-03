import i18next from "i18next";
import { PriceVariant } from "@/shared/enums";
import { SelectOption } from "@/shared/types";

export const priceVariantOptions: SelectOption[] = [
  {
    value: PriceVariant.Gross,
    label: i18next.t("priceVariants:gross"),
  },
  {
    value: PriceVariant.Net,
    label: i18next.t("priceVariants:net"),
  },
];
