import React, { Component } from 'react';
import Data from '/Users/tabalamari/Documents/test-tasks/test-task_synergyWay/src/data.json';
import Images from './Images';


class AddToBasket extends React.Component {
   
    render() {
        return (

            <button onClick={this.props.onClick}>Add to Basket</button>
        )
    }
}



class Product extends React.Component {
    constructor(props) {
        super(props);
        this.addToBasket = this.addToBasket.bind(this);
    }
addToBasket(){
    let basket = localStorage.getItem('basket');
    if (!basket){
        basket = [];
    }
    else {
        basket = JSON.parse(localStorage.getItem('basket'))
    }
    const prod = {};
    prod.id = this.props.id;
    prod.name = this.props.name;
    prod.src = this.props.src;
    prod.price = this.props.price;

    basket.push(prod);

    const basketString = JSON.stringify(basket);
    localStorage.setItem('basket', basketString);
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
                        <AddToBasket onClick={this.addToBasket} />
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
                {products}
                {/* {products.map((item) => {
                    return item
                })} */}
            </div>)
    }
}

export default ProductList;






