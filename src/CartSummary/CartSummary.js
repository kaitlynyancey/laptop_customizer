import React, { Component } from 'react';
import './CartSummary.css';



class CartSummary extends Component {
    render() {
        const summary = Object.keys(this.props.selection).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selection[feature];
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {this.props.currency.format(selectedOption.cost)}
                </div>
              </div>
            );
          });
          return(
              <div className="CartSummary">
                  {summary}
              </div>
          )
    }
}

export default CartSummary;