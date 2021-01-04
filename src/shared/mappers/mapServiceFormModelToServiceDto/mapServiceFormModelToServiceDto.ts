import { ServiceDto } from "@/shared/dtos";
import { ServiceFormModel } from "@/shared/types";

export const mapServiceFormModelToServiceDto = (
  serviceFormModel: ServiceFormModel
): ServiceDto => ({
  serviceId: serviceFormModel.serviceId,
  id: serviceFormModel.id,
  vehicleDetails: {
    engineCapacity: serviceFormModel.vehicleDetails.engineCapacity || null,
    enginePower: serviceFormModel.vehicleDetails.enginePower || null,
    make: serviceFormModel.vehicleDetails.make,
    mileage: serviceFormModel.vehicleDetails.mileage || null,
    model: serviceFormModel.vehicleDetails.model,
    productionYear: serviceFormModel.vehicleDetails.productionYear,
    registrationNumber: serviceFormModel.vehicleDetails.registrationNumber,
    vinNumber: serviceFormModel.vehicleDetails.vinNumber,
  },
  comments: serviceFormModel.comments,
  dateOfRegistration: serviceFormModel.dateOfRegistration,
  otherInformations: {
    paymentMethod: serviceFormModel.otherInformations.paymentMethod,
    serviceDate: serviceFormModel.otherInformations.serviceDate,
    warrantyTime: serviceFormModel.otherInformations.warrantyTime,
  },
  serviceCosts: {
    costsList: serviceFormModel.serviceCosts.costsList,
    currency: serviceFormModel.serviceCosts.currency,
  },
  serviceDescription: serviceFormModel.serviceDescription,
  serviceDiagnosis: serviceFormModel.serviceDiagnosis,
});
