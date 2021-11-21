import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Clothing from "./pages/clothing";
import Tech from "./pages/tech";

const Globalstyle = createGlobalStyle`
                            body {
                              background: white;
                              min-height: 100vh;
                              margin:0;
                              color:black;
                              font-family: "Raleway, sans-serif"
                            }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Globalstyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Clothing />
            </Route>

            <Route exact path="/tech">
              <Tech />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
