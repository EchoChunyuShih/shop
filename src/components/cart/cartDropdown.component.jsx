import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../context/cart.context";

import { Button } from "../shared/FormComponents";
import CartItem from "./cartItem.component";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <DropDownContainer>
      {cartItems.length !== 0 ? (
        <CartItems>
          {cartItems.map(item => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </CartItems>
      ) : (
        <EmptyMessage>Empty</EmptyMessage>
      )}

      <Button type="button" disabled>
        Check Out
      </Button>
    </DropDownContainer>
  );
};

export default CartDropDown;
const DropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 48px;
  right: 60px;
  z-index: 30;
  @media ${props => props.theme.device.tablet} {
    top: 320px;
  }
`;
const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;
