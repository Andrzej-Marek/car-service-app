import { ENV } from "@/shared/constants";
import axios, { AxiosPromise } from "axios";
import { toCamel, toSnake } from "convert-keys";
import { ApiRequestArgs } from "./apiRequest.types";

export const apiRequest = async <T>({
  endpoint,
  method,
  data,
}: ApiRequestArgs): Promise<AxiosPromise<T>> => {
  const apiUrl = `${ENV.BACKEND_URL}${endpoint}`;

  const request = await axios({
    method,
    data: data && toSnake(data),
    url: apiUrl,
    withCredentials: true,
  });

  return toCamel(request);
};

export default apiRequest;
