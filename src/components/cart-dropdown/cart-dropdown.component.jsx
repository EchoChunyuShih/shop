import React from "react";
import styled from "styled-components";

import { Button } from "../shared/FormComponents";

const CartDropDown = () => {
  return (
    <DropDownContainer>
      <CartItem />
      <EmptyMessage />
      <Button>Check Out</Button>
    </DropDownContainer>
  );
};

export default CartDropDown;
const DropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
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
const CartItem = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;
