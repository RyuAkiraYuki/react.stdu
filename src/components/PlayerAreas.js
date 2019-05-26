import React, { Component } from 'react';
import AreaElements from './AreaElements';
import StylesBlock from './StylesBlock';

class PlayerAreas extends Component {
  render() {
    console.log('Player area elements => ', this.props.areas);
    if(!this.props.areas) return null;
    return this.props.areas.map((area) => (
      <div key={area.id} className={'tool-area-layer ' + area.layer}>
        <div className="area-layer-title">{area.title}</div>
        <StylesBlock styles={area.styleProps} />
        <AreaElements structure={area.elements} />

      </div>
    ));
  }
}

export default PlayerAreas;
