import { addItemToCart } from "./cart-utils";
import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Product {
    quantity: Int
  }

  extend type Mutation {
    AddItemToCart(product: Product!): [Product]!
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const resolvers = {
  Mutation: {
    addItemToCart: (_root, { product }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = addItemToCart(cartItems, product);

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems },
      });

      return newCartItems;
    },
  },
};
