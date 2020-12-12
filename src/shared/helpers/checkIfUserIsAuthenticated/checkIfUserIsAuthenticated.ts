import { Role } from "@/shared/enums";
import { User } from "@/shared/types";

export const checkIfUserIsAuthenticated = (user: User | null) => {
  if (!user) {
    return false;
  }

  return user.role.type === Role.Authenticated;
};
