import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {removeFromCart} from '../actions';
import {connect} from "react-redux";
import {functions} from "../firebase";
import Button from 'react-bootstrap/Button';

class Cart extends Component {

    removeItem(product) {
        this.props.dispatch(removeFromCart(product.id))
    }

    sendEmail() {
        var sendgridEmail = functions.httpsCallable('sendEmail');
        let attachments = [];

        for (var i = 0; i < this.props.items.length; i++) {
            let item = this.props.items[i];
            attachments.push(
                {
                    content: item.content,
                    filename: item.filename
                })
        }

        sendgridEmail({
            to: 'carter.shadden@gmail.com',
           // attachments: attachments,
        }).then(function (result) {
                // Read result of the Cloud Function.
                console.log(result);
            }
        ).catch(function (error) {
            // Getting the Error details.
            //console.log(error);
            var code = error.code;
            var message = error.message;
            var details = error.details;
            console.log(code);
            console.log(message);
            console.log(details);
        });
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
                                <Button variant="danger" onClick={() => this.removeItem(item)}>
                                    <i className="far fa-times-circle"/>
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <p className="cart-empty">Your shopping cart is currently empty.</p>
                    )}
                <Button variant="success" onClick={() => this.sendEmail()} className="checkout-btn">Checkout</Button>
                <p className="return-to-shop">
                    <Link to="/">
                        <Button className="return-btn" variant="secondary">
                            Return to Shop
                        </Button>
                    </Link>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("cart" + state.items.length);
    return {
        items: state.items,
    }
};

export default connect(mapStateToProps)(Cart);