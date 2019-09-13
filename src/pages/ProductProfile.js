import React, {Component} from 'react';
import {addToCart} from "../actions";
import {connect} from 'react-redux';

class ProductProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [
                {
                    id: 1,
                    name: "Apple",
                    img: [process.env.PUBLIC_URL + '/images/apple.jpg'],
                    caption: "Keeps the doctor away!",
                    category: "fruit"
                },
                {
                    id: 2,
                    name: "Paint brush",
                    img: [process.env.PUBLIC_URL + '/images/paintbrush.jpg'],
                    caption: "Paint not included.",
                    category: "art"
                },
                {
                    id: 3,
                    name: "Cup of coffee",
                    img: [process.env.PUBLIC_URL + '/images/hotCoffee.jpg'],
                    caption: "Piping hot and full of caffeine!",
                    category: "drink"
                },
                {
                    id: 4,
                    name: "Iced coffee",
                    img: [process.env.PUBLIC_URL + '/images/icedCoffee.jpg'],
                    caption: "Pairs well with our hot coffee.",
                    category: "drink"
                },
                {
                    id: 5,
                    name: "Red rose",
                    img: [process.env.PUBLIC_URL + '/images/redRose.jpeg'],
                    caption: "Smells good!",
                    category: "flower"
                },
                {
                    id: 6,
                    name: "Sunflowers",
                    img: [process.env.PUBLIC_URL + '/images/sunflower.jpg'],
                    caption: "For your garden or kitchen.",
                    category: "flower"
                },
                {
                    id: 7,
                    name: "Naked Rat",
                    img: [process.env.PUBLIC_URL + '/images/nakedRat.jpg'],
                    caption: "Hairless like a sphynx cat, affectionate like a pup - pairs well with Albino Rat.",
                    category: "animal"
                },
                {
                    id: 8,
                    name: "Albino Rat",
                    img: [process.env.PUBLIC_URL + '/images/albinoRat.jpg'],
                    caption: "Affectionate and hyperactive, this widdle wat pairs well with the Naked Rat.",
                    category: "animal"
                },
                {
                    id: 9,
                    name: "Cactus",
                    img: [process.env.PUBLIC_URL + '/images/cactus.jpg'],
                    caption: "Prickly and easy to grow!",
                    category: ""
                },
                {
                    id: 10,
                    name: "Yellow Mushroom",
                    img: [process.env.PUBLIC_URL + '/images/mushroom.jpg'],
                    caption: "Fungus among us...",
                    category: "fungus"
                },
                {
                    id: 11,
                    name: "Red Mushroom",
                    img: [process.env.PUBLIC_URL + '/images/redMushroom.jpg'],
                    caption: "Fungus among us, now in red!",
                    category: "fungus"
                },
                {
                    id: 12,
                    name: "Gecko",
                    img: [process.env.PUBLIC_URL + '/images/dancingGecko.jpg'],
                    caption: "A cute reptile that sticks to walls!",
                    category: "animal"
                },
                {
                    id: 13,
                    name: "White Rose",
                    img: [process.env.PUBLIC_URL + '/images/whiteRose.jpg'],
                    caption: "Smells good, comes in white.",
                    category: "flower"
                },
                {
                    id: 14,
                    name: "Latte Art",
                    img: [process.env.PUBLIC_URL + '/images/latteArt.jpg'],
                    caption: "Makes any coffee look that much fancier!",
                    category: "drink"
                },
                {
                    id: 15,
                    name: "Fused Bananas",
                    img: [process.env.PUBLIC_URL + '/images/fusedBanana.jpg'],
                    caption: "Is it one banana or two? You decide!",
                    category: "food"
                }
            ]
        }
    }

    addProductToCart(product) {
        this.props.dispatch(addToCart(product))
    }

    render() {
        return (
            this.state.productList.filter(product => product.id.toString() === this.props.match.params.id).map((product, index) =>
                <div key={index} className="product-profile">
                    <h2 className="item-name">{product.name}</h2>
                    <img key={index} className="product-img" src={product.img} alt="product"/>
                    <p className="caption">{product.caption}</p>
                    <p className="price-tag">Price: FREE!</p>
                    <button onClick={() => this.addProductToCart(product)}>Add to Cart</button>
                </div>
            ))
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
    };
};
export default connect(mapStateToProps)(ProductProfile);

