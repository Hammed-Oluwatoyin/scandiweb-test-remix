import React, { Component } from "react";
import { ReactComponent as Currency } from "../assets/currency-test.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRubleSign,
  faDollarSign,
  faYenSign,
  faPoundSign,
} from "@fortawesome/free-solid-svg-icons";

class FontPage extends Component {
  render() {
    return (
      <>
        <div>font page is ready</div>; AU
        <FontAwesomeIcon icon={faDollarSign} />
        <FontAwesomeIcon icon={faRubleSign} />
        <FontAwesomeIcon icon={faDollarSign} />
        <FontAwesomeIcon icon={faYenSign} />
        <FontAwesomeIcon icon={faPoundSign} />
      </>
    );
  }
}

export default FontPage;
