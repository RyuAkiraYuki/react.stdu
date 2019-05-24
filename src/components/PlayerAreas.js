import React, { Component } from 'react';
import AreaElements from './AreaElements';
import StyleProperties from './StyleProperties';

class PlayerAreas extends Component {
  render() {
      console.log(this.props.pickerz)
    return this.props.areas.map((area)=>(
        <div key={area.id} className={'tool-item ' + area.type}>
          <div className="area-title">{area.title}</div>
          <AreaElements  structure={area.elements}/>
          <StyleProperties styles={area.styleProps}/>
        </div>
    ));
  }
}

export default PlayerAreas;
