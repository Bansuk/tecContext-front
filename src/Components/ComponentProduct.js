import { Link } from "react-router-dom";
import { IoIosArrowRoundDown } from "react-icons/io";
import { 
    Product,
    Image,
    Discount 
} from "../Styles/styleHomeProducts";

function ComponentProduct({product}) {
    return(
        <Link to={`/products/${product.id}`}>
            <Product key={product.id}>
                <Image>
                    <img alt="produto" src={product.image} />
                </Image>
                <h3>{product.name}</h3>
                {product.discount > 0 ?
                <>
                    <Discount>
                        <IoIosArrowRoundDown color="#FFFFFF" size="30" />
                        <h4>{`${Number(product.discount) * 100}%`}</h4>
                    </Discount>
                    <p>{`R$ ${Number(product.price)
                        .toLocaleString('pt-br', {minimumFractionDigits: 2})}`}
                    <span>{`R$ ${(Number(product.price) + Number(product.price) * product.discount)
                        .toLocaleString('pt-br', {minimumFractionDigits: 2})}`}
                    </span>
                    </p>
                </> :
                <p>{`R$ ${Number(product.price)
                    .toLocaleString('pt-br', {minimumFractionDigits: 2})}`}
                </p>}
            </Product>
        </Link>
    );
}

export default ComponentProduct;