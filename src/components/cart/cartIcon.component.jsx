import React, { useContext, useEffect, useRef } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import styled from "styled-components";
import { CartContext } from "../../context/cart.context";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const handleOpenCartOnHoverIcon = () => {
    setIsCartOpen(true);
  };
  const handleClickOutside = () => {
    setIsCartOpen(false);
  };
  const ref = useOutsideClick(handleClickOutside);
  return (
    <CartIconContainer
      ref={ref}
      onMouseEnter={handleOpenCartOnHoverIcon}
      // onMouseLeave={toggleIsCartOpen}
    >
      <ShoppingCartIcon />
      <ItemCount>0</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
const CartIconContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
`;
const ShoppingCartIcon = styled(RiShoppingBagLine)`
  width: 24px;
  height: 24px;
`;
const ItemCount = styled.span`
  position: absolute;
  /* z-index: 2; */
  left: 44%;
  top: 43%;
  /* transform: translate(50%, 50%); */
  font-size: 10px;
  /* color: red; */
`;
