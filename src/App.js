import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp.js";
import Navbar from "./Components/Navbar";

function App() {
    return (
       <BrowserRouter>
       <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/sign-up" exact>
                <SignUp />
            </Route>
        </Switch>
        <GlobalStyle />
       </BrowserRouter>
    );
}

export default App;
