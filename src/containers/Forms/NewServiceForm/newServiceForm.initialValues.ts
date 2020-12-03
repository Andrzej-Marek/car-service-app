import {
  Currency,
  MileageUnit,
  PaymentMethod,
  PriceVariant,
} from "@/shared/enums";
import { ServiceFormModel } from "@/shared/types";

export const newServiceFormInitialValues: ServiceFormModel = {
  vehicleDetails: {
    vinNumber: "",
    engineCapacity: null,
    enginePower: null,
    make: "",
    mileage: { mileage: "", unit: MileageUnit.Km },
    model: "",
    productionYear: "",
    registrationNumber: "",
  },
  comments: "",
  dateOfRegistration: "",
  otherInformations: { paymentMethod: null, warrantyTime: null },
  photos: [],
  serviceCosts: {
    costsList: [],
    formFieldCost: {
      taxRate: 23,
      priceNet: 0,
      priceGross: 0,
      quantity: 1,
      title: "",
    },
    currency: Currency.PLN,
    priceVariant: PriceVariant.Gross,
  },
  serviceDescription: "",
  serviceDiagnosis: "",
};
