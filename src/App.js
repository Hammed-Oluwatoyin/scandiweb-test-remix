import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ClothesPageContainer from "./components/clothes/clothes.container";
import TechPageContainer from "./components/tech/tech.container";

import Header from "./components/header";

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
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <TechPageContainer {...props} />}
              />

              <Route
                exact
                path="/clothes"
                render={(props) => <ClothesPageContainer {...props} />}
              />
            </Switch>
          </BrowserRouter>
        </Content>
      </React.Fragment>
    );
  }
}

export default App;
