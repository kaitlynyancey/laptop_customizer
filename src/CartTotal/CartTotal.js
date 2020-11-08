import React, { Component } from 'react';
import './CartTotal.css';

class CartTotal extends Component {
    render() {
        const total = Object.keys(this.props.selection).reduce(
            (acc, curr) => acc + this.props.selection[curr].cost,
            0
          )
        return (
            <div className="CartTotal">
                {this.props.currency.format(total)}
            </div>)
    }
}

export default CartTotal;