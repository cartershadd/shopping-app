import React, {Component} from 'react';

class ProductProfile extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.id);
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
                    id: 4,
                    name: "Red rose",
                    img: [process.env.PUBLIC_URL + '/images/redRose.jpeg'],
                    caption: "Smells good!",
                    category: "flower"
                },
                {
                    id: 5,
                    name: "Sunflowers",
                    img: [process.env.PUBLIC_URL + '/images/sunflower.jpg'],
                    caption: "For your garden or kitchen.",
                    category: "flower"
                }
            ]
        }
    }

    render() {
        return (
            this.state.productList.filter(product => product.id.toString() === this.props.match.params.id).map((product, index) =>
                <div key={index} className="product-profile">
                    <img key={index} className="product-img" src={product.img} alt="product"/>
                    <p className="caption">{product.caption}</p>
                {/*    Need to add button here "add to cart" and the ability to add item to the cart*/}
                </div>
            ))
    }
}

export default ProductProfile;

