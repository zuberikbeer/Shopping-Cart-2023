import { User } from "firebase/auth";
import { createContext } from "react";
import Account from "../models/Account";

export interface AuthContextType {
  user: User | null;
  account: Account | null;
  setAccount: (account: Account) => void;
}
// Set default values for the authentication context
const defaultValue: AuthContextType = {
  user: null,
  account: null,
  setAccount: () => {},
};

// Create the authentication context with the default values
const AuthContext = createContext<AuthContextType>(defaultValue);

export default AuthContext;
