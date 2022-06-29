import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h3>sign in</h3>
      <button onClick={logGoogleUser}>Sign In With Google PopUp</button>
    </>
  );
};

export default SignIn;
