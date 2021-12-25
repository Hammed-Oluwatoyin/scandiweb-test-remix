import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { default as clothesPageContainer } from "./components/clothes/clothes.container";
import { default as techPageContainer } from "./components/tech/tech.container";

const Globalstyle = createGlobalStyle`
                            body {
                              
                              min-height: 100vh;
                              margin:0;
                              color:black;
                              font-family: Raleway;
                              
                            }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Globalstyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={techPageContainer} />

            <Route exact path="/clothes" component={clothesPageContainer} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
