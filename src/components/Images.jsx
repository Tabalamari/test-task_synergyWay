import React, { Component } from 'react';

class Images extends React.Component {
    render() {
        return (
            <img src={this.props.src} />
        )
    }
}

export default Images;