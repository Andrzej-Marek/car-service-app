import { ServiceDto } from "@/shared/dtos";
import { Endpoint } from "@/shared/enums";
import { apiRequest } from "@/shared/helpers";

export const createNewService = async (serviceDto: ServiceDto) => {
  try {
    return await apiRequest<ServiceDto>({
      endpoint: Endpoint.NewService,
      data: serviceDto,
      method: "post",
    });
  } catch (error) {
    throw new Error(error);
  }
};
