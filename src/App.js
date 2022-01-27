import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ClothingPageContainer from "./components/clothes/clothes.container";
import TechPageContainer from "./components/tech/tech.container";
import ProductDisplayContainer from "./components/product-display-container/product-display.container";

import CartPageContainer from "./components/cart-page-container/cart-page-container";

const Globalstyle = createGlobalStyle`
                            body {
                              
                              min-height: 100vh;
                              margin:0;
                              color:black;
                              font-family: Raleway;
                              
                            }
`;

const Content = styled.main`
  margin: 80px auto 0 auto;
  padding: 0 16px;

  height: 1435px;

  background: "#fff";
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Content>
          <Globalstyle />

          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <TechPageContainer {...props} />}
              />
              <Route
                exact
                path="/clothes"
                render={(props) => <ClothingPageContainer {...props} />}
              />

              <Route
                exact
                path="/cart"
                render={(props) => <CartPageContainer {...props} />}
              />

              <Route
                path="/:id"
                render={(props) => <ProductDisplayContainer {...props} />}
              />
            </Switch>
          </BrowserRouter>
        </Content>
      </React.Fragment>
    );
  }
}

export default App;
