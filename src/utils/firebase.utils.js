import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promt: "select_account"
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());
  if (!userSnapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        photoURL
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
