import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { getProducts } from "../Services/api.services";
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

    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3},
        { width: 1500, itemsToShow: 4 },
    ]

  
    return (
        <>
            <Navbar />
            <SessionTitle>DESTAQUES</SessionTitle>
            <ProductsConatiner breakPoints={breakPoints} pagination={false}>
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
            <ProductsConatiner breakPoints={breakPoints} pagination={false}>
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

