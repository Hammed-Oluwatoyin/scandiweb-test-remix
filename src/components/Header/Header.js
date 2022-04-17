import React, { Component } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";

const HeaderWrapper = styled.header`
  height: 80px;
  box-sizing: border-box;
  padding: 25px 101px 25px 101px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Nav />
      </HeaderWrapper>
    );
  }
}

export default Header;
