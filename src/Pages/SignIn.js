import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
    Content,
    Title,
    Subtitle,
    Form,
    StyledButton,
    StyledLink,
} from "../Styles/styleAccount.js";
import { signInSchema } from "../Validation/Schemes.js";
import { signInUser } from "../Services/api.services.js";

function SignUp({ setUser }) {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let userPersistence = {};
    let isInputInvalid;

    function handleSubmit(e) {
        e.preventDefault();

        const body = { email, password };
        isInputInvalid = signInSchema.validate(body).error;

        if (isInputInvalid) {
            alert(isInputInvalid);
            return;
        }

        signInUser(body)
            .then(res => {
                const token = res.data.token;
                setUser(token);
                userPersistence = JSON.stringify(token);
                localStorage.setItem("user", userPersistence);
                history.push("/");
            })
            .catch(err => {
                if (err.response.status === 401) {
                    alert("Usuário ou senha incorretos!");
                } else {
                    alert(
                        "Houve um erro ao realizar o login! Por favor, tente novamente!"
                    );
                }
            });
    }

    return (
        <Content>
            <Title page="signin">Já é cadastrado?</Title>
            <Subtitle>Preencha seus dados para acessar sua conta.</Subtitle>
            <Form onSubmit={handleSubmit}>
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
                <StyledButton>Entrar</StyledButton>
            </Form>
            <Link to={"/sign-up"}>
                <StyledLink>Primeira vez? Cadastre-se!</StyledLink>
            </Link>
        </Content>
    );
}

export default SignUp;
