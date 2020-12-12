import { Role } from "../enums";
import { Company } from "./company.type";

export interface User {
  id: number;
  role: {
    type: Role;
  };
  provider: string; // TODO: ADD PROVIDER TYPE
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  company: Company;
  created_at: Date;
  updated_at: Date;
}
