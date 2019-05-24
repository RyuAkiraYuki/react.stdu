import React, { Component } from 'react';

class AreaElements extends Component {
  render() {
    return this.props.pickerz.map((picker)=>(
        <li key={picker.id} className={'tool-item ' + picker.type} >{picker.title}</li>
    ));
  }
}

export default AreaElements;
