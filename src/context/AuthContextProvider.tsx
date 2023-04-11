import { ReactNode, useEffect, useState } from "react";
import AuthContext, { AuthContextType } from "./AuthContext";
import Account from "../models/Account";
import {
  createNewAccount,
  getUserData,
  signIn,
} from "../services/AccountApiService";

// AuthContextProvider component manages user authentication state and provides it to children components
function AuthContextProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      setAccount(JSON.parse(storedAccount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
  }, [account]);

  const login = async (email: string, password: string) => {
    try {
      const accountToLogin: Account = {
        email,
        password,
      };
      const loggedInAccount = await signIn(accountToLogin);
      console.log("Logged in account:", loggedInAccount);
      setAccount(loggedInAccount);
      localStorage.setItem("account", JSON.stringify(loggedInAccount));
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setAccount(null);
    localStorage.removeItem("account");
  };

  const value: AuthContextType = {
    account,
    setAccount,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
