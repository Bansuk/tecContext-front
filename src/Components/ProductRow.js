import { useContext, useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import CartContext from "../Contexts/CartContext";
import { Quantity } from "../Styles/styleCheckout";

function ProductRow({ product, quantity }) {
    const cart = useContext(CartContext);
    let [qty, setQty] = useState(quantity);

    function addItem(product_id) {
        cart.forEach(product => {
            if (product.body.product_id == product_id) {
                product.body.quantity += 1;
                setQty((qty += 1));
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        });
    }

    function removeItem(product_id) {
        cart.forEach((product, index) => {
            if (product.body.product_id == product_id) {
                product.body.quantity -= 1;
                setQty((qty -= 1));
                localStorage.setItem("cart", JSON.stringify(cart));
                if (qty === 0) {
                    cart.splice(index, 1);
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
            }
        });
    }

    return (
        <>
            {qty ? (
                <tr>
                    <td>{product.name}</td>
                    <td>
                        {`R$ ${Number(product.price).toLocaleString("pt-br", {
                            minimumFractionDigits: 2,
                        })}`}
                    </td>
                    <td>
                        <Quantity>
                            <AiFillMinusCircle
                                onClick={() => removeItem(product.id)}
                            />
                            {qty}
                            <AiFillPlusCircle
                                onClick={() => addItem(product.id)}
                            />
                        </Quantity>
                    </td>
                    <td>{`R$ ${Number(qty * product.price).toLocaleString(
                        "pt-br",
                        {
                            minimumFractionDigits: 2,
                        }
                    )}`}</td>
                </tr>
            ) : (
                ""
            )}
        </>
    );
}

export default ProductRow;
