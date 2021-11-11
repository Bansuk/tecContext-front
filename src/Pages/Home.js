import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { getProducts } from "../Services/api.services";
import { 
    IoIosArrowDroprightCircle,
    IoIosArrowDropleftCircle, 
 } from "react-icons/io";
import { 
    SessionTitle,
    SessionTitle2,
    ProductsConatiner,
    Product,
    Image
} from "../Styles/styleHomeProducts";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((resp) => {
                setProducts(resp.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

  
    return (
        <>
            <Navbar />
            <SessionTitle>DESTAQUES</SessionTitle>
            <ProductsConatiner>
                {products.map((product, index) => (
                    <Link to={`/products/${product.id}`}>
                        <Product key={index}>
                            <Image>
                                <img alt="produto" src={product.image} />
                            </Image>
                            <h3>{product.name}</h3>
                            <p>{`R$ ${Number(product.price)
                                .toLocaleString('pt-br', {minimumFractionDigits: 2})}`}
                            </p>
                        </Product>
                    </Link>
                ))}
            </ProductsConatiner>
            <SessionTitle2>OFERTAS IMPERDÍVEIS</SessionTitle2>
            <ProductsConatiner>
                {products.map((product, index) => (
                    <Link to={`/products/${product.id}`}>
                        <Product key={index}>
                            <Image>
                                <img alt="produto" src={product.image} />
                            </Image>
                            <h3>{product.name}</h3>
                            <p>{`R$ ${Number(product.price)
                                .toLocaleString('pt-br', {minimumFractionDigits: 2})}`}
                            </p>
                        </Product>
                    </Link>
                ))}
            </ProductsConatiner>
        </>
    );
}

export default Home;