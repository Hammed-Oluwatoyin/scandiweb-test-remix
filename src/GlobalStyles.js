import styled from "styled-components";

export const CategoryName = styled.div`
  font-size: 42px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: black;
  font-size: 18px;
  line-height: 67.2px;
  margin: 80px 0px 0px 101px;
  z-index: 0;
`;

export const StyledCircleIcon = styled.button`
  padding-top: 8px;
  display: none;
  position: absolute;
  top: 70%;
  left: 70%;
`;

export const ProductWrapper = styled.div`
  max-width: 100%;
  background: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 2.6%;
  width: 24%;

  padding: 2%;

  .outofstock {
    position: absolute;
    z-index: 1000;
    top: 50%;
    left: 50%;
    font-size: 24px;
    opacity: 0.3;
    transform: translate(-50%, -50%);
  }

  &:hover {
    button {
      display: flex;
    }
    box-shadow: 2px 1px 10px 2px rgba(0, 0, 0, 0.75);
  }
`;

export const ProductImage = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 2px;
  opacity: ${(p) => (p.instock ? 1 : 0.5)};
`;

export const ProductName = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 1%;
  line-height: 30px;
`;

export const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 500;
`;
