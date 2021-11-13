import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { getPromotionsProducts, getProducts } from "../Services/api.services";
import ComponentProduct from "../Components/ComponentProduct";
import blackfriday from "../assets/blackfriday.png"
import { 
    SessionTitle,
    SessionTitle2,
    ProductsConatiner,
    Banner
} from "../Styles/styleHomeProducts";


function Home() {
    const [products, setProducts] = useState([]);
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        getPromotionsProducts()
            .then((resp) => {
                setPromotions(resp.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])   
    
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
            <Banner alt="Banner Black friday" src={blackfriday} />
            <SessionTitle>PROMOÇÕES</SessionTitle>
            <ProductsConatiner breakPoints={breakPoints} pagination={false}>
                {promotions.map((promotion) => (
                    <ComponentProduct product={promotion}/>
                ))}
            </ProductsConatiner>
            <SessionTitle2>ESCOLHE AÍ QUAL COMBINA COM VOCÊ</SessionTitle2>
            <ProductsConatiner breakPoints={breakPoints} pagination={false}>
                {products.map((product) => (
                   <ComponentProduct product={product} />
                ))}
            </ProductsConatiner>
        </>
    );
}

export default Home;

