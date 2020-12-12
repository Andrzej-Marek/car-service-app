import { Endpoint } from "@/shared/enums";
import { apiRequest } from "@/shared/helpers";
import { User } from "@/shared/types";

export const me = async () => {
  try {
    return await apiRequest<{ user: User }>({
      endpoint: Endpoint.Me,
      method: "get",
    });
  } catch (error) {
    throw new Error(error);
  }
};
