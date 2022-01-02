import React, { Component, createContext } from "react";

export const CurrencyContext = createContext();

export class CurrencyProvider extends Component {
  state = {
    currency: "USD",
  };

  changeCurrency = (value) => {
    this.setState({
      currency: value,
    });
  };

  render() {
    return (
      <CurrencyContext.Provider
        value={{ ...this.state, changeCurrency: this.changeCurrency }}
      >
        {this.props.children}
      </CurrencyContext.Provider>
    );
  }
}
