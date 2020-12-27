import { ServiceDto } from "@/shared/dtos";
import { ServiceFormModel } from "@/shared/types";

export const mapServiceFormModelToServiceDto = (
  serviceFormModel: ServiceFormModel
): ServiceDto => ({
  serviceId: serviceFormModel.serviceId,
  id: serviceFormModel.id,
  vehicleDetails: serviceFormModel.vehicleDetails,
  comments: serviceFormModel.comments,
  dateOfRegistration: serviceFormModel.dateOfRegistration,
  otherInformations: serviceFormModel.otherInformations,
  serviceCosts: {
    costsList: serviceFormModel.serviceCosts.costsList,
    currency: serviceFormModel.serviceCosts.currency,
  },
  serviceDescription: serviceFormModel.serviceDescription,
  serviceDiagnosis: serviceFormModel.serviceDiagnosis,
});
