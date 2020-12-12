import {
  OtherServiceInformations,
  ServiceCost,
  VehicleDetails,
} from "../types";

export interface ServiceDto {
  id?: string;
  serviceId?: string;
  vehicleDetails: VehicleDetails;
  comments: string;
  dateOfRegistration: string;
  otherInformations: OtherServiceInformations;
  serviceCosts: ServiceCost;
  serviceDescription: string;
  serviceDiagnosis: string;
}
