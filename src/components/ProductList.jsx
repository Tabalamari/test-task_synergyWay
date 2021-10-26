import React, { Component } from 'react';
import Data from '/Users/tabalamari/Documents/test-tasks/test-task_synergyWay/src/data.json';

class AddToBasket extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Add to Basket</button>
        )
    }
}

class Images extends React.Component {
    render() {
        return (
            <img src={this.props.src} />
        )
    }
}

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart() {
        localStorage.setItem(this.props.id, 'yes');
    }

    render() {
        return (
            <div>
                <div className="product-wrapper">
                    <Images src={this.props.src} />
                    <p>{this.props.name}</p>
                    <p>{this.props.label}</p>
                    <div className="price">
                        <p>{this.props.price}</p>
                        <AddToBasket onClick={this.addToCart} />
                    </div>
                </div>
            </div>
        )
    }
}

class ProductList extends React.Component {
    render() {
        let key = 0;
        const products = Data.map(
            element => {
                const productItem = <Product
                    key={key++}
                    id={element.id}
                    src={element.src}
                    name={element.name}
                    label={element.label}
                    price={element.price} />;
                return productItem;
            });
        return (
            <div className="products">
                {products.map((item) => {
                    return item
                })}
            </div>)
    }
}

export default ProductList;






