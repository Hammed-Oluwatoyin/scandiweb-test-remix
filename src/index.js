import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, gql } from "apollo-boost";
import { CurrencyProvider } from "./Context/CurrencyContext";
import { resolvers, typeDefs } from "./resolvers";

import reportWebVitals from "./reportWebVitals";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
  data: {
    cartProducts: [],
    cartTotal: 0,
    productCount: 0,
    cartDropdownHidden: false,
    currencyDropdownHidden: false,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
