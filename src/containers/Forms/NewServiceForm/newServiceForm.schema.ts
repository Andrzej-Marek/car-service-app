import { vehicleDetailsSchema } from "@/shared/schemas";
import { Yup } from "@/shared/utils";

export const newServiceFormSchema = Yup.object().shape({
  vehicleDetails: vehicleDetailsSchema,
});
