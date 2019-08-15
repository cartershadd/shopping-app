import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Search extends Component {
    state = {
        text: '',
        productList: [
            {
                id: 1,
                name: "Apple",
                img: [ process.env.PUBLIC_URL + '/images/apple.jpg'],
                caption: "Keeps the doctor away!",
                category: "fruit"
            },
            {
                id: 2,
                name: "Paint brush",
                img: [ process.env.PUBLIC_URL + '/images/paintbrush.jpg'],
                caption: "Paint not included.",
                category: "art"
            },
            {
                id: 3,
                name: "Cup of coffee",
                img: [ process.env.PUBLIC_URL + '/images/hotCoffee.jpg'],
                caption: "Piping hot and full of caffeine!",
                category: "drink"
            },
            {
                id: 4,
                name: "Iced coffee",
                img: [ process.env.PUBLIC_URL + '/images/icedCoffee.jpg'],
                caption: "Pairs well with our hot coffee.",
                category: "drink"
            },
            {
                id: 4,
                name: "Red rose",
                img: [ process.env.PUBLIC_URL + '/images/redRose.jpeg'],
                caption: "Smells good!",
                category: "flower"
            },
            {
                id: 5,
                name: "Sunflowers",
                img: [ process.env.PUBLIC_URL + '/images/sunflower.jpg'],
                caption: "For your garden or kitchen.",
                category: "flower"
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
                            <Link to={`/${product.id}`} className="product-link">
                                <span className="product-name">{product.name}</span>
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