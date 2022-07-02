import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

export const Container = styled.div`
  height: 1000px;
  /* 
  overflow: scroll;  */
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  max-width: 500px;
  overflow: scroll;
  margin-bottom: 50px;
  padding: 30px auto;
`;
export const RegisterFormElement = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  width: 80%;
  justify-content: center;
  height: 600px;
  /* @media ${props => props.theme.device.tablet} {
  } */
`;
export const SignInFormElement = styled(RegisterFormElement)`
  height: 500px;
`;
export const FormInput = styled.input`
  font-family: inherit;
  font-size: 1.5rem;
  margin-bottom: 10px;
  @media ${props => props.theme.device.tablet} {
    font-size: 1.3rem;
  }
`;
export const InputLabel = styled.label`
  display: flex;
  align-content: center;
  @media ${props => props.theme.device.laptop} {
    font-size: 1rem;
  }
`;
export const SubmitButton = styled.button`
  margin-top: 10px;
  font-size: 1rem;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid purple;
  padding: 5px 10px;
  font-family: inherit;
  transition: background-color 0.3s ease-in;
  color: purple;
  &:hover {
    background-color: purple;
    color: whitesmoke;
  }
`;
export const LinkButton = styled(Link)`
  margin: 10px;
  border: 1px solid lavender;
  background-color: lavender;
  color: purple;
  padding: 5px 10px;
  border-radius: 50px;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: purple;
    color: whitesmoke;
  }
`;
export const Note = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media ${props => props.theme.device.laptop} {
    flex-direction: column;
  }
`;
export const ErrorMessage = styled.span`
  width: 100%;
  text-align: center;
  color: red;
  margin-top: 5px;
`;
export const EyeClose = styled(RiEyeCloseLine)`
  height: fit-content;
  margin: 3px 0 0 3px;
`;
export const EyeOpen = styled(RiEyeLine)`
  height: fit-content;
  margin: 3px 0 0 3px;
`;
