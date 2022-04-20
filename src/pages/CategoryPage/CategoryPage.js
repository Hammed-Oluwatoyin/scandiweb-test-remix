import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import { connect } from "react-redux";
import { allProductsRequest } from "../../services/graphql-requests";
import { ReactComponent as CircleIcon } from "../../assets/circle-icon.svg";

const CategoryPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CategoryHeaderAndListWrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  width: 90%;
  height: 100%;
`;

export const StyledCircleIcon = styled.div`
  position: relative;
  left: 300px;
  bottom: 100px;
  display: none;
`;

const OutOfStock = styled.div`
  position: relative;
  z-index: 1;
  top: 50%;
  left: 75%;
  font-size: 24px;
  font-weight: bold;
  opacity: 0.3;
  transform: translate(-50%, -50%);
`;

const Card = styled.div`
  width: 386px;
  height: 470px;
  margin-bottom: 30px;
  &:hover {
    ${StyledCircleIcon} {
      display: flex;
    }
    box-shadow: 2px 1px 10px 2px rgba(0, 0, 0, 0.75);
  }
`;

const ProductImage = styled.img`
  background-color: black;
  display: block;
  width: 354px;
  height: 330px;
  object-fit: cover;
  margin: 15px auto;
  opacity: ${(p) => (p.instock ? 1 : 0.5)};
`;

const ProductBrandAndName = styled.h2`
  margin-left: 14.5px;
  margin-top: 14.5px;
`;

const ProductPrice = styled.h2`
  margin-left: 14.5px;
  margin-top: 14.5px;
`;

const CategoryPageHeader = styled.h2`
  margin-bottom: 90px;
  margin-top: 80px;
`;

const CardListWrapper = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CategoryContainer = styled.div``;

class CategoryPage extends Component {
  render() {
    return (
      <Query query={allProductsRequest()}>
        {({ loading, data, error }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <p>Error : </p>;
          const { categories } = data;

          return (
            <CategoryPageWrapper>
              <CategoryHeaderAndListWrapper>
                {`/` === this.props.match.url ? (
                  <CategoryContainer>
                    <CategoryPageHeader>
                      {categories[0].name}
                    </CategoryPageHeader>

                    <CardListWrapper>
                      {categories[0].products.map((product) => {
                        return (
                          <Card key={product.id}>
                            {!product.inStock && (
                              <OutOfStock>OUT OF STOCK</OutOfStock>
                            )}
                            <ProductImage
                              src={product.gallery[0]}
                              instock={product.inStock}
                            />
                            <ProductBrandAndName>
                              {product.name} {product.brand}
                            </ProductBrandAndName>
                            <ProductPrice>
                              {
                                product.prices.filter(
                                  (price) =>
                                    price.currency.label ===
                                    this.props.currentCurrency
                                )[0].currency.symbol
                              }

                              {
                                product.prices.filter(
                                  (price) =>
                                    price.currency.label ===
                                    this.props.currentCurrency
                                )[0].amount
                              }
                            </ProductPrice>
                            {product.inStock ? (
                              <StyledCircleIcon>
                                <CircleIcon
                                  instock={product.inStock.toString()}
                                />
                              </StyledCircleIcon>
                            ) : null}
                          </Card>
                        );
                      })}
                    </CardListWrapper>
                  </CategoryContainer>
                ) : (
                  <>
                    {categories.map((category) => {
                      return `/${category.name}` === this.props.match.url ? (
                        <CategoryContainer key={category.name}>
                          <CategoryPageHeader>
                            {category.name}
                          </CategoryPageHeader>
                          <CardListWrapper>
                            {category.products.map((product) => {
                              return (
                                <Card key={product.id}>
                                  {!product.inStock && (
                                    <OutOfStock>OUT OF STOCK</OutOfStock>
                                  )}
                                  <ProductImage
                                    src={product.gallery[0]}
                                    instock={product.inStock}
                                  />
                                  <ProductBrandAndName>
                                    {product.brand} {product.name}
                                  </ProductBrandAndName>
                                  <ProductPrice>
                                    {
                                      product.prices.filter(
                                        (price) =>
                                          price.currency.label ===
                                          this.props.currentCurrency
                                      )[0].currency.symbol
                                    }{" "}
                                    {
                                      product.prices.filter(
                                        (price) =>
                                          price.currency.label ===
                                          this.props.currentCurrency
                                      )[0].amount
                                    }
                                  </ProductPrice>
                                  {product.inStock ? (
                                    <StyledCircleIcon>
                                      <CircleIcon
                                        instock={product.inStock.toString()}
                                      />
                                    </StyledCircleIcon>
                                  ) : null}
                                </Card>
                              );
                            })}
                          </CardListWrapper>
                        </CategoryContainer>
                      ) : null;
                    })}
                  </>
                )}
              </CategoryHeaderAndListWrapper>
            </CategoryPageWrapper>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCurrency: state.currencyReducer.currentCurrency,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
