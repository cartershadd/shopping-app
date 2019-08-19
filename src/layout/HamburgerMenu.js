import React from 'react';
import {Link} from 'react-router-dom';

const HamburgerMenu = () => {
    return (
            <div className="navigation">
                <div className="menu-toggle">

                <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>


                    <ul className="menu">
                        <li>
                            <Link to="/cart" className="hamburgerLink"><i className="fas fa-shopping-cart"/></Link>
                        </li>
                        <li>
                            <Link to="/" className="hamburgerLink">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hamburgerLink">Shop</Link>
                        </li>
                        <li>
                            <Link to="/search" className="hamburgerLink">Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default HamburgerMenu;