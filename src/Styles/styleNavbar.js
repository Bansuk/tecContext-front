import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #000000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
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
  @media(max-width: 500px) {
    flex-direction: column;
    height: auto;
    h1 {
      margin: 3px 0 0 0;
      font-size: 40px;
    }
    p, span {
      font-size: 12px;
    }
    svg {
      height: 25px;

    }
  }
`;

const Logo = styled.h1`
  color: #00FF00;
  font-size: 50px;
  font-family: 'Ceviche One', cursive;
  margin-left: 50px;
  cursor: pointer;
  @media(max-width: 700px) {
    margin-left: 15px;
  }
`;

const IconsBox = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
  @media(max-width: 500px) {
    margin-right: 0;
  }
`;

const BoxUser = styled.div`
  display: flex;
  align-items: center;
  &:hover{
    cursor: pointer;
  }
  width: 115px;
  margin-right: 40px;
`;

const BoxShoppingCart = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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

const DivMenu = styled.div`
  opacity : ${({isOpacity}) => isOpacity ? 0 : 1};
  z-index: ${({isOpacity}) => isOpacity ? -1 : 2};
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: #000000;
  position: fixed;
  right: 20px;
  top: 64.2px;
  border-radius: 8px;
  button {
    background-color: transparent;
    font-family: 'Roboto', sans-serif;
    width: 110px;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
    margin: 0;
    text-align: center;
  }
  @media (max-width: 500px) {
    top: 83.2px;
    left: 57.5vw;
    width: 90px;
    height: 60px;
  }
`;

export {
    HeaderContainer,
    Header,
    Logo,
    IconsBox,
    BoxUser,
    BoxShoppingCart,
    DivMenu,
}