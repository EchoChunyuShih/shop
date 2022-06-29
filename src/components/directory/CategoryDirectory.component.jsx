import React from "react";
import styled from "styled-components";
import CategoryItem from "../category/CategoryItem";

const CategoryDirectory = () => {
  const categories = [
    { glasses: "hXg4gGjIfhw" },
    { bowls: "f0DVSMW5Pxg" },
    { plates: "YCPAqurU8dg" },
    { ultensils: "m3jtY6EobzM" },
    { napkins: "pzm3zne5Hes" },
    { "eco-straws": "/9ZUbyjA2Akk" },
    { containers: "P4jRJYN33wE" },
    { containers: "P4jRJYN33wE" },
    { containers: "P4jRJYN33wE" }
  ];
  return (
    <CategoriesContainer>
      {categories.map((category, idx) => (
        <CategoryItem key={idx} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryDirectory;
const CategoriesContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: scroll;
`;
