import React, { Component } from 'react';
// import { SketchPicker } from 'react-color';
import ColorPicker from 'rc-color-picker';
// import FontPicker from "font-picker-react";

import 'rc-color-picker/assets/index.css';

class StylePropertyPicker extends Component {
  state = {
    currentValue: this.props.structure.propertyValue
  }

  colorPickHandler = (color) => {
    this.setState({ currentValue: color.color });
  }

  inputFieldChangeHandler = (evt) => {
    this.setState({ currentValue: evt.target.value });
  }
  submitBtnHandler = () => {

  }

  render() {
    console.log('StylePropertyPicker => structure: ', this.props.pickerType);
    let property = this.props.structure;
    if (!property) {
      return null;
    }

    let pickerType = property.pickerType;
    if (!pickerType) {
      pickerType = 'other';
    }
    switch (pickerType) {
      case ('color'): return (
        <span className="picker-block">
          <input className="property-value color" value={this.state.currentValue} onChange={this.inputFieldChangeHandler} />
          <ColorPicker className="" animation="slide-up" color={this.state.currentValue} onChange={this.colorPickHandler} />
        </span>

      )
      // case ('font'): return (
      //   <FontPicker activeFontFamily={ property.propertyValue } onChangeComplete={this.colorPickHandler} />
      // )
      default: return (
        <span className="picker-block">
          <input className="property-value default" value={this.state.currentValue} onChange={this.inputFieldChangeHandler} />
        </span>
        
      )
    }
  }
}

export default StylePropertyPicker;
