import { Yup } from "../utils";

export const vehicleDetailsSchema = Yup.object().shape({
  make: Yup.string().min(3).max(32).trim().required(),
  model: Yup.string().min(3).max(32).trim().required(),
  vinNumber: Yup.string().length(17).trim().required(),
  registrationNumber: Yup.string().nullable(true),
  enginePower: Yup.number().positive().nullable(true),
  engineCapacity: Yup.number().positive().nullable(true),
  productionYear: Yup.number()
    .min(1800)
    .max(new Date().getFullYear() + 2)
    .required(),
  // @ts-ignore
  mileage: Yup.object().shape({
    mileage: Yup.number().positive().nullable(true),
    unit: Yup.string(),
  }),
});
