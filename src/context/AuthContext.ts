import { createContext } from "react";
import { User } from "firebase/auth";
import Account from "../models/Account";
// Define the structure of the authentication context
export interface AuthContextType {
  account: Account | null; // Holds the custom account or null when not logged in
  user: User | null; // Holds the Firebase user or null when not logged in
  setAccount: (account: Account) => void; // Function to update the custom account
}

// Set default values for the authentication context
const defaultValue: AuthContextType = {
  account: null,
  user: null,
  setAccount: () => {},
};

// Create the authentication context with the default values
const AuthContext = createContext<AuthContextType>(defaultValue);

export default AuthContext;
