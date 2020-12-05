import { Endpoint } from "@/shared/enums";
import { apiRequest } from "@/shared/helpers";

export const me = async () => {
  try {
    return await apiRequest({ endpoint: Endpoint.Me, method: "get" });
  } catch (error) {
    throw new Error(error);
  }
};
