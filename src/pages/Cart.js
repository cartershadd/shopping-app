import React from 'react';
import {Link} from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <h1>Cart</h1>
            <div>
                <p className="cart-empty">Your shopping cart is currently empty.</p>
                <p className="return-to-shop">
                    <Link to="/">
                        <button
                            className="btn return-btn"
                        >
                            Return to Shop
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    );
};


export default Cart;