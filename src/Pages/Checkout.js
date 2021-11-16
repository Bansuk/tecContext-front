import { MdAddShoppingCart } from "react-icons/md";
import CartContext from "../Contexts/CartContext.js";
import UserContext from "../Contexts/UserContext.js";
import decodeToken from "../Auxiliar/decodeToken.js";
import { useContext, useState, useEffect } from "react";
import { getProductInfo, postCartItem } from "../Services/api.services.js";
import {
    Container,
    Subcontainer,
    Cart,
    Products,
    Total,
} from "../Styles/styleCheckout.js";
import ProductRow from "../Components/ProductRow.js";
import { useHistory } from "react-router";

function Checkout() {
    const history = useHistory();
    const cart = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const token = useContext(UserContext);
    const { userId } = token && decodeToken(token);
    let total = 0;

    useEffect(() => {
        cart.forEach(product => {
            getProductInfo(product.body.product_id).then(res => {
                const info = res.data[0];
                const quantity = product.body.quantity;
                setProducts([...products, { info, quantity }]);
            });
        });
    }, [cart]);

    products.forEach(product => {
        total += product.info.price * product.quantity;
    });

    function finishOrder() {
        cart.forEach(product => {
            const body = {
                product_id: product.body.product_id,
                quantity: product.body.quantity,
                user_id: userId,
            };
            postCartItem(body).then(res => history.push("/order-concluded"));
        });
    }

    return (
        <Container>
            <Subcontainer>
                <Cart>
                    <div>
                        <MdAddShoppingCart size={60} />
                        <span>MEU CARRINHO</span>
                    </div>
                    <Products>
                        <table>
                            <thead>
                                <tr>
                                    <th>Produtos</th>
                                    <th>Preço Unitário</th>
                                    <th>Quantidade</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <ProductRow
                                        key={index}
                                        product={product.info}
                                        quantity={product.quantity}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </Products>
                </Cart>
                <Total>
                    <div>
                        <span>TOTAL</span>
                        <span>{`R$ ${Number(total).toLocaleString("pt-br", {
                            minimumFractionDigits: 2,
                        })}`}</span>
                    </div>
                    {userId ? (
                        <button onClick={finishOrder}>Fechar compra</button>
                    ) : (
                        <button onClick={() => history.push("/sign-in")}>
                            Faça login!
                        </button>
                    )}
                </Total>
            </Subcontainer>
        </Container>
    );
}

export default Checkout;
