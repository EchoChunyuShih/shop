import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 85%;
  max-width: 1000px;
  display: grid;
  place-items: center;
  overflow: scroll;
  margin: 40px auto 4.5rem;
`;
export const RegisterFormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: inherit;
  justify-content: center;
  height: fit-content;
  @media ${props => props.theme.device.tablet} {
    /* width: 100%; */
  }
`;
export const SignInFormElement = styled(RegisterFormElement)``;
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
export const Button = styled.button`
  margin-top: 10px;
  font-size: 1rem;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid purple;
  padding: 5px 10px;
  font-family: inherit;
  transition: background-color 0.3s ease-in;
  color: ${props => props.theme.colors.purple};
  &:hover {
    background-color: ${props => props.theme.colors.purple};
    color: whitesmoke;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: lavender;
    color: ${props => props.theme.colors.purple};
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
    background-color: ${props => props.theme.colors.purple};
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
