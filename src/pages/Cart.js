import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {removeFromCart} from '../actions';
import {connect} from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    setShow(value) {
        this.setState({show: value})
    }

    removeItem(product) {
        this.props.dispatch(removeFromCart(product.id))
    }

    render() {
        return (
            <div className='cart-container'>
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
                <Button variant="success" onClick={() => this.setShow(true)} className="checkout-btn">Checkout</Button>

                <Modal show={this.state.show} onHide={() => this.setShow(false)} animation={false} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Checkout Time!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thank you for visiting the shopping mockup website.
                        We hope you had a good experience.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setShow(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

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