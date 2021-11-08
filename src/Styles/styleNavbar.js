import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #000000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  p {
    font-size: 15px;
    color: #00FF00;
    width: 115px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-left: 9px;
  }

`;

const Header = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: #00FF00;
  font-size: 50px;
  font-family: 'Ceviche One', cursive;
  margin-left: 50px;
`;

const IconsBox = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
`;

const BoxUser = styled.div`
  display: flex;
  align-items: center;
`;

const BoxShoppingCart = styled.div`
    display: flex;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 40px;
    }
    span {
      color: #00FF00;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
    }
`;

export {
    HeaderContainer,
    Header,
    Logo,
    IconsBox,
    BoxUser,
    BoxShoppingCart
}