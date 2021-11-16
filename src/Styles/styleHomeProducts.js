import styled from "styled-components";
import Carousel from 'react-elastic-carousel';

const SessionTitle = styled.h2`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    height: 35px;
    width: min-content;
    border-bottom: 2px solid #00FF00;
    margin: 50px 90px 0 90px;
    @media(max-width: 700px) {
        height: auto;
        margin: 50px auto 0 auto;
    }
    @media(max-width: 500px) {
        font-size: 20px;
    }
`;

const SessionTitle2 = styled.h2`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    height: 35px;
    width: 460px;
    border-bottom: 2px solid #00FF00;
    margin-bottom: 100px;
    margin: 50px 90px 0 90px;
    @media(max-width: 700px) {
        width: 200px;
        height: auto;
        text-align: center;
        margin: 50px auto 0 auto;
    }
    @media(max-width: 500px) {
        font-size: 20px;
    }
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
    @media(max-width: 500px) {
        height: 48vh;
        padding: 0 5px 0 5px;
        button {
            height: 30px;
            width: 30px;
            min-width: 30px;
            line-height: 30px;
            font-size: 15px;
        }
    }
    
`;

const Product = styled.div`
    height: 400px;
    width: 335px;
    margin: 0 20px 15px 0;
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
    @media(max-width: 500px) {
        margin: auto;
        width: 64vw;
        height: 46vh;
        padding: 0 10px 0 10px;
        h3, p, span {
            font-size: 15px;
            max-width: 70vw;
            margin-top: 30px;
            position: initial;
        }
        p {
            word-wrap: break-word;
        }
        a {
            height: 50vw;
            width: 64vw;
        }
        h3 {
            margin: auto;
            font: menu;
        }
    }
    
   

`;

const Discount = styled.div`
    border-radius: 8px;
    background-color: #00FF00;
    width: 70px;
    display: flex;
    align-items: center;
    color: #000000;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    right: 20px;
    top: 25px;
    @media(max-width: 500px) {
        width: 60px;
        top: 10px;
        right: 10px;
        font-size: 15px;
    }
`;

const Image = styled.div`
    height: 204px;
    width: 240px;
    margin: 10px auto 20px auto;
    img {
        width: 100%;
        height: 100%;
    }
    @media(max-width: 500px) {
        width: 45vw;
        height: 25vh;
        margin: 10px auto 10px auto;
        img {
            padding-bottom: 20px;
        }
    }
    
`;

const Banner = styled.img`
    width: 100vw;
    height: 400px;
    margin-top: 129px;
    @media (max-width: 700px) {
        height: auto;
        margin-top: 104px;
    }
    @media(max-width: 500px) {
        margin-top: 122px;
    }
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