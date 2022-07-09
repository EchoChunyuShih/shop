import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { RiGhostSmileLine } from "react-icons/ri";

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import RebornSvg from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cartIcon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [shwoNavItems, setShwoNavItems] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const toggleNavBar = e => {
    e.preventDefault();
    setNavOpen(!navOpen);
    if (!navOpen) {
      setTimeout(() => setShwoNavItems(true), 500);
    } else {
      setShwoNavItems(false);
    }
  };
  // const toggleDropdown = e => {
  //   console.log("click");
  //   // setDropdownOpen(!dropdownOpen);
  // };
  const toggleHomeLink = () => {
    if (navOpen) {
      navigate("/");
    }
  };
  return (
    <>
      <Navbar onClick={toggleNavBar} className={navOpen ? "active" : null}>
        <Logo
          onClick={navOpen ? toggleHomeLink : null}
          className={navOpen && "logo_style_when_nav_open"}
        />

        <NavItems className={shwoNavItems && "active"}>
          <NavItemLink to="/">
            {/* <RiGhostSmileLine /> */}
            Home
          </NavItemLink>
          <NavItemLink to="/Shop" className={shwoNavItems && "active"}>
            Shop
          </NavItemLink>
          {currentUser ? (
            <NavItemDiv
              onClick={signOutUser}
              className={shwoNavItems && "active"}
            >
              Sign Out
            </NavItemDiv>
          ) : (
            <NavItemLink to="/signin" className={shwoNavItems && "active"}>
              Sign In
            </NavItemLink>
          )}
          <CartIcon
          // onClick={toggleDropdown}
          />
        </NavItems>
        {isCartOpen && <CartDropDown className="when_hover_cartIcon" />}
      </Navbar>
    </>
  );
};

export default Navigation;
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
    width: calc(100vw - 8rem);
    border-radius: 0% 0% 60px 60px;
    padding: 0 4rem 0 4rem;
    justify-content: space-between;
  }
  @media ${props => props.theme.device.tablet} {
    &.active {
      height: 15vh;
      padding: 0;
      width: 100vw;
      border-radius: 0% 0% 60px 60px;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  @media ${props => props.theme.device.mobileL} {
    position: absolute;
    top: calc(100vh - 3rem);
    left: 0;
    border-radius: 0% 60px 0% 0%;
    &:hover {
      top: calc(100vh - 4em);
    }
    &.active {
      height: 30vh;
      top: calc(100vh - 8rem);
      padding: 0;
      width: 100vw;
      border-radius: 60px 60px 0% 0%;
      /* padding: 0 4rem 0 0; */
    }
  }
`;

const Logo = styled(RiGhostSmileLine)`
  margin: 0 10px 10px 0;
  z-index: 20;
  font-size: 1.6rem;
  transition: transform 0.5s ease-in-out;
  ${Navbar}:hover & {
    margin: 0;
    transform: scale(1.3);
  }
  &.logo_style_when_nav_open {
    margin: 0;
    ${Navbar}:hover && {
      transform: none;
    }
  }
  @media ${props => props.theme.device.tablet} {
    margin: 0 10px 10px 0;
    &.logo_style_when_nav_open {
      margin: 1rem 0 0 0;
      ${Navbar}:hover & {
        transform: none;
      }
    }
  }

  @media ${props => props.theme.device.mobileL} {
    margin: 10px 10px 0 0;
  }
`;

const NavItems = styled.div`
  display: none;
  justify-content: end;
  width: 50%;
  max-width: 900px;
  opacity: 0;
  &.active {
    opacity: 0.9;
    display: flex;
  }
  @media ${props => props.theme.device.tablet} {
    width: 90%;
    justify-content: center;
  }
`;
const NavItemDiv = styled.div`
  display: none;
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
  &.active {
    color: purple;
  }
`;
const NavItemLink = styled(Link)`
  color: purple;
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
