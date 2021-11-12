import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import UserContext from "./Contexts/UserContext.js";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp.js";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/SignIn.js";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Product from "./Pages/Product";

function App() {
    const [user, setUser] = useState("");

    useEffect(() => {
        let loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            loggedInUser = JSON.parse(loggedInUser);
            setUser(loggedInUser);
        }
    }, []);

    return (
        <UserContext.Provider value={user}>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/sign-up" exact>
                        <SignUp />
                    </Route>
                    <Route path="/sign-in" exact>
                        <SignIn setUser={setUser} />
                    </Route>
                    <Route path="/product/:productId" exact>
                        <Product />
                    </Route>
                </Switch>
                <GlobalStyle />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
