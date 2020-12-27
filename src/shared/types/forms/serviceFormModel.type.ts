import { OtherServiceInformations } from "../otherServiceInformations.type";
import { ServiceCost } from "../serviceCost.type";
import { ServiceCostElement } from "../serviceCostElement.type";
import { VehicleDetails } from "../vehicleDetails.type";

export interface ServiceFormModel {
  id?: number;
  serviceId?: string;
  vehicleDetails: VehicleDetails;
  comments: string;
  dateOfRegistration: string;
  otherInformations: OtherServiceInformations;
  photos: File[];
  serviceCosts: ServiceCost & { formFieldCost: ServiceCostElement };
  serviceDescription: string;
  serviceDiagnosis: string;
}
