import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductsByCategories } from "../Services/api.services";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import ComponentProduct from "../Components/ComponentProduct";
import {
    ProductsQtd,
    CategorieHeader,
    CategoryTitle,
    ProductsConatiner
} from "../Styles/styleProductsByCategory";


function ProductsByCategory() {
    const [products, setproducts] = useState([]);
    const [nameCategory, setNameCategory] = useState("")
    const { categoryId } = useParams();

    useEffect(() => {
        getProductsByCategories(categoryId)
            .then((resp) => {
                setproducts(resp.data);
                setNameCategory(resp.data[0].category)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categoryId])   

    console.log(nameCategory)
    return(
        <>    
            <CategorieHeader>
                <CategoryTitle>{nameCategory ? nameCategory : ""}</CategoryTitle>
                <ProductsQtd>
                    <IoIosArrowRoundDown size="30" />
                    {`${products.length} produtos`}
                </ProductsQtd>
            </CategorieHeader>
            <ProductsConatiner>
                {products.map((product) => (
                <Link to={`/products/${product.id}`}>
                   <ComponentProduct product={product} />
                </Link>
                ))}
            </ProductsConatiner>            
        </>
    );
}

export default ProductsByCategory;
