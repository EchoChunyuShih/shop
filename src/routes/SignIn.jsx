import React from "react";
import { useState } from "react";
import {
  Container,
  LinkButton,
  Note
} from "../components/shared/FormComponents";
import SignInForm from "../components/sign-in/SignInForm.component";

const SignIn = () => {
  return (
    <>
      <Container>
        <h3>Sign In</h3>
        <SignInForm />
        <Note>
          Don't have an account?
          <LinkButton to="/register">Register NOW</LinkButton>
        </Note>
      </Container>
    </>
  );
};

export default SignIn;
