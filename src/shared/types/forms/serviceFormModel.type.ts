import { OtherServiceInformations } from "../otherServiceInformations.type";
import { ServiceCost } from "../serviceCost.type";
import { VehicleDetails } from "../vehicleDetails.type";

interface CostElement {
  taxRate: number | null;
  priceNet: number | null;
  priceGross: number | null;
  quantity: number | null;
  title: string;
}
export interface ServiceFormModel {
  vehicleDetails: VehicleDetails;
  comments: string;
  dateOfRegistration: string;
  otherInformations: OtherServiceInformations;
  photos: File[];
  serviceCosts: ServiceCost & { formFieldCost: CostElement };
  serviceDescription: string;
  serviceDiagnosis: string;
}
