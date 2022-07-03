import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup
  // signInWithGoogleRedirect
} from "../../utils/firebase.utils";
import {
  ErrorMessage,
  EyeClose,
  EyeOpen,
  FormInput,
  InputLabel,
  SignInFormElement,
  SubmitButton
} from "../shared/FormComponents";
import { FcGoogle } from "react-icons/fc";

const initialFormFields = {
  email: "",
  password: ""
};
const SignInForm = () => {
  const [formField, setFormField] = useState(initialFormFields);
  const { email, password } = formField;
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const signInGoogleRedirect = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) createUserDocumentFromAuth(response.user);
  //   };
  //   signInGoogleRedirect();
  // }, []);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };
  const handleFieldChange = e => {
    e.preventDefault();
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };
  const handleFormChange = e => {
    setErrMsg("");
  };
  const handleSignIn = async e => {
    e.preventDefault();
    try {
      const res = await signInAuthWithEmailAndPassword(email, password);
      console.log("sign in success");
      navigate("/");
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setErrMsg("Oops! User not found");
          break;
        case "auth/wrong-password":
          setErrMsg("Oops! incorrect Email or password");
          break;
        default:
          console.log("error when signing in", err);
          break;
      }
    }
  };
  return (
    <>
      <SignInFormElement onSubmit={handleSignIn} onChange={handleFormChange}>
        <InputLabel htmlFor="name">Email</InputLabel>
        <FormInput
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleFieldChange}
        />
        <InputLabel htmlFor="password">
          Password
          {showPassword ? (
            <EyeOpen onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <EyeClose onClick={() => setShowPassword(!showPassword)} />
          )}
        </InputLabel>
        <FormInput
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={handleFieldChange}
        />
        <ErrorMessage>{errMsg}</ErrorMessage>
        <SubmitButton type="submit">Sign Me In!</SubmitButton>
      </SignInFormElement>
      <LineBreaks>
        <LineBreak /> OR <LineBreak />
      </LineBreaks>
      <MediaButton onClick={signInWithGoogle}>
        <FcGoogle fontSize={30} />
      </MediaButton>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
    </>
  );
};

export default SignInForm;

const LineBreaks = styled.div`
  display: flex;
  margin: 15px auto;
  align-items: center;
  width: 70%;
  justify-content: space-evenly;
  color: gray;
`;
const LineBreak = styled.div`
  display: inline-flex;
  width: 30%;
  border-top: 1px solid gray;
`;
const MediaButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border: none;
  border-radius: 40px;
  background-color: #f4dcf5;
  cursor: pointer;
`;
