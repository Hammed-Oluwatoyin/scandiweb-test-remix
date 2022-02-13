import React, { Component, createContext } from "react";

export const CurrencyContext = createContext();

export class CurrencyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "$ USD",
      countries: {
        USD: {
          symbol: "USD $",
          number: 0,
        },
        GBP: {
          symbol: "GBP £",
          number: 1,
        },
        AUS: {
          symbol: "AUS $",
          number: 2,
        },
        YEN: {
          symbol: "YEN ¥",
          number: 3,
        },
        RUB: {
          symbol: "RUB ₽",
          number: 4,
        },
      },
    };
    this.changeCurrency = this.changeCurrency.bind(this);
  }

  changeCurrency(e) {
    this.setState({
      word: e.target.value,
    });
  }

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
