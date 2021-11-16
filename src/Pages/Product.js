import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { getProductInfo, postCartItem } from "../Services/api.services.js";
import UserContext from "../Contexts/UserContext.js";
import CartContext from "../Contexts/CartContext.js";
import decodeToken from "../Auxiliar/decodeToken";
import {
    Subcontent,
    Content,
    ProductInfo,
    Title,
    Description,
    PurchaseInfo,
    Price,
    Button,
    Image,
    UnavailableWarning,
} from "../Styles/styleProduct.js";

function Product({ setCart }) {
    const { productId } = useParams();
    const [productInfo, setProductInfo] = useState([]);
    const token = useContext(UserContext);
    const cart = useContext(CartContext);
    const { userId } = token && decodeToken(token);
    let cartPersitance = {};

    useEffect(() => {
        getProductInfo(productId)
            .then(res => setProductInfo(res.data[0]))
            .catch(err => console.log(err));
    });

    useEffect(() => {
        cartPersitance = JSON.stringify(cart);
        localStorage.setItem("cart", cartPersitance);
    }, [cart]);

    function addItemCart() {
        let alreadyInCart = false;
        const body = {
            product_id: productId,
            quantity: 1,
            user_id: userId,
        };

        if (!userId) {
            cart.forEach(product => {
                if (body.product_id === product.body.product_id) {
                    product.body.quantity += 1;
                    alreadyInCart = true;
                }
            });
            if (!alreadyInCart) setCart([...cart, { body }]);
            alreadyInCart = false;
            console.log(cart);
        } else postCartItem(body);
    }

    return (
        <Content>
            <Subcontent>
                <Image src={productInfo.image} />
                <ProductInfo>
                    <Title>{productInfo.name}</Title>
                    <Description>{productInfo.description}</Description>
                    <PurchaseInfo>
                        <Price>{`R$ ${Number(productInfo.price).toLocaleString(
                            "pt-br",
                            { minimumFractionDigits: 2 }
                        )}`}</Price>
                        {productInfo.stock_qtd ? (
                            <Button onClick={addItemCart}>
                                Adicionar ao carrinho
                            </Button>
                        ) : (
                            <UnavailableWarning>
                                Produto Indisponível
                            </UnavailableWarning>
                        )}
                    </PurchaseInfo>
                </ProductInfo>
            </Subcontent>
        </Content>
    );
}

export default Product;
