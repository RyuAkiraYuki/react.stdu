import React, { Component } from 'react';

class StyleProperty extends Component {
  render() {
    console.log('StyleProperty => structure: ',this.props.structure);
    if(this.props.structure){
      return Object.values(this.props.structure).map(([key,val]) => (
        <div key={key} className="property-block">
          <span className="property-name">{key}</span>: <input className="property-value" value={val} />
        </div>
      ))
    } else {
      return '';
    }
     

  }
}

export default StyleProperty;
