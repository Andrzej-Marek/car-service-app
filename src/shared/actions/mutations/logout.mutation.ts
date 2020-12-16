import { Endpoint } from "@/shared/enums";
import { apiRequest } from "@/shared/helpers";

export const logout = async () => {
  try {
    return await apiRequest({
      endpoint: Endpoint.Logout,
      method: "post",
    });
  } catch (error) {
    throw new Error(error);
  }
};
