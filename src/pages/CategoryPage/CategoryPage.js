import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import { allProductsRequest } from "../../services/graphql-requests";

const CategoryPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

class CategoryPage extends Component {
  render() {
    console.log(this.props.match.url);
    return (
      <Query query={allProductsRequest()}>
        {({ loading, data, error }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <p>Error : </p>;
          const { categories } = data;
          console.log(categories);
          return (
            <CategoryPageWrapper>
              {`/` === this.props.match.url && <h2>{categories[0].name}</h2>}

              {categories.map((item) => {
                console.log(item);
                return `/${item.name}` === this.props.match.url ? (
                  <h2>{item.name}</h2>
                ) : null;
              })}
            </CategoryPageWrapper>
          );
        }}
      </Query>
    );
  }
}

export default CategoryPage;
