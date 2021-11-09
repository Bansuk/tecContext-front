import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import Home from "./Pages/Home";

function App() {
    return (
       <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
        <GlobalStyle />
       </BrowserRouter>
    );
}

export default App;
