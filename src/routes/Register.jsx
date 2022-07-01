import React from "react";
import {
  Container,
  LinkButton,
  Note
} from "../components/shared/FormComponents";
import SignUpForm from "../components/sign-up/SignUpForm.component";

const Register = () => {
  return (
    <Container>
      <h3>Register</h3>
      <SignUpForm />
      <Note>
        Already have an account?
        <LinkButton to="/signin">Sign In Now</LinkButton>
      </Note>
    </Container>
  );
};

export default Register;
