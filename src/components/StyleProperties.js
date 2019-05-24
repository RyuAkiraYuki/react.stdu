import React, { Component } from 'react';
import StyleProperty from './StyleProperty';

class StyleProperties extends Component {
  render() {
    console.log('StyleProperties', this.props);
    if (this.props.styles) {
      return this.props.styles.map((property) => (
        <div className="styles-block">
          <StyleProperty structure={property} />
        </div>
      ))
    } else {
      return '';
    }


  }
}

export default StyleProperties;
