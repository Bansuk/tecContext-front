import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import UserContext from "./Contexts/UserContext.js";
import CartContext from "./Contexts/CartContext.js";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp.js";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/SignIn.js";
import ProductsByCategory from "./Pages/ProductsByCategory";
import { useEffect, useState } from "react";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";

function App() {
    const [user, setUser] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            loggedInUser = JSON.parse(loggedInUser);
            setUser(loggedInUser);
        }
    }, []);

    useEffect(() => {
        let localCart = localStorage.getItem("cart");
        if (localCart) {
            localCart = JSON.parse(localCart);
            setCart(localCart);
        } else {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, []);

    return (
        <UserContext.Provider value={user}>
            <CartContext.Provider value={cart}>
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
                        <Route path="/categories/:categoryId" exact>
                            <ProductsByCategory />
                        </Route>
                        <Route path="/product/:productId" exact>
                            <Product setCart={setCart} />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                    </Switch>
                    <GlobalStyle />
                </BrowserRouter>
            </CartContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
