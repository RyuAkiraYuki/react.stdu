import React, { Component } from 'react';

class PlayerAreas extends Component {
  render() {
      console.log(this.props.pickerz)
    return this.props.pickerz.map((picker)=>(
        <li key={picker.id} className={'tool-item ' + picker.type} >{picker.title}</li>
    ));
  }
}

export default PlayerAreas;
