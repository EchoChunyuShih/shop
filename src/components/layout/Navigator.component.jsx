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
    <>
      <Navbar onClick={toggleNavBar} className={navOpen ? "active" : null}>
        <Link to="/">
          {/* <Logo src={RebornSvg} /> */}
          <Logo>Eclectic</Logo>
        </Link>

        <NavItems className={shwoNavItems && "active"}>
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
  left: 10px;
  transform: translateX(-10px);
  height: 3rem;
  border-radius: 0% 0% 60px 0%;
  width: 4rem;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* filter: drop-shadow(0 0 0.75rem crimson); */
  background-color: lavender;
  transition: all 0.5s ease-in-out;
  z-index: 20;
  cursor: pointer;
  &:hover {
    width: 7rem;
    height: 4rem;
  }
  &.active {
    height: 4rem;
    width: 100%;
    border-radius: 0% 0% 60px 60px;
  }
`;
const Logo = styled.div`
  position: inherit;
  /* background-color: #9056ce; */
  font-family: inherit;
  z-index: 20;
  /* margin-top: 20px; */
  margin-left: 15px;
  /* margin: 30px 10px 30px; */
  width: 50px;
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
