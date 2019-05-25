import React, { Component } from 'react';
import StyleProperties from './StyleProperties';

class AreaElements extends Component {
  render() {
    console.log('AreaElements => structure: ',this.props.structure);
    return this.props.structure.map((element) => (
      <div key={element.id} className="area-element-block">
        <div className="el-block-title">
          {element.title}
        </div>
        {(() => {
            if (element.styleProps) {
              return (
                <div className="styles-block">
                  <StyleProperties styles={element.styleProps} />
                </div>
              ) 
            }
          })()}
          {(() => {
            if (element.elements) {
              return (
                <AreaElements structure={element.elements} />
              ) 
            }
          })()}
      </div>
    ));
  }
}

export default AreaElements;
