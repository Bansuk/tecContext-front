import styled from "styled-components";

const SessionTitle = styled.h2`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    height: 35px;
    width: 135px;
    border-bottom: 2px solid #00FF00;
    margin-bottom: 100px;
    margin: 196px 154px 0 154px;
`;

const SessionTitle2 = styled.h2`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    height: 35px;
    width: 270px;
    border-bottom: 2px solid #00FF00;
    margin-bottom: 100px;
    margin: 50px 154px 0 154px;
`;

const ProductsConatiner = styled.div`
    height: 485px;
    width: 81vw;
    margin: 0 auto;
    padding: 0 15px 0 15px;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    ::-webkit-scrollbar {
        display: none;
    } 
`;

const Product = styled.div`
    height: 400px;
    min-width: 335px;
    margin: 0 15px 0 15px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    h3 {
        font-size: 25px;
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }
    p {
        font-size: 30px;
        font-family: 'Roboto', sans-serif;
        position: absolute;
        bottom: 20px;
        left: 15px;
        font-weight: bold;
    }

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

export {
    SessionTitle,
    SessionTitle2,
    ProductsConatiner,
    Product,
    Image
}