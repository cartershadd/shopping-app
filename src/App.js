import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Cart from './pages/Cart';
import HamburgerMenu from "./layout/HamburgerMenu";
import Search from "./pages/Search";
import ShopPage from "./pages/ShopPage";
import ProductProfile from "./pages/ProductProfile";

function App() {
    return (
        <Router>
            <HamburgerMenu/>
            <div className="app">
                <div className="container">
                    <p>Welcome</p>
                </div>
                <Switch>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/shop/:id" component={ProductProfile}/>
                    <Route exact path="/search" component={Search}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
