import { PaymentMethod } from "../enums";

export interface OtherServiceInformations {
  id?: number;
  paymentMethod: PaymentMethod | null;
  warrantyTime: Date | null;
}
