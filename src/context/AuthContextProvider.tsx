import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext, { AuthContextType } from "./AuthContext";

// AuthContextProvider component manages user authentication state and provides it to children components
function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Register auth state listener on component mount
    const unsubscribe = auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });

    // Unregister auth state listener on component unmount
    return unsubscribe;
  }, []);

  const value: AuthContextType = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
