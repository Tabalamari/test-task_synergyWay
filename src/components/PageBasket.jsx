import React, { Component } from 'react';
import Images from './Images';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { TiArrowBack } from 'react-icons/ti';

class ProductInBasket extends React.Component {
    render() {
        return (
            <div>
                <div className="product-wrapper">
                    <Images src={this.props.src} />
                    <p>{this.props.name}</p>
                    <p>{this.props.label}</p>
                    <div className="price">
                        <p>{this.props.price}</p>

                    </div>
                </div>
            </div>
        )
    }
}


class PageBasket extends React.Component {
    render() {
        let basket = localStorage.getItem('basket');
        if (!basket) {
            basket = [];
        }
        else {
            basket = JSON.parse(localStorage.getItem('basket'))
        }
        const products = basket.map(
            element => {
                const productItem = <ProductInBasket
                    id={element.id}
                    src={element.src}
                    name={element.name}
                    price={element.price} />;
                return productItem;
            });
        return (
            <div>
                <Link exact to='/'><TiArrowBack size={40} />BACK TO HOMEPAGE</Link>
                <p style={{ fontSize: "50px", color: "green" }}>Product in your cart</p>
                {products}
            </div>
        )
    }
}
export default PageBasket;