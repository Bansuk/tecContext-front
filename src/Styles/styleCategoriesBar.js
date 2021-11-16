import styled from "styled-components";

const NavbarComponent = styled.div`
  height: 65px;
  span {
    color: #FFFFFF;
    font-size: 15px;
    margin-top: 25px;
    font-family: 'Roboto', sans-serif;
  }
  @media (max-width: 700px) {
    height: auto;
    padding: 0 10px 0 10px;
  }
`;

const ContainerCategory = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    z-index: 1;
  }
  @media (max-width: 700px) {
    border: 2px solid #00FF00;
    margin-bottom: 5px;
    overflow: auto;
    white-space: nowrap;
    justify-content: inherit;
    height: 40px;
    display: inicial;
    span {
      margin: 0;
    }
    a {
      display: flex;
      align-items: center;
    }
  }
`;

const BoxCategory = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin: 0 10px 0 10px;
`;

const BoxIconCategory = styled.div`
  padding: 0 40px 0 40px;
  position: relative;
  svg:nth-child(1) {
    position: absolute;
    left: 6vw;
  }
  svg:nth-child(2) {
    position: absolute;
    left: 20.5vw;
  }
  svg:nth-child(3) {
    position: absolute;
    left: 35.7vw;
  }  
  svg:nth-child(4) {
    position: absolute;
    left: 50.4vw;
  }  
   svg:nth-child(5) {
    position: absolute;
    left: 64.1vw;
  } 
  svg:nth-child(6) {
    position: absolute;
    right: 20.5vw;
  } 
  svg:last-child {
    position: absolute;
    right: 6.5vw;
  }
  @media(max-width: 700px) {
    display: none;
  }  
`;

export {
    NavbarComponent,
    BoxCategory,
    BoxIconCategory,
    ContainerCategory
};