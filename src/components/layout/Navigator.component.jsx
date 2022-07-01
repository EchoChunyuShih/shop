import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import RebornSvg from "../../assets/logo.svg";
import { RiGhostSmileLine } from "react-icons/ri";

const Navigator = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [shwoNavItems, setShwoNavItems] = useState(false);
  const toggleNavBar = e => {
    e.preventDefault();
    setNavOpen(!navOpen);
    if (!navOpen) {
      setTimeout(() => setShwoNavItems(true), 500);
    } else {
      setShwoNavItems(false);
    }
  };
  const delay = () => {
    setTimeout(() => {
      return <Logo />;
    }, 2000);
  };
  return (
    <>
      <Navbar onClick={toggleNavBar} className={navOpen ? "active" : null}>
        {!navOpen && <Logo />}
        <NavItems className={shwoNavItems && "active"}>
          <NavItem to="/">
            <RiGhostSmileLine />
            Home
          </NavItem>
          <NavItem to="/Shop">Shop</NavItem>
          <NavItem to="/cart">Cart</NavItem>
          <NavItem to="/signin">Sign In</NavItem>
        </NavItems>
      </Navbar>
    </>
  );
};

export default Navigator;
const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 3rem;
  width: 3rem;
  border-radius: 0% 0% 60px 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lavender;
  transition: all 0.5s ease-in-out;
  z-index: 20;
  cursor: pointer;
  &:hover {
    width: 4rem;
    height: 4rem;
  }
  &.active {
    height: 3rem;
    width: 100%;
    border-radius: 0% 0% 60px 60px;
  }
  @media ${props => props.theme.device.tablet} {
    &.active {
      height: 15vh;
      width: 100%;
      border-radius: 0% 0% 60px 60px;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;
const Logo = styled(RiGhostSmileLine)`
  position: absolute;
  top: 8px;
  left: 5px;
  z-index: 20;
  font-size: 1.6rem;
  transition: transform 0.5s ease-in-out;
  ${Navbar}:hover & {
    transform: scale(1.3) translate(25%, 25%);
  }
`;
const NavItems = styled.div`
  opacity: 0;
  width: 80%;
  max-width: 900px;
  &.active {
    display: flex;
    justify-content: space-evenly;
    transition: all 0.5s ease-in-out;
    opacity: 0.9;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 30px;
  padding: 2px 10px;
  margin: 0 15px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: white;
    opacity: 0.8;
  }
`;
