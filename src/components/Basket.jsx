import React, { Component } from 'react';
import { BsBasket2Fill } from 'react-icons/bs';

class Basket extends React.Component {
    render() {
        return (
            <div className="basket">
                <BsBasket2Fill size={30} className="basket-icon" />
                <p></p>
            </div>)
    }
}

export default Basket;
