import React, { Component } from 'react';
import { returnStatement } from '@babel/types';
import CCItem from './CCItem';

export default class CCItemsInCart extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <br />
                <h5>items in cart:</h5>
                <h6>Total price: {this.props.totalPrice} &#x20AC;</h6>
                {
                    this.props.itemsInCart.map((item) => <CCItem item={item} removeFromCart={this.props.removeFromCart} available={false} />)
                }

                



            </div>
        )
    }



}