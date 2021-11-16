import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import CartContext from "../Contexts/CartContext";
import {
    Container,
    Subcontainer,
    Button,
} from "../Styles/styleOrderConcluded.js";

function OrderConcluded({ setCart }) {
    const cart = useContext(CartContext);
    const history = useHistory();

    useEffect(() => {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify(cart));
    });

    return (
        <Container>
            <Subcontainer>Obrigado pela sua compra!</Subcontainer>
            <Button onClick={() => history.push("/")}>Retonar a Home</Button>
        </Container>
    );
}

export default OrderConcluded;
