import React , {Component} from 'react';
import CCItem from './CCItem';

export default class CCItems extends Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <div>
                <br />
                <h5>Choose your items</h5>
                {
                    this.props.availableItemsList.map((item)=><CCItem item={item} addToCart={this.props.addToCart} available={true} />)
                }

                
            </div>
        )
    }

}