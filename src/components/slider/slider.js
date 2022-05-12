import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowLeftOutlined } from "../../assets/arrow-left-outlined.svg";
import { ReactComponent as ArrowRightOutlined } from "../../assets/arrow-right-outlined.svg";

const Container = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  position: relative;
`;

const ArrowContainer = styled.div`
  margin-right: 16px;
  position: absolute;
  width: 60px;
  top: 250px;
  right: 20px;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  opacity: ${(props) => {
    return props.opacity;
  }};
  transition: 750ms all ease-in-out;
`;

const dataSlider = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
  },
  {
    id: 3,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
  },
];

class Slider extends Component {
  state = {
    slideIndex: 1,
  };

  // timer() {
  //   setInterval(() => {
  //     this.nextSlide();
  //   }, 5000);
  // }

  // componentDidMount() {
  //   this.timer();
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  nextSlide() {
    if (this.state.slideIndex !== dataSlider.length) {
      this.setState({ slideIndex: this.state.slideIndex + 1 });
    } else if (this.state.slideIndex === dataSlider.length) {
      this.setState({ slideIndex: 1 });
    }
  }

  previousSlide() {
    if (this.state.slideIndex !== 1) {
      this.setState({ slideIndex: this.state.slideIndex - 1 });
    } else if (this.state.slideIndex === 1) {
      this.setState({ slideIndex: dataSlider.length });
    }
  }

  render() {
    return (
      <Container>
        <Wrapper>
          {this.props.gallery.map((item, index) => {
            return (
              <Slide
                key={item}
                opacity={this.state.slideIndex === index + 1 ? 1 : 0}
              >
                {this.state.slideIndex === index + 1 && <Image src={item} />}
              </Slide>
            );
          })}
        </Wrapper>

        <ArrowContainer>
          <ArrowLeftOutlined
            onClick={
              this.props.gallery.length === 1
                ? null
                : () => this.previousSlide()
            }
          />
          <ArrowRightOutlined
            onClick={
              this.props.gallery.length === 1 ? null : () => this.nextSlide()
            }
          />
        </ArrowContainer>
      </Container>
    );
  }
}

export default Slider;
