import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
    Content,
    Title,
    Form,
    StyledButton,
    StyledLink,
} from "../Styles/styleAccount.js";
import { signUpSchema } from "../Validation/Schemes.js";
import { signUpUser } from "../Services/api.services.js";

function SignUp() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    let isInputInvalid;

    function handleSubmit(e) {
        e.preventDefault();

        const body = { name, email, password, passwordConfirmation };
        isInputInvalid = signUpSchema.validate(body).error;

        if (isInputInvalid) {
            alert(isInputInvalid);
            return;
        }

        signUpUser(body)
            .then(res => {
                history.push("/");
            })
            .catch(err => {
                if (err.response.status === 409) {
                    alert("Esse e-mail já está em uso!");
                } else {
                    alert(
                        "Houve um erro ao realizar o cadastro! Por favor, tente novamente!"
                    );
                }
            });
    }

    return (
        <Content>
            <Title>Dados Cadastrais</Title>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    maxLength="100"
                    required
                ></input>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                ></input>
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    minLength="8"
                    maxLength="64"
                    required
                ></input>
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={passwordConfirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                    minLength="8"
                    maxLength="64"
                    required
                ></input>
                <StyledButton>Cadastrar</StyledButton>
            </Form>
            <Link to={"/sign-in"}>
                <StyledLink>Já tem conta? Pode entrar!</StyledLink>
            </Link>
        </Content>
    );
}

export default SignUp;
