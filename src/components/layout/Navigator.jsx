import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import RebornSvg from "../../assets/logo.svg";
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
  return (
    <Navbar onClick={toggleNavBar} className={navOpen ? "active" : null}>
      <Logo to="/">
        Logo
        {/* <img src={RebornSvg} alt="logo" width="100px" fill="#eee" /> */}
      </Logo>

      <NavItems className={shwoNavItems && "active"}>
        <NavItem to="/login">Login</NavItem>
        <NavItem to="/cart">Cart</NavItem>

        {/* <NavItem>Cart</NavItem> */}
      </NavItems>
    </Navbar>
  );
};

export default Navigator;
const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateX(-10px);
  height: 2rem;
  border-radius: 0% 0% 60px 60px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* filter: drop-shadow(0 0 0.75rem crimson); */
  background-color: lavender;
  transition: all 0.5s ease-in-out;
  z-index: 20;
  cursor: pointer;
  &.active {
    height: 4rem;
    width: 100%;
  }
`;
const Logo = styled(Link)`
  position: inherit;
  background-color: pink;
  font-family: inherit;
  z-index: 20;
`;
const NavItems = styled.div`
  opacity: 0;
  width: 80%;
  &.active {
    display: flex;
    justify-content: space-around;
    transition: all 0.5s ease-in-out;
    opacity: 0.9;
  }
`;
const NavItem = styled(NavLink)`
  background-color: transparent;
  border: none;
  border-radius: 30px;
  padding: 2px 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: white;
    opacity: 0.8;
  }
`;
