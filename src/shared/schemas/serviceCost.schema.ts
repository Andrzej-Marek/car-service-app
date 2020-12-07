import { Yup } from "../utils";

export const serviceCostSchema = Yup.object().shape({
  title: Yup.string().required(),
  quantity: Yup.number().min(1).nullable(true),
  priceNet: Yup.number().min(1).nullable(true),
  priceGross: Yup.number().min(1).nullable(true),
  taxRate: Yup.number().required(),
});
