import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import { allProductsRequest } from "../../services/graphql-requests";
import Backdrop from "../Backdrop/Backdrop";

const CategoryPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

class CategoryPage extends Component {
  render() {
    return (
      <Query query={allProductsRequest()}>
        {({ loading, data, error }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <p>Error : </p>;
          console.log(data);
          return (
            <CategoryPageWrapper>
              <Backdrop />
              hammed
            </CategoryPageWrapper>
          );
        }}
      </Query>
    );
  }
}

export default CategoryPage;
