import styled from "styled-components";

const Content = styled.div`
    margin-top: 130px;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    @media (max-width: 500px) {
        margin-top: 90px;
    }
`;

const Subcontent = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin-top: 77px;
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Image = styled.img`
    width: 30%;
    height: 60%;
    @media (max-width: 500px) {
        width: 70vw;
        height: 40vh;
    }
`;

const ProductInfo = styled.div`
    width: 40vw;
    @media (max-width: 500px) {
        width: 80vw;
        h1, h2 {
            text-align: center;
        }
    }
`;

const Title = styled.h1`
    font-size: 40px;
    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

const Description = styled.h2`
    font-size: 25px;
    text-align: justify;
    margin-top: 24px;
    @media (max-width: 500px) {
        font-size: 15px;
    }
`;

const PurchaseInfo = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 500px) {
        justify-content: space-around;
    }
`;

const Price = styled.span`
    font-size: 30px;
    font-weight: 700;
    @media (max-width: 500px) {
        font-size: 15px;
    }
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

const UnavailableWarning = styled.span`
    font-size: 20px;
    color: red;
`;

export {
    Subcontent,
    Content,
    Image,
    ProductInfo,
    Title,
    Description,
    PurchaseInfo,
    Price,
    Button,
    UnavailableWarning,
};
