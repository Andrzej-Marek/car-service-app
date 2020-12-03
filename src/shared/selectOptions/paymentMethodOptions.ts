import { SelectOption } from "@/shared/types";
import { PaymentMethod } from "../enums";
import { globalTranslation } from "../utils";

export const paymentMethodOptions: SelectOption[] = [
  {
    label: globalTranslation("paymentMethods:cash"),
    value: PaymentMethod.Cash,
  },
  {
    label: globalTranslation("paymentMethods:card"),
    value: PaymentMethod.PaymentCard,
  },
  {
    label: globalTranslation("paymentMethods:bankTransfer"),
    value: PaymentMethod.BankTransfer,
  },
];
