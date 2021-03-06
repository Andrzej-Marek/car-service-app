import { ServiceDto } from "@/shared/dtos";
import { Endpoint } from "@/shared/enums";
import { apiRequest } from "@/shared/helpers";

export const createNewService = async (
  serviceDto: ServiceDto
): Promise<ServiceDto> => {
  try {
    const serverResponse = await apiRequest<ServiceDto>({
      endpoint: Endpoint.NewService,
      data: serviceDto,
      method: "post",
    });
    return serverResponse.data;
  } catch (error) {
    throw new Error(error);
  }
};
