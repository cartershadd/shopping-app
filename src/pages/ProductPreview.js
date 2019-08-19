import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProductPreview extends Component {
    render() {
        return (
            <div className="product-profile">
                <Link to={`/shop/${this.props.product.id}`} className="product-link">
                    <h2 className="product-name">{this.props.product.name}</h2>
                    <img src={this.props.product.img} alt="product" className="product-img"/>
                </Link>
            </div>
        )
    }
}

export default ProductPreview;