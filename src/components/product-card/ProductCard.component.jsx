import React from "react";
import styled from "styled-components";
import { Button } from "../shared/FormComponents";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <ProductsCard>
      <ProductImage src={imageUrl} alt={name} className="product_img" />
      <HoverTag className="hover_tag">Add To Cart</HoverTag>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
      </ProductInfo>
    </ProductsCard>
  );
};

export default ProductCard;

const ProductsCard = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: fit-content;
  margin: 2rem 5px;
  &:hover {
    .hover_tag {
      /* display: flex; */
      color: purple;
      background-color: lavender;
    }
    .product_img {
      opacity: 0.8;
    }
  }
`;
const ProductImage = styled.img`
  height: 250px;
  width: 200px;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
`;
const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductName = styled.span``;
const ProductPrice = styled.span``;
const HoverTag = styled(Button)`
  /* display: none; */
  margin: 0;
  display: flex;
  align-items: center;
  border: none;
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: fit-content;
  /* width: 100px; */
  background-color: transparent;
  color: transparent;
  font-weight: 300;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &&:hover {
    font-size: large;
    background-color: purple;
    color: whitesmoke;
  }
`;
