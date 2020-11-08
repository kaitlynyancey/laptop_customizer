import React, { Component } from 'react';
import './FeatureSelect.css';
import FeatureOptions from '../FeatureOptions/FeatureOptions'



class FeatureSelect extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              return (
                  <FeatureOptions
                    item={item}
                    feature={feature}
                    selection={this.props.selection}
                    handleUpdate={this.props.handleUpdate}
                    currency={this.props.currency}
                     />
              );
            });
            return (
                <fieldset className="feature" key={featureHash}>
                  <legend className="feature__name">
                    <h3>{feature}</h3>
                  </legend>
                  {options}
                </fieldset>
              );
        });
        return (
            <div className="features">
                {features}
            </div>
        )
    }
}

export default FeatureSelect;