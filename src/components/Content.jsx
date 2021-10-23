import React, { Component } from 'react';
import ProductList from './ProductList';

class Content extends React.Component {
    render() {
        return (
            <main className="content">
                <ProductList />
            </main>)
    }
}

export default Content;

