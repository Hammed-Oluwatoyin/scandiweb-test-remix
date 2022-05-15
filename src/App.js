import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import CartPage from "./pages/CartPage/CartPage";
import ProductDisplayPage from "./pages/ProductDisplayPage/ProductDisplayPage";

const GlobalStyle = createGlobalStyle`
                                          body{
    font-family: Raleway;
    margin-top: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

p{
    margin: 0;
}

ul{
    list-style: none;
    padding: 0;
    margin: 0;
    
}

`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Backdrop />
        <BrowserRouter>
          <Header />

          <Switch>
            <Route
              exact
              path="/products/:productId"
              render={(props) => <ProductDisplayPage {...props} />}
            />

            <Route
              exact
              path="/cart"
              render={(props) => <CartPage {...props} />}
            />
            {["/", "/:CategoryName"].map((path, index) => (
              <Route path={path} exact component={CategoryPage} key={index} />
            ))}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
