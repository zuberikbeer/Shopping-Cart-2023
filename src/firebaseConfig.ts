import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOtdFAOAu8xcRQHQKTR6rDNJh8GxkNK_w",
  authDomain: "react-ts-shopping-cart-2023.firebaseapp.com",
  projectId: "react-ts-shopping-cart-2023",
  storageBucket: "react-ts-shopping-cart-2023.appspot.com",
  messagingSenderId: "435896454349",
  appId: "1:435896454349:web:7a0a11aaacad702fe66d84",
};

//Initialize FireBase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authoProvider = new GoogleAuthProvider();

//Sign-In and Sign-Out Functions

export function signInWithGoogle(): void {
  signInWithPopup(auth, authoProvider);
}

export function signOut(): void {
  auth.signOut();
}
