import React, { Component } from 'react';
import AreaElements from './AreaElements';
import StyleProperties from './StyleProperties';

class PlayerAreas extends Component {
  render() {
    return this.props.areas.map((area) => (
      <div key={area.id} className={'tool-area-layer ' + area.layer}>
        <div className="area-layer-title">{area.title}</div>
        {(() => {
            if (area.styleProps) {
              return (
                <div className="styles-block">
                  <StyleProperties styles={area.styleProps} />
                </div>
              ) 
            }
          })()}

        <AreaElements structure={area.elements} />

      </div>
    ));
  }
}

export default PlayerAreas;
