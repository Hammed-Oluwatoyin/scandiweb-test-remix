import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import { connect } from "react-redux";
import { allProductsRequest } from "../../services/graphql-requests";
import ProductCard from "../../components/ProductCard/ProductCard";
import { withRouter } from "react-router-dom";

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

const CategoryPageHeader = styled.h2`
  margin-bottom: 90px;
  margin-top: 80px;
  margin-left: 100px;
  font-size: 42px;
  line-height: 67.2px;
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
    console.log(this.props.history);
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
                          <ProductCard
                            key={product.id}
                            product={product}
                            currentCurrency={this.props.currentCurrency}
                          />
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
                                <ProductCard
                                  history={this.props.history}
                                  key={product.id}
                                  product={product}
                                  currentCurrency={this.props.currentCurrency}
                                />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategoryPage));
