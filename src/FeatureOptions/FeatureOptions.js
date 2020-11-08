import React, { Component } from 'react';
import './FeatureOptions.css';
import slugify from 'slugify';


class FeatureOptions extends Component {
    render() {
        const itemHash = slugify(JSON.stringify(this.props.item));
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.props.selection[this.props.feature].name}
                    onChange={e => this.props.handleUpdate(this.props.feature, this.props.item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {this.props.item.name} ({this.props.currency.format(this.props.item.cost)})
                  </label>
            </div>
        )
    }
}

export default FeatureOptions;