import React, { Component } from 'react';
import StylePropertyPicker from './StylePropertyPicker';

class StyleProperties extends Component {
  render() {
    console.log('StyleProperties => structure: ', this.props.styles);
    if (this.props.styles) {
      return this.props.styles.map((property) => (
          <div key={property.id} className="property-block">
            <span className="property-name">{property.propertyName}</span>:  <StylePropertyPicker selector={this.props.selector} structure={property} />
          </div>
      ))
    } else {
      return '';
    }


  }
}

export default StyleProperties;
