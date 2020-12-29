import { Service, ServiceFormModel } from "@/shared/types";
import { get } from "lodash";

export const mapServiceToServiceFormModel = (
  service: Service
): ServiceFormModel => ({
  id: service.id,
  serviceId: service.serviceId,
  vehicleDetails: {
    id: service.vehicleDetails.id,
    vinNumber: service.vehicleDetails.vinNumber,
    engineCapacity: service.vehicleDetails.engineCapacity,
    enginePower: service.vehicleDetails.enginePower,
    make: service.vehicleDetails.make,
    mileage: service.vehicleDetails.mileage,
    model: service.vehicleDetails.model,
    productionYear: service.vehicleDetails.productionYear,
    registrationNumber: service.vehicleDetails.registrationNumber,
  },
  serviceDiagnosis: service.serviceDiagnosis,
  serviceDescription: service.serviceDescription,
  comments: service.comments || "",
  dateOfRegistration: service.dateOfRegistration || "",
  otherInformations: {
    paymentMethod: get(service, "otherInformations.paymentMethod", null),
    warrantyTime: get(service, "otherInformations.warrantyTime", null),
  },
  uploadedPhotos: service.photos,
  photos: [],
  serviceCosts: {
    costsList: get(service, "serviceCosts.costsList", []),
    currency: get(service, "serviceCosts.currency", null),
    formFieldCost: {
      taxRate: 23,
      priceNet: 0,
      priceGross: 0,
      quantity: 1,
      title: "",
    },
  },
});
