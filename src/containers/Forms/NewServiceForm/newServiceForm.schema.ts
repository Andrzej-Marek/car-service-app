import { vehicleDetailsSchema } from "@/shared/schemas";
import { ServiceFormModel } from "@/shared/types";
import { Yup } from "@/shared/utils";

export const newServiceFormSchema = Yup.object().shape<ServiceFormModel>({
  comments: Yup.string(),
  // @ts-ignore
  vehicleDetails: vehicleDetailsSchema,
  dateOfRegistration: Yup.string(),
  serviceDiagnosis: Yup.string().required(),
  serviceDescription: Yup.string().required(),
  otherInformations: Yup.string(),
  // @ts-ignore
  serviceCosts: Yup.object().shape({
    currency: Yup.string().required(),
  }),
  photos: Yup.mixed(),
});
