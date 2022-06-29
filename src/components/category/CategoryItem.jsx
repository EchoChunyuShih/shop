import React from "react";
import styled from "styled-components";

const CategoryItem = ({ category }) => {
  return (
    <CategoryContainer>
      <CardImage
        className="background_img"
        src={`https://source.unsplash.com/${Object.values(category)}`}
      />
      <CategoryCard>
        <CardTitle>{Object.keys(category)}</CardTitle>
        <CardSubTitle>Shop Now</CardSubTitle>
      </CategoryCard>
    </CategoryContainer>
  );
};

export default CategoryItem;
const CategoryContainer = styled.div`
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
  margin: 0px 7.5px 15px;
  overflow: hidden;
  /* box-shadow: 0 0 10px 0.5px rgba(0, 0, 0, 0.2); */
  &:hover {
    cursor: pointer;
    .background_img {
      transform: scale(1.05);
      transition: transform 0.6s ease-in-out;
    }
  }
`;

const CardImage = styled.img`
  background-image: url(${props => props.bgImg});
  background-size: contain;
  background-position: center;
  min-width: 30%;
  width: 100%;
  height: 240px;
  object-fit: cover;
`;
const CategoryCard = styled.div`
  height: 240px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green; */
  background-color: white;
  /* opacity: 0.7; */
  /* z-index: 2; */
  /* position: relative; */
  &:hover {
    /* opacity: 0;
    .backgroung_img {
      transform: scale(1.1);
      transition: all 0.6s ease-in-out;
    } */
  }
`;
const CardTitle = styled.h2`
  text-transform: capitalize;
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`;
const CardSubTitle = styled.p`
  font-weight: lighter;
  font-size: 16px;
  margin: 0px;
`;
