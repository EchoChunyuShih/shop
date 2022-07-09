import React, { useContext } from "react";
import styled from "styled-components";
import ProductCard from "../../components/product-card/ProductCard.component";
import { Container } from "../../components/shared/FormComponents";
import { ProductsContext } from "../../context/product.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <ProductContainer>
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ProductContainer>
  );
};

export default Shop;
const ProductContainer = styled(Container)`
  width: 90%;
  display: grid;
  --auto-grid-min-size: 200px;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
`;
