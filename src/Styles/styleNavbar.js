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
`;

const Logo = styled.h1`
  color: #00FF00;
  font-size: 50px;
  font-family: 'Ceviche One', cursive;
  margin-left: 50px;
  cursor: pointer;
`;

const IconsBox = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
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
  opacity : ${({opacity}) => opacity ? 0 : 1};
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: #000000;
  position: fixed;
  right: 20px;
  top: 65px;
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