import { MdAddShoppingCart } from "react-icons/md";
import CartContext from "../Contexts/CartContext.js";
import { useContext, useState, useEffect } from "react";
import { getProductInfo } from "../Services/api.services.js";
import {
    Container,
    Subcontainer,
    Cart,
    Products,
    Total,
} from "../Styles/styleCheckout.js";
import ProductRow from "../Components/ProductRow.js";

function Checkout() {
    const cart = useContext(CartContext);
    const [products, setProducts] = useState([]);
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
                    <button>Fechar compra</button>
                </Total>
            </Subcontainer>
        </Container>
    );
}

export default Checkout;
