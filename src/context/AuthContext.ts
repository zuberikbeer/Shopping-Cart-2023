import { createContext } from "react";

import Account from "../models/Account";
// Define the structure of the authentication context
export interface AuthContextType {
  account: Account | null;
  setAccount: (account: Account) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}
// Set default values for the authentication context
const defaultValue: AuthContextType = {
  account: null,
  login: () => {},
  logout: () => {},
  setAccount: () => {},
};

// Create the authentication context with the default values
const AuthContext = createContext<AuthContextType>(defaultValue);

export default AuthContext;
