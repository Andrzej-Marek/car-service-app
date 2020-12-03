import { ServiceCostField } from "../enums";
import { ServiceCostElement } from "../types";

export const calculateServiceCost = (
  serviceCostElement: ServiceCostElement,
  changedField: ServiceCostField
): ServiceCostElement => {
  let initialValue = { ...serviceCostElement };

  const config = {
    priceNet: () =>
      changedPriceNetFieldHandler(initialValue, serviceCostElement),
    taxRate: () => changedTaxRateFieldHandler(initialValue, serviceCostElement),
    priceGross: () =>
      changedPriceGrossFieldHandler(initialValue, serviceCostElement),
  };

  return config[changedField]();
};

const changedPriceNetFieldHandler = (
  initialValues: ServiceCostElement,
  serviceCostElement: ServiceCostElement
): ServiceCostElement => {
  if (serviceCostElement.taxRate === 0) {
    initialValues.priceGross = +serviceCostElement.priceNet.toFixed(2);
  } else {
    initialValues.priceGross = +(
      calculateTaxRatePercent(serviceCostElement.taxRate) *
      serviceCostElement.priceNet
    ).toFixed(2);
  }

  return initialValues;
};

const changedTaxRateFieldHandler = (
  initialValues: ServiceCostElement,
  serviceCostElement: ServiceCostElement
): ServiceCostElement => {
  if (serviceCostElement.priceNet) {
    initialValues.priceGross = +(
      calculateTaxRatePercent(serviceCostElement.taxRate) *
      serviceCostElement.priceNet
    ).toFixed(2);
  }

  return initialValues;
};

const changedPriceGrossFieldHandler = (
  initialValues: ServiceCostElement,
  serviceCostElement: ServiceCostElement
): ServiceCostElement => {
  if (serviceCostElement.taxRate === 0) {
    initialValues.priceNet = +serviceCostElement.priceGross.toFixed(2);
  } else {
    initialValues.priceNet = +(
      serviceCostElement.priceGross /
      calculateTaxRatePercent(serviceCostElement.taxRate)
    ).toFixed(2);
  }

  return initialValues;
};

const calculateTaxRatePercent = (taxRate: number) => {
  if (taxRate === 0) {
    return 1;
  }

  return taxRate / 100 + 1;
};
