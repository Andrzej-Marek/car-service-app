import { Service } from "../service.type";
import { ServiceCostElement } from "../serviceCostElement.type";

export type ServiceFormModel = Omit<
  Service,
  "updatedAt" | "publishedAt" | "createdAt" | "company" | "serviceId"
> & { serviceCosts: { formFieldCost: ServiceCostElement } };
