import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Cart from './pages/Cart';
import HamburgerMenu from "./layout/HamburgerMenu";
import ProductProfile from "./pages/ProductProfile";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="app">
                <HamburgerMenu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/:id" component={ProductProfile}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
