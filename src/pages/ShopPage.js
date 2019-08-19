import React, {Component} from 'react';
import ProductPreview from "./ProductPreview";

class ShopPage extends Component {
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
                }
            ],
        };
    }

    render() {
        return (
            this.state.productList.map((product, index) =>
                <div key={index} className="profile-product">
                    <ProductPreview product={product}/>
                </div>
            ))
    }
}

export default ShopPage;