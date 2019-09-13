import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {removeFromCart} from '../actions';
import {connect} from "react-redux";

class Cart extends Component {

    removeItem(product) {
        this.props.dispatch(removeFromCart(product.id))
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                {this.props.items.length !== 0 ?
                    this.props.items.map((item, index) =>
                        <div key={index} className="cart-items">
                            <div className="product-in-cart">
                                <h2 className="product-name">{item.name}</h2>
                                <img src={item.img} alt="product" className="product-img"/>
                                <p className="quantity">{item.quantity}</p>
                                <button className="remove-item" onClick={() => this.removeItem(item)}>
                                    <i className="far fa-times-circle"/>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p className="cart-empty">Your shopping cart is currently empty.</p>
                    )}
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
        )
    }}
    const mapStateToProps = state => {
        console.log("cart" + state.items.length);
        return {
            items: state.items,
        }
    };

export default connect(mapStateToProps)(Cart);