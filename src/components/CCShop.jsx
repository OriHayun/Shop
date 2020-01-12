import React, { Component } from 'react';
import '../css/CCShop.css';

import CCItemsInCart from './CCItemsInCart';
import CCItems from './CCItems';

export default class CCShop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            availableItemsList: this.props.itemsList,
            itemsInCart: this.props.itemsInCart,
            totalPrice: 0
        }
    }

    addToCart = (item) => {

        let newAvailableItemsList = this.state.availableItemsList;
        let cart = this.state.itemsInCart;
        cart.push(item);
        newAvailableItemsList = newAvailableItemsList.filter((i) => i.id !== item.id);
        let NewTotalPrice = this.state.totalPrice + item.price;
        this.setState({
            availableItemsList: newAvailableItemsList,
            itemsInCart: cart,
            totalPrice: NewTotalPrice
        })

    }

    removeFromCart = (item) => {
        let newAvailableItemsList = this.state.availableItemsList;
        let cart = this.state.itemsInCart;
        newAvailableItemsList.push(item);
        cart = cart.filter((i) => i.id !== item.id);
        let NewTotalPrice = this.state.totalPrice - item.price;

        this.setState({
            availableItemsList: newAvailableItemsList,
            itemsInCart: cart,
            totalPrice: NewTotalPrice
        })

    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div id="CCShop-header" className="col-12">
                        <img id="logo" src="/images/Hayun'sLogo.jpg" />
                        <h3>Welcome to Hayun's shop</h3><hr />
                    </div>
                </div>
                <div className="row">
                    <div id="cart" className="col-sm-6 col-md-4 col-lg-2">

                        <CCItemsInCart itemsInCart={this.state.itemsInCart} removeFromCart={this.removeFromCart} totalPrice={this.state.totalPrice} />

                    </div>
                    <div id="shop" className="col-sm-6 col-md-8 col-lg-10" >
                        <CCItems availableItemsList={this.state.availableItemsList} addToCart={this.addToCart} />
                    </div>
                </div>
                <div className="row">
                    <div id="footer" className="col-12"><hr/><h6>All rights reserved to Hayun's Group</h6></div>
                </div>
            </div>
        )



    }
}