import { Endpoint } from "@/shared/enums";
import { apiRequest } from "@/shared/helpers";
import { Service } from "@/shared/types";

export const getServiceList = async () => {
  try {
    return await apiRequest<Service[]>({
      endpoint: Endpoint.ServiceList,
      method: "get",
    });
  } catch (error) {
    throw new Error(error);
  }
};
