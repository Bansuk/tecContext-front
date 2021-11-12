import { useParams } from "react-router";
import {
    Test,
    Content,
    ProductInfo,
    Title,
    Description,
    PurchaseInfo,
    Price,
    Button,
    Image,
} from "../Styles/styleProduct.js";

function Product() {
    const { productId } = useParams();

    return (
        <Content>
            <Test>
                <Image src="https://m.media-amazon.com/images/I/51Yy7RbOVLL._AC_SL1000_.jpg" />
                <ProductInfo>
                    <Title>Notebook Lenovo IdeaPad 3i</Title>
                    <Description>
                        Intel Core i3-10110U, 4GB RAM, 256 GB SSD, Windows 10,
                        15.6", Prata
                    </Description>
                    <PurchaseInfo>
                        <Price>R$ 2.739,00</Price>
                        <Button>Adicionar ao carrinho</Button>
                    </PurchaseInfo>
                </ProductInfo>
            </Test>
        </Content>
    );
}

export default Product;