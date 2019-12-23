import React, {Component} from 'react';
import Search from "./Search";
import ShopPage from "./ShopPage";

class Home extends Component {
    render() {
        return (
            <div>
                <Search/>
                <ShopPage/>
            </div>
        );
    }
}

export default Home;