import { Yup } from "../utils";

export const vehicleDetailsSchema = Yup.object().shape({
  make: Yup.string().min(3).max(32).required(),
  model: Yup.string().min(3).max(32).required(),
  vinNumber: Yup.string().length(17).required(),
  registrationNumber: Yup.string(),
  enginePower: Yup.number().positive().nullable(true),
  engineCapacity: Yup.number().positive().nullable(true),
  productionYear: Yup.string().nullable(true),
  mileage: Yup.object()
    .shape({
      mileage: Yup.number().positive().nullable(true),
      unit: Yup.string(),
    })
    .nullable(true),
});
