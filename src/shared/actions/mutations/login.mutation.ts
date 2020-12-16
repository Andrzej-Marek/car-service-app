import { LoginDto } from "@/shared/dtos";
import { Endpoint } from "@/shared/enums";
import { apiRequest } from "@/shared/helpers";
import { User } from "@/shared/types";

export const login = async (loginDto: LoginDto) => {
  try {
    return await apiRequest<{ user: User }>({
      endpoint: Endpoint.Login,
      method: "POST",
      data: loginDto,
    });
  } catch (error) {
    throw new Error(error);
  }
};
