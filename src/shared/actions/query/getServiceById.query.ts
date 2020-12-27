import { Endpoint } from "@/shared/enums";
import { apiRequest } from "@/shared/helpers";
import { Service } from "@/shared/types";

export const getServiceById = async (serviceId: string) => {
  try {
    return await apiRequest<Service | null>({
      endpoint: `${Endpoint.GetServiceById}/${serviceId}`,
      method: "get",
    });
  } catch (error) {
    throw new Error(error);
  }
};
