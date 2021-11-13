import { useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdAddShoppingCart, MdKeyboardArrowDown } from "react-icons/md";
import CategoriesBar from "./CategoriesBar";
import UserContext from "../Contexts/UserContext.js";
import CartContext from "../Contexts/CartContext";
import decodeToken from "../Auxiliar/decodeToken";
import {
    HeaderContainer,
    Header,
    Logo,
    IconsBox,
    BoxUser,
    BoxShoppingCart,
    DivMenu,
} from "../Styles/styleNavbar";

function Navbar() {
    const [items, setItems] = useState(0);
    const [isOpacity, setIsOpacity] = useState(true);
    const token = useContext(UserContext);
    const cart = useContext(CartContext);
    const { userName } = token && decodeToken(token);
    const history = useHistory();

    useEffect(() => {
        if (cart.length) setItems(cart.length);
    }, [cart.length]);

    function showMenuCart() {
        if (isOpacity) {
            setIsOpacity(false);
        } else {
            setIsOpacity(true);
        }
    }

    return (
        <HeaderContainer>
            <Header>
                <Logo onClick={() => history.push("/")}>tecContext</Logo>
                <IconsBox>
                    <BoxUser onClick={() => history.push("/sign-in")}>
                        <FaRegUserCircle color="#00FF00" size="35" />
                        {token ? (
                            <p>Olá, {userName}</p>
                        ) : (
                            <p>Entre ou cadastre-se</p>
                        )}
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
            <DivMenu isOpacity={isOpacity}>
                <button
                    disabled={items === 0 ? true : false}
                    onClick={() => history.push("/shopping-cart")}
                >
                    {items === 0
                        ? "O carrinho está vazio"
                        : "Acesse seu carrinho aqui"}
                </button>
            </DivMenu>
            <CategoriesBar />
        </HeaderContainer>
    );
}

export default Navbar;
