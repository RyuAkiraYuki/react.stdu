import React, { Component } from 'react';

class StyleProperty extends Component {
  render() {
    console.log('StyleProperty',this.props.structure);
    if(this.props.structure){
      return Object.entries(this.props.structure).map(([name,value]) => (
        <div className="property-block">
          <span className="property-name">
            {name}
          </span> : 
          <span className="property-value">
            {value}
          </span>
        </div>
      ))
    } else {
      return '';
    }
     

  }
}

export default StyleProperty;
