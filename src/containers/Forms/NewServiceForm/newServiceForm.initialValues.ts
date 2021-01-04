import { Currency, MileageUnit, PaymentMethod } from "@/shared/enums";
import { TimeService } from "@/shared/services";
import { ServiceFormModel } from "@/shared/types";

export const newServiceFormInitialValues: ServiceFormModel = {
  vehicleDetails: {
    vinNumber: "",
    engineCapacity: null,
    enginePower: null,
    make: "",
    mileage: { mileage: null, unit: MileageUnit.Km },
    model: "",
    productionYear: null,
    registrationNumber: "",
  },
  comments: "",
  dateOfRegistration: "",
  otherInformations: {
    paymentMethod: PaymentMethod.Cash,
    warrantyTime: null,
    serviceDate: TimeService.now(),
  },
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
  },
  serviceDescription: "",
  serviceDiagnosis: "",
};
