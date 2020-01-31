import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Search extends Component {
    state = {
        text: '',
        productList: [
            {
                id: 1,
                name: "Apple",
                img: ['/images/apple.jpg'],
                caption: "Keeps the doctor away!",
                category: "fruit"
            },
            {
                id: 2,
                name: "Paint brush",
                img: ['/images/paintbrush.jpg'],
                caption: "Paint not included.",
                category: "art"
            },
            {
                id: 3,
                name: "Cup of coffee",
                img: ['/images/hotCoffee.jpg'],
                caption: "Piping hot and full of caffeine!",
                category: "drink"
            },
            {
                id: 4,
                name: "Iced coffee",
                img: ['/images/icedCoffee.jpg'],
                caption: "Pairs well with our hot coffee.",
                category: "drink"
            },
            {
                id: 5,
                name: "Red rose",
                img: ['/images/redRose.jpeg'],
                caption: "Smells good!",
                category: "flower"
            },
            {
                id: 6,
                name: "Sunflowers",
                img: ['/images/sunflower.jpg'],
                caption: "For your garden or kitchen.",
                category: "flower"
            },
            {
                id: 7,
                name: "Naked Rat",
                img: ['/images/nakedRat.jpg'],
                caption: "Hairless like a sphynx cat, affectionate like a pup - pairs well with Albino Rat.",
                category: "animal"
            },
            {
                id: 8,
                name: "Albino Rat",
                img: ['/images/albinoRat.jpg'],
                caption: "Affectionate and hyperactive, this widdle wat pairs well with the Naked Rat.",
                category: "animal"
            },
            {
                id: 9,
                name: "Cactus",
                img: ['/images/cactus.jpg'],
                caption: "Prickly and easy to grow!",
                category: ""
            },
            {
                id: 10,
                name: "Yellow Mushroom",
                img: ['/images/mushroom.jpg'],
                caption: "Fungus among us...",
                category: "fungus"
            },
            {
                id: 11,
                name: "Red Mushroom",
                img: ['/images/redMushroom.jpg'],
                caption: "Fungus among us, now in red!",
                category: "fungus"
            },
            {
                id: 12,
                name: "Gecko",
                img: ['/images/dancingGecko.jpg'],
                caption: "A cute reptile that sticks to walls!",
                category: "animal"
            },
            {
                id: 13,
                name: "White Rose",
                img: ['/images/whiteRose.jpg'],
                caption: "Smells good, comes in white.",
                category: "flower"
            },
            {
                id: 14,
                name: "Latte Art",
                img: ['/images/latteArt.jpg'],
                caption: "Makes any coffee look that much fancier!",
                category: "drink"
            },
            {
                id: 15,
                name: "Fused Bananas",
                img: ['/images/fusedBanana.jpg'],
                caption: "Is it one banana or two? You decide!",
                category: "food"
            }
        ],
        filteredProductList: [],
        showNoResults: false,
    };

    Search = (searchTerm) => {
        let filteredProductList = this.state.productList.filter(product =>
            product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        this.setState({filteredProductList: filteredProductList});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.Search(this.refs.searchForm.value);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        id="searchForm"
                        ref="searchForm"
                        type="text"
                        name="text"
                        placeholder="Search..."
                        className="search-bar"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="search-btn"
                    />
                </form>
                <div className="searchResults">
                    {this.state.filteredProductList.map((product, index) => {
                        return <div key={index} className="product-profile">
                            <Link to={`/shop/${product.id}`} className="product-link">
                                <h2 className="product-name">{product.name}</h2>
                                <img src={product.img} alt="product" className="product-img"/>
                            </Link>
                        </div>
                    })}
                    {this.showNoResults
                        ? <div className="profile-preview">No results.</div>
                        : <div/>
                    }
                </div>
            </div>
        );
    }
}

export default Search;