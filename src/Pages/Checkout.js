import { MdAddShoppingCart } from "react-icons/md";
import {
    Container,
    Subcontainer,
    Cart,
    Products,
    Total,
} from "../Styles/styleCheckout.js";

function Checkout() {
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
                                <tr>
                                    <td>Notebook</td>
                                    <td>10</td>
                                    <td>1</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                    </Products>
                </Cart>
                <Total>
                    <div>
                        <span>TOTAL</span>
                        <span>R$ 5.478,00</span>
                    </div>
                    <button>Fechar compra</button>
                </Total>
            </Subcontainer>
        </Container>
    );
}

export default Checkout;
