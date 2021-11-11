import { useHistory } from "react-router-dom";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdAddShoppingCart, MdKeyboardArrowDown } from "react-icons/md";
import CategoriesBar from "./CategoriesBar";
import {
  HeaderContainer,
  Header,
  Logo,
  IconsBox,
  BoxUser,
  BoxShoppingCart,
  DivMenu
} from "../Styles/styleNavbar";

function Navbar() {
  const [items, setItems] = useState(1);
  const [opacity, setOpacity] = useState(true)
  const history = useHistory();
  
  function showMenuCart() {
    if (opacity) {
      setOpacity(false)
    } else {
      setOpacity(true)
    }
  }
  
  return(
    <HeaderContainer>
      <Header>
        <Logo onClick={() => history.push("/")}>tecContext</Logo>
        <IconsBox>
          <BoxUser onClick={() => history.push("/sign-in")}>
            <FaRegUserCircle color="#00FF00" size="35" />
            <p>Entre ou cadastre-se</p>
          </BoxUser>
          <BoxShoppingCart onClick={showMenuCart}>
            <MdAddShoppingCart color="#00FF00" size="35" />
            <div>
              <span>{items}</span>
              <MdKeyboardArrowDown color="#00FF00" size="30" />
            </div>
          </BoxShoppingCart>
        </IconsBox>
      </Header>
      <DivMenu opacity={opacity} >
        <button 
          disabled={items === 0 ? true : false} 
          onClick={() => history.push("/shopping-cart")}>
          { items === 0 ? 
          "O carrinho está vazio" 
          : "Acesse seu carrinho aqui"}
        </button>
      </DivMenu>
      <CategoriesBar />
    </HeaderContainer>
  );
}

export default Navbar;

