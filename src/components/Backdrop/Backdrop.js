import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleHiddenCartModal } from "../../redux/action";

const BackdropWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 80px;
  background-color: rgba(0, 0, 0, 0.5);
`;

class Backdrop extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
  }

  handleCloseModal = (e) => {
    if (e.key === "Escape" || e.target === e.currentTarget) {
      this.props.toggleHiddenCartModal();
    }
  };
  render() {
    const { showCartModal } = this.props;
    return (
      <>
        {showCartModal ? (
          <BackdropWrapper onClick={this.handleCloseModal} />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showCartModal: state.cartModalReducer.showCartModal,
  };
};
const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCartModal: () => dispatch(toggleHiddenCartModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
