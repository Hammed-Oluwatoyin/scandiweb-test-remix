import {
  addProductToCart,
  removeProductFromCart,
  clearProductFromCart,
  getCartTotal,
} from "./cart-utils";
import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Product {
    quantity: Int
  }

  extend type Mutation {
    AddProductToCart(product: Product!): [Product]!
    RemoveProductFromCart(product: Product!): [Product]!
    ClearProductFromCart(product: Product!): [Product]!
  }
`;

const GET_CART_PRODUCTS = gql`
  {
    cartProducts @client
  }
`;

const GET_CART_TOTAL = gql`
  {
    cartTotal @client
  }
`;

export const resolvers = {
  Mutation: {
    addProductToCart: (_root, { product }, { cache }) => {
      const { cartProducts } = cache.readQuery({
        query: GET_CART_PRODUCTS,
      });

      const newCartProducts = addProductToCart(cartProducts, product);

      cache.writeQuery({
        query: GET_CART_TOTAL,
        data: { cartTotal: getCartTotal(newCartProducts) },
      });

      cache.writeQuery({
        query: GET_CART_PRODUCTS,
        data: { cartProducts: newCartProducts },
      });

      return newCartProducts;
    },
    removeProductFromCart: (_root, { product }, { cache }) => {
      const { cartProducts } = cache.readQuery({
        query: GET_CART_PRODUCTS,
      });

      const newCartProducts = removeProductFromCart(cartProducts, product);

      cache.writeQuery({
        query: GET_CART_TOTAL,
        data: { cartTotal: getCartTotal(newCartProducts) },
      });

      cache.writeQuery({
        query: GET_CART_PRODUCTS,
        data: { cartProducts: newCartProducts },
      });

      return newCartProducts;
    },

    clearProductFromCart: (_root, { product }, { cache }) => {
      const { cartProducts } = cache.readQuery({
        query: GET_CART_PRODUCTS,
      });

      const newCartProducts = clearProductFromCart(cartProducts, product);

      cache.writeQuery({
        query: GET_CART_TOTAL,
        data: { cartTotal: getCartTotal(newCartProducts) },
      });

      cache.writeQuery({
        query: GET_CART_PRODUCTS,
        data: { cartProducts: newCartProducts },
      });

      return newCartProducts;
    },
  },
};
