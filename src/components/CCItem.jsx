import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import '../css/CCItem.css';


export default class CCItem extends Component {
    constructor(props) {
        super(props);
    }

    add = () => {
        this.props.addToCart(this.props.item);
    }
    remove = () => {
        this.props.removeFromCart(this.props.item);
    }

    render() {
        if (this.props.available) {
            return (

                <div>
                    <Card className='availableCard'>
                        <Card.Img variant="top" className='availableImg' src={this.props.item.imgUrl} />
                        <Card.Body>
                            <Card.Title>{this.props.item.name}</Card.Title>
                            <Card.Text>price: {this.props.item.price} &#x20AC;</Card.Text>
                            <Button variant="primary" onClick={this.add}>Add</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div>
                        <Card className='cartCard'>
                            <Card.Img variant="top" className='cartImg' src={this.props.item.imgUrl} />
                            <Button onClick={this.remove}>X</Button>
                        </Card>
                    </div>
                </div>
            )
        }

    }

}