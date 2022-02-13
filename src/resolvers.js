import {
  addProductToCart,
  removeProductFromCart,
  clearProductFromCart,
  getCartProductCount,
  getCartTotal,
} from "./cart-utils";
import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Product {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartDropdown: Boolean!
    ToggleCurrencyDropdown: Boolean!
    AddProductToCart(product: Product!, number: Int): [Product]!
    RemoveProductFromCart(product: Product!, number: Int): [Product]!
    ClearProductFromCart(product: Product!, number: Int): [Product]!
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

const GET_PRODUCT_COUNT = gql`
  {
    productCount @client
  }
`;
const GET_CART_DROPDOWN_HIDDEN = gql`
  {
    cartDropdownHidden @client
  }
`;

const GET_CURRENCY_DROPDOWN_HIDDEN = gql`
  {
    currencyDropdownHidden @client
  }
`;

const GET_CURRENCY_AND_CART_DROPDOWN_HIDDEN = gql`
  {
    currencyDropdownHidden @client
    cartDropdownHidden @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleCurrencyDropdown: (_root, _args, { cache }) => {
      const { currencyDropdownHidden, cartDropdownHidden } = cache.readQuery({
        query: GET_CURRENCY_AND_CART_DROPDOWN_HIDDEN,
      });

      if (cartDropdownHidden) {
        cache.writeQuery({
          query: GET_CART_DROPDOWN_HIDDEN,
          data: { cartDropdownHidden: !cartDropdownHidden },
        });
      }
      cache.writeQuery({
        query: GET_CURRENCY_DROPDOWN_HIDDEN,
        data: { currencyDropdownHidden: !currencyDropdownHidden },
      });

      return !currencyDropdownHidden;
    },

    toggleCartDropdown: (_root, _args, { cache }) => {
      const { cartDropdownHidden, currencyDropdownHidden } = cache.readQuery({
        query: GET_CURRENCY_AND_CART_DROPDOWN_HIDDEN,
      });

      if (currencyDropdownHidden) {
        cache.writeQuery({
          query: GET_CURRENCY_DROPDOWN_HIDDEN,
          data: { currencyDropdownHidden: !currencyDropdownHidden },
        });
      }
      cache.writeQuery({
        query: GET_CART_DROPDOWN_HIDDEN,
        data: { cartDropdownHidden: !cartDropdownHidden },
      });

      return !cartDropdownHidden;
    },
    addProductToCart: (_root, { product, number }, { cache }) => {
      const { cartProducts } = cache.readQuery({
        query: GET_CART_PRODUCTS,
      });

      const newCartProducts = addProductToCart(cartProducts, product);

      cache.writeQuery({
        query: GET_CART_TOTAL,
        data: { cartTotal: getCartTotal(newCartProducts, number) },
      });

      cache.writeQuery({
        query: GET_CART_PRODUCTS,
        data: { cartProducts: newCartProducts },
      });

      cache.writeQuery({
        query: GET_PRODUCT_COUNT,
        data: { productCount: getCartProductCount(newCartProducts) },
      });

      return newCartProducts;
    },
    removeProductFromCart: (_root, { product, number }, { cache }) => {
      const { cartProducts } = cache.readQuery({
        query: GET_CART_PRODUCTS,
      });

      const newCartProducts = removeProductFromCart(cartProducts, product);

      cache.writeQuery({
        query: GET_CART_TOTAL,
        data: { cartTotal: getCartTotal(newCartProducts, number) },
      });

      cache.writeQuery({
        query: GET_CART_PRODUCTS,
        data: { cartProducts: newCartProducts },
      });

      cache.writeQuery({
        query: GET_PRODUCT_COUNT,
        data: { productCount: getCartProductCount(newCartProducts) },
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

      cache.writeQuery({
        query: GET_PRODUCT_COUNT,
        data: { productCount: getCartProductCount(newCartProducts) },
      });

      return newCartProducts;
    },
  },
};
