import { Company } from "./company.type";
import { OtherServiceInformations } from "./otherServiceInformations.type";
import { Picture } from "./picture.type";
import { ServiceCost } from "./serviceCost.type";
import { VehicleDetails } from "./vehicleDetails.type";

export interface Service {
  id: number;
  serviceId: string;
  photos: Picture[];
  comments: string | null;
  otherInformations: OtherServiceInformations | null;
  serviceDescription: string;
  serviceDiagnosis: string;
  dateOfRegistration: string | null;
  company: Company;
  serviceCosts: ServiceCost;
  vehicleDetails: VehicleDetails;
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
}
