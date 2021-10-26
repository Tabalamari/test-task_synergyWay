import React, { Component } from 'react';
import Basket from './Basket';
import PageBasket from './PageBasket';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                HERE WELL BE THE SITE NAME AND A LOGO
                <Link to='basket'><Basket /></Link>
            </header>)
    }
}

export default Header; 