import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext, { AuthContextType } from "./AuthContext";
import Account from "../models/Account";
import { createNewAccount, getUserData } from "../services/AccountApiService";

// AuthContextProvider component manages user authentication state and provides it to children components
function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<Account | null>(null);

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
              uid: newUser.uid,
              initalSetUp: true,
            }).then((response) => setAccount(response));
          }

          // console.log(res);
        });
      } else {
        setUser(null);
        setAccount(null);
      }
    });
  }, []);

  const value: AuthContextType = {
    user,
    account,
    setAccount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
