import styled from "styled-components";
import Carousel from 'react-elastic-carousel';

const SessionTitle = styled.h2`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    height: 35px;
    width: 150px;
    border-bottom: 2px solid #00FF00;
    margin: 50px 90px 0 90px;
`;

const SessionTitle2 = styled.h2`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    height: 35px;
    width: 460px;
    border-bottom: 2px solid #00FF00;
    margin-bottom: 100px;
    margin: 50px 90px 0 90px;
`;

const ProductsConatiner = styled(Carousel)`
    margin: 20px auto 20px auto;
    padding: 0 15px 0 15px;
    a {
        height: 420px;
        width: 335px;
    }
    button {
        background-color:  #00FF00;
        color: #FFFFFF;
        box-shadow: none;
        :hover:enabled {
            background-color: #00FF00;
        }
        :focus:enabled {
            background-color: #00FF00;
        }        
    }
`;

const Product = styled.div`
    height: 400px;
    width: 335px;
    margin: 0 20px 15px 20px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    h3 {
        margin-top: 60px;
        font-size: 25px;
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }

    span {
        text-decoration: line-through;
        font-size: 20px;
        margin-left: 15px;
        color: red;
    }
    p {
        font-size: 30px;
        font-family: 'Roboto', sans-serif;
        position: absolute;
        bottom: 30px;
        left: 15px;
        font-weight: bold;
    }
    img {
        margin-top: 20px;
    }

`;

const Discount = styled.div`
    border-radius: 8px;
    background-color: #00FF00;
    width: 70px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    right: 20px;
    top: 25px;

`;

const Image = styled.div`
    height: 204px;
    width: 240px;
    margin: 10px auto 20px auto;
    img {
        width: 100%;
        height: 100%auto;
    }
`;

const Banner = styled.img`
    width: 100vw;
    height: 400px;
    margin-top: 129px;
`;

export {
    SessionTitle,
    SessionTitle2,
    ProductsConatiner,
    Product,
    Image,
    Discount,
    Banner
}