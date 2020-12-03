import { Currency, PaymentMethod, PriceVariant } from "@/shared/enums";

interface CostElement {
  taxRate: number | null;
  priceNet: number | null;
  priceGross: number | null;
  quantity: number | null;
  title: string;
}
export interface ServiceFormModel {
  vehicleDetails: {
    vinNumber: string;
    engineCapacity: null;
    enginePower: null;
    make: string;
    mileage: { mileage: string; unit: string };
    model: string;
    productionYear: string;
    registrationNumber: string;
  };
  comments: string;
  dateOfRegistration: string;
  otherInformations: {
    paymentMethod: PaymentMethod | null;
    warrantyTime: string | null;
  };
  photos: File[];
  serviceCosts: {
    costsList: CostElement[];
    formFieldCost: CostElement;
    currency: Currency;
    priceVariant: PriceVariant;
  };
  serviceDescription: string;
  serviceDiagnosis: string;
}
