import {
  OtherServiceInformations,
  ServiceCost,
  VehicleDetails,
} from "../types";

export interface ServiceDto {
  vehicleDetails: VehicleDetails;
  comments: string;
  dateOfRegistration: string;
  otherInformations: OtherServiceInformations;
  // photos: File[];
  serviceCosts: ServiceCost;
  serviceDescription: string;
  serviceDiagnosis: string;
}
