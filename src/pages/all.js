import React, { Component } from "react";
import PageLayout from "../components/PageLayout";
import {
  CategoryName,
  CategoryContainer,
  ProductWrapper,
} from "../GlobalStyles";
import { default as ProductContainer } from "../components/product/product.container";

class All extends Component {
  render() {
    const [clothes, tech] = this.props.responseData.data.categories;
    console.log(this.props.responseData.data.categories);
    console.log(clothes, tech);
    return (
      <div>
        <PageLayout>
          <CategoryContainer>
            <CategoryName>All</CategoryName>
            <ProductWrapper>
              {clothes.products.map((product) => (
                <ProductContainer key={product.name} product={product} />
              ))}
            </ProductWrapper>
            <ProductWrapper>
              {tech.products.map((product) => (
                <ProductContainer key={product.name} product={product} />
              ))}
            </ProductWrapper>
          </CategoryContainer>
        </PageLayout>
      </div>
    );
  }
}

export default All;
