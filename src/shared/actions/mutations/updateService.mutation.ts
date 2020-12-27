import { ServiceDto } from "@/shared/dtos";
import { Endpoint } from "@/shared/enums";
import { apiRequest } from "@/shared/helpers";

interface UpdateServiceArgs {
  serviceDto: ServiceDto;
  serviceId: number;
}
export const updateService = async ({
  serviceDto,
  serviceId,
}: UpdateServiceArgs): Promise<ServiceDto> => {
  try {
    const serverResponse = await apiRequest<ServiceDto>({
      endpoint: `${Endpoint.UpdateService}/${serviceId}`,
      data: serviceDto,
      method: "put",
    });
    return serverResponse.data;
  } catch (error) {
    throw new Error(error);
  }
};
