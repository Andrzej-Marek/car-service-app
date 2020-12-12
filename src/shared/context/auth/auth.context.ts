import { User } from "@/shared/types";
import { createContext, useContext } from "react";

export interface AuthContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: (user) => console.log("USER", user),
});

export const useAuthContext = () => useContext(AuthContext);
