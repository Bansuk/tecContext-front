import styled from "styled-components";

const CategorieHeader = styled.div`
    margin-top: 196px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px 0 60px;
    @media (max-width: 500px) {
        justify-content: space-around;
        text-align: center;
        margin-top: 155px;
        h2 {
            font-size: 20px;
            margin-right: 10px;
        }
    }
`;

const ProductsQtd = styled.div`
    top: 196px;
    right: 78px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
        font-size: 15px;
    }
`;

const CategoryTitle = styled.h2`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    height: 35px;
    width: min-content;
    border-bottom: 2px solid #00FF00;
`;

const ProductsConatiner = styled.div`
    margin: 20px auto 20px auto;
    padding: 0 15px 0 15px;
    height: 500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media(max-width: 500px) {
        padding: 0;

    }
`;

export {
    ProductsQtd,
    CategorieHeader,
    CategoryTitle,
    ProductsConatiner,
}