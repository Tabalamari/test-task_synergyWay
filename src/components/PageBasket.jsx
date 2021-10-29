import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { TiArrowBack } from 'react-icons/ti';

class ProductInBasket extends React.Component{
    render(){
        return(
            <div>
                
            </div>
        )
    }
}


class PageBasket extends React.Component {
    render() {
        return (
            <div>
                <Link exact to='/'><TiArrowBack size={40} />BACK TO HOMEPAGE</Link>
                <p style={{ fontSize: "50px", color: "green" }}>Product in your cart</p>
                <ProductInBasket />
            </div>
        )
    }
}
export default PageBasket;