import React from "react";
import styled from "styled-components";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <SingleCartItem>
      <Image src={imageUrl} alt={name} />
      <ItemInfo>
        <Title>{name}</Title>
        <ItemDetail>
          <Quantity>{quantity}</Quantity>
          <Price>{quantity * price}</Price>
        </ItemDetail>
      </ItemInfo>
    </SingleCartItem>
  );
};

export default CartItem;
const SingleCartItem = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 10px;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
`;
const Quantity = styled.div`
  align-items: center;
`;
const Title = styled.h4`
  margin: 0;
  display: inline-block;
`;
const Price = styled.div``;
const ItemInfo = styled.div`
  width: max-content;
`;
const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;
