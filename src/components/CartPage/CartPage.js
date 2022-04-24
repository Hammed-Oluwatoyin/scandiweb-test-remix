import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import {
  allProductsRequest,
  pricesRequest,
} from "../../services/graphql-requests";

const Fawza = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 200px;
`;

class CartPage extends Component {
  render() {
    return (
      <Query query={allProductsRequest()}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;

          console.log(data);
          return <Fawza>hammed</Fawza>;
        }}
      </Query>
    );
  }
}

export default CartPage;
