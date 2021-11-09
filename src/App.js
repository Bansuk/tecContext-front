import SignUp from "./Components/Account/SignUp";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>
            </Switch>
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
