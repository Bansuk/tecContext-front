import { FaRegUserCircle } from "react-icons/fa";
import CategoriesBar from "./CategoriesBar";
import { MdAddShoppingCart, MdKeyboardArrowDown } from "react-icons/md";
import {
  HeaderContainer,
  Header,
  Logo,
  IconsBox,
  BoxUser,
  BoxShoppingCart
} from "../Styles/styleNavbar";

function Navbar() {
  return(
    <HeaderContainer>
      <Header>
        <Logo>tecContext</Logo>
        <IconsBox>
          <BoxUser>
            <FaRegUserCircle color="#00FF00" size="35" />
            <p>Entre ou cadastre-se</p>
          </BoxUser>
          <BoxShoppingCart>
            <MdAddShoppingCart color="#00FF00" size="35" />
            <div>
              <span>0</span>
              <MdKeyboardArrowDown color="#00FF00" size="30" />
            </div>
          </BoxShoppingCart>
        </IconsBox>
      </Header>
      <CategoriesBar />
    </HeaderContainer>
  );
}

export default Navbar;