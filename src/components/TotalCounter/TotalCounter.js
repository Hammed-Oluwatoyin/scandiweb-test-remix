import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import { pricesRequest } from "../../services/graphql-requests";

const TotalCounterContainer = styled.div`
  display: flex;
`;

const CurrencySymbol = styled.h3`
  margin-right: 5px;
`;

class TotalCounter extends Component {
  totalCount = (items) => {
    const { currentCurrency, cartProducts } = this.props;
    const productQuantity = cartProducts.map((product) => product.quantity);

    const prices = items.map(({ prices }) => {
      const currencyPrice = prices.filter((price) => {
        return price.currency.symbol === currentCurrency && price.amount;
      });

      return currencyPrice.reduce((accumulator, price) => {
        return accumulator + price.amount;
      }, 0);
    });
    const total = prices.reduce((acc, item, i) => {
      return acc + item * productQuantity[i];
    }, 0);

    return total;
  };

  render() {
    const { currentCurrency, cartProducts } = this.props;

    return (
      <Query query={pricesRequest()}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;

          const productId = cartProducts.map((product) => {
            return product.id;
          });

          const items = data.category.products.filter((product, i) => {
            return productId.includes(product.id);
          });

          return (
            <TotalCounterContainer>
              <CurrencySymbol>{currentCurrency}</CurrencySymbol>
              <div>{Math.round(this.totalCount(items) * 100) / 100}</div>
            </TotalCounterContainer>
          );
        }}
      </Query>
    );
  }
}

export default TotalCounter;
