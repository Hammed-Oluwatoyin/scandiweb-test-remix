import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";

const Content = styled.main`
  margin: 80px auto 0 auto;
  padding: 0 16px;

  font-family: "Raleway Sans-serif";
  height: 1435px;

  background: "#fff";
`;

class PageLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Content>{this.props.children}</Content>
      </>
    );
  }
}

export default PageLayout;
