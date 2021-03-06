import { gql } from "apollo-boost";

const allProductsRequest = () => gql`
  query {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

const productsCategoriesRequest = () => gql`
  query {
    categories {
      name
      products {
        id
        attributes {
          name
        }
        name
        inStock
        gallery
        prices {
          currency
          amount
        }
      }
    }
  }
`;
const categoriesNameRequest = () => gql`
  query {
    category {
      name
    }
    categories {
      name
    }
  }
`;
const productAttributesRequest = (itemName) => gql`
                query {
                  product(id: "${itemName}") {            
                    name            
                    gallery
                    prices {
                      amount
                      currency{label}
                    }
                  }
                }
              `;

const currenciesRequest = () => gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

const pricesRequest = () => gql`
  query {
    category {
      products {
        id
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;
const productRequest = (productId) => gql`
        query {
          product( id: "${productId}") {
            name
            inStock
            gallery
            description
            category
            attributes {
              
              name
              items {
                id
                value
                displayValue
              }
            }
            prices {
              amount
              currency{
                label
              }
            }
            brand
          }
        }
      `;

export {
  allProductsRequest,
  productsCategoriesRequest,
  categoriesNameRequest,
  productAttributesRequest,
  currenciesRequest,
  pricesRequest,
  productRequest,
};
