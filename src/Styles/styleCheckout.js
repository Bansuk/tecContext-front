import styled from "styled-components";

const Container = styled.div`
    margin-top: 130px;
    height: 70vh;
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
`;

const Subcontainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin-top: 77px;
`;

const Cart = styled.div`
    width: 80%;

    & div {
        display: flex;
        align-items: center;
    }

    & span {
        font-size: 40px;
        margin-left: 30px;
    }
`;

const Products = styled.div`
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    width: 97%;
    margin-top: 45px;

    & table {
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;
        font-size: 20px;
        word-wrap: break-word;
    }

    & th {
        padding: 15px 0 18px 0;
    }

    & td {
        text-align: center;
        vertical-align: middle;
        padding-bottom: 23px;
    }
`;

const Total = styled.div`
    background-color: #000;
    width: 30%;
    height: 50%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & div {
        margin: 20px 15px 20px 15px;
        justify-self: stretch;
    }

    & span {
        font-weight: 700;
        font-size: 24px;
        color: #fff;
    }

    & button {
        background-color: #00ff00;
        font-size: 24px;
        font-weight: 700;
        height: 45%;
        width: 65%;
        border-radius: 8px;
        margin-right: auto;
        margin-left: auto;

        & :hover {
            cursor: pointer;
        }
    }
`;

export { Container, Subcontainer, Cart, Products, Total };
