import styled from "styled-components";

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    height: 110vh;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 40px;
    margin-top: 65px;
    margin-bottom: ${props => (props.page ? "15px" : "70px")};
`;

const Subtitle = styled.h2`
    font-size: 20px;
    margin-bottom: 33px;
`;

const Form = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;

    & input {
        border-radius: 8px;
        box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 20px;
        height: 48px;
        margin-bottom: 14px;
        max-width: 500px;
        min-width: 250px;
        width: 40vw;
    }

    & input::placeholder {
        font-size: 20px;
        padding-left: 15px;
    }

    & :focus {
        border: 2px solid black;
        outline: none;
    }
`;

const StyledButton = styled.button`
    background-color: #000;
    border-radius: 5px;
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: 700;
    height: 36px;
    margin-bottom: 30px;
    max-width: 300px;
    min-width: 150px;
    width: 25vw;
`;

const StyledLink = styled.span`
    font-size: 20px;
    color: #000;
`;

export { Content, Title, Subtitle, Form, StyledButton, StyledLink };
