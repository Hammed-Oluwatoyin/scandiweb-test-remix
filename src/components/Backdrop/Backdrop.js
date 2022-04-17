import React, { Component } from "react";
import styled from "styled-components";

const BackdropWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

class Backdrop extends Component {
  render() {
    return <BackdropWrapper>Backdrop</BackdropWrapper>;
  }
}

export default Backdrop;
