import React, { Component } from "react";
import PageLayout from "../components/PageLayout";
import { withRouter } from "react-router-dom";
import {
  CategoryName,
  CategoryContainer,
  ProductWrapper,
} from "../GlobalStyles";
import { default as ProductContainer } from "../components/product/product.container";
// import ProductDisplay from "./product-display-cloth";

class Clothing extends Component {
  render() {
    const { name, products } = this.props.responseData.data.category;

    return (
      <PageLayout>
        <CategoryContainer>
          <CategoryName>{name}</CategoryName>
          <ProductWrapper>
            {products.map((product) => (
              <ProductContainer key={product.id} product={product} />
            ))}
          </ProductWrapper>
        </CategoryContainer>
      </PageLayout>
    );
  }
}

export default withRouter(Clothing);
