import { User } from "firebase/auth";
import { createContext } from "react";

// Define the structure of the authentication context
export interface AuthContextType {
  user: User | null; // Holds the authenticated user or null when not logged in
}

// Set default values for the authentication context
const defaultValue: AuthContextType = {
  user: null,
};

// Create the authentication context with the default values
const AuthContext = createContext<AuthContextType>(defaultValue);

export default AuthContext;
