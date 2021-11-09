import styled from "styled-components";

const NavbarComponent = styled.div`
  height: 65px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 50px 0 50px;
  span {
    color: #FFFFFF;
    font-size: 15px;
    margin-top: 5px;
    font-family: 'Roboto', sans-serif;
  }
`;

const BoxCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export {
    NavbarComponent,
    BoxCategory
};