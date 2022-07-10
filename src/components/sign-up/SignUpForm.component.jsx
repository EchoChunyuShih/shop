import React, { useState } from "react";
import {
  FormInput,
  InputLabel,
  Button,
  ErrorMessage,
  EyeOpen,
  EyeClose,
  RegisterFormElement
} from "../shared/FormComponents";
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase.utils";
const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFieldChange = e => {
    e.preventDefault();
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrMsg("passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setErrMsg("Email already exist");
      }
      console.log("error when creating a user", err);
    }
  };
  return (
    <RegisterFormElement onSubmit={handleSubmit}>
      <InputLabel htmlFor="displayName">Name</InputLabel>
      <FormInput
        type="text"
        name="displayName"
        id="displayName"
        required
        value={displayName}
        onChange={handleFieldChange}
      />
      <InputLabel htmlFor="email">Email</InputLabel>
      <FormInput
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleFieldChange}
        required
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
        required
      />
      <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
      <FormInput
        name="confirmPassword"
        type={showPassword ? "text" : "password"}
        id="confirmPassword"
        value={confirmPassword}
        onChange={handleFieldChange}
        required
      />
      <ErrorMessage>{errMsg}</ErrorMessage>
      <Button type="submit">Sign Me Up!</Button>
    </RegisterFormElement>
  );
};

export default SignUpForm;
