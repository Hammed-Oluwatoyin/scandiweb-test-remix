import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleHiddenCartModal } from "../../redux/action";

const BackdropWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.5);
`;

class Backdrop extends Component {
  render() {
    const { showCartModal, toggleHiddenCartModal } = this.props;
    return (
      <>
        {showCartModal ? (
          <BackdropWrapper onClick={toggleHiddenCartModal} />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    showCartModal: state.cartModalReducer.showCartModal,
  };
};
const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCartModal: () => dispatch(toggleHiddenCartModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
