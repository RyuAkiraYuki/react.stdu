import React, { Component } from 'react';
// import { SketchPicker } from 'react-color';
import ColorPicker from 'rc-color-picker';
// import FontPicker from "font-picker-react";
import DOMManipulatons from '../tools/domManipulations';

import 'rc-color-picker/assets/index.css';

let domMethods = new DOMManipulatons();

class StylePropertyPicker extends Component {
  state = {
    currentValue: this.props.structure.propertyValue,
    selector: this.props.selector
  }

  colorPickHandler = (color) => {
    this.setState({ currentValue: color.color });
  }

  inputFieldChangeHandler = (evt) => {
    this.setState({ currentValue: evt.target.value });
  }
  submitBtnHandler = () => {
    if(!this.state.selector) return;
    let styleContainerId = this.props.selector.areaElementName+'-'+this.props.structure.propertyName+'-'+this.props.structure.id;
    
    domMethods.UpdateStyle(styleContainerId,`${this.state.selector.areaSelector} {
      ${this.props.structure.propertyName}:${this.state.currentValue};
    }`)
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
          <button className="submit-area-button" onClick={this.submitBtnHandler}>Submit property</button>
        </span>

      )
      // case ('font'): return (
      //   <FontPicker activeFontFamily={ property.propertyValue } onChangeComplete={this.colorPickHandler} />
      // )
      default: return (
        <span className="picker-block">
          <input className="property-value default" value={this.state.currentValue} onChange={this.inputFieldChangeHandler} />
          <button className="submit-area-button" onClick={this.submitBtnHandler}>Submit property</button>
        </span>
        
      )
    }
  }
}

export default StylePropertyPicker;
