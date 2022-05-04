import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6L2326qsgZGHHn1jkLE48bss4QVGbcPw",
  authDomain: "crown-db-905a5.firebaseapp.com",
  projectId: "crown-db-905a5",
  storageBucket: "crown-db-905a5.appspot.com",
  messagingSenderId: "148995845365",
  appId: "1:148995845365:web:5a5b91b68b3a9ed34fe9bc",
  measurementId: "G-ZG863K2654",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
        console.log("user error",error);
    }
  }
  return userDocRef;
};
