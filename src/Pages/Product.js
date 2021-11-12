import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductInfo } from "../Services/api.services.js";
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

function Product() {
    const { productId } = useParams();
    const [productInfo, setProductInfo] = useState([]);

    useEffect(() => {
        getProductInfo(productId)
            .then(res => setProductInfo(res.data[0]))
            .catch(err => console.log(err));
    });

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
                            <Button>Adicionar ao carrinho</Button>
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
