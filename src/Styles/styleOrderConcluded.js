import styled from "styled-components";

const Container = styled.div`
    margin-top: 130px;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    font-size: 50px;
`;

const Subcontainer = styled.div`
    width: 90%;
    margin-top: 77px;
    margin-bottom: 50px;
    text-align: center;
`;

const Button = styled.button`
    background-color: #00ff00;
    font-size: 24px;
    font-weight: 700;
    height: 20%;
    width: 30%;
    border-radius: 8px;
`;

export { Container, Subcontainer, Button };
