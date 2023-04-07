import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import AuthContext, { AuthContextType } from "./AuthContext";
import Account from "../models/Account";
import { createNewAccount, getUserData } from "../services/AccountApiService";
import { User } from "firebase/auth";

// AuthContextProvider component manages user authentication state and provides it to children components
function AuthContextProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged((newUser) => {
      if (newUser) {
        setUser(newUser);
        getUserData(newUser.uid).then((res) => {
          if (res) {
            setAccount(res);
          } else {
            createNewAccount({
              profilePic: newUser.photoURL || "",
              userName: newUser.displayName || "",
              email: newUser.email || "",
              initalSetUp: true,
            }).then((response) => setAccount(response));
          }

          console.log(res);
        });
      } else {
        setUser(null);
        setAccount(null);
      }
    });
  }, []);

  const value: AuthContextType = {
    account,
    user,
    setAccount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
