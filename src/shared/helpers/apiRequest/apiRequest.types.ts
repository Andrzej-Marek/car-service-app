import { Endpoint } from "@/shared/enums";
import { Method } from "axios";

export interface ApiRequestArgs {
  endpoint: Endpoint | string;
  method: Method;
  data?: any;
}
