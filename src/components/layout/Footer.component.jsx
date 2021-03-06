import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Container>Footer</Container>
    </>
  );
};

export default Footer;
const Container = styled.div`
  background-color: lavender;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  border-radius: 60px 60px 0% 0%;
  @media ${props => props.theme.device.mobileL} {
    display: none;
  }
`;
