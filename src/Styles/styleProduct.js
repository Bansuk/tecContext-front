import styled from "styled-components";

const Content = styled.div`
    margin-top: 130px;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
`;

const Test = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin-top: 77px;
`;

const Image = styled.img`
    width: 30%;
    height: 60%;
`;

const ProductInfo = styled.div`
    width: 25%;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const Description = styled.h2`
    font-size: 25px;
    text-align: justify;
    margin-top: 24px;
`;

const PurchaseInfo = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Price = styled.span`
    font-size: 30px;
    font-weight: 700;
`;

const Button = styled.button`
    background-color: #00ff00;
    font-size: 30px;
    font-weight: 700;
    height: 96px;
    width: 50%;
    border-radius: 8px;

    & :hover {
        cursor: pointer;
    }
`;

export {
    Test,
    Content,
    Image,
    ProductInfo,
    Title,
    Description,
    PurchaseInfo,
    Price,
    Button,
};
