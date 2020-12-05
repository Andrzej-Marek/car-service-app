import { ServiceDto } from "@/shared/dtos";
import { ServiceFormModel } from "@/shared/types";

export const mapServiceFormModelToServiceDto = (
  serviceFormModel: ServiceFormModel
): ServiceDto => ({
  vehicleDetails: serviceFormModel.vehicleDetails,
  comments: serviceFormModel.comments,
  dateOfRegistration: serviceFormModel.dateOfRegistration,
  otherInformations: serviceFormModel.otherInformations,
  photos: serviceFormModel.photos,
  serviceCosts: {
    costsList: serviceFormModel.serviceCosts.costsList,
    currency: serviceFormModel.serviceCosts.currency,
  },
  serviceDescription: serviceFormModel.serviceDescription,
  serviceDiagnosis: serviceFormModel.serviceDiagnosis,
});
