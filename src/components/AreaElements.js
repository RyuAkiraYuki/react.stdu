import React, { Component } from 'react';
import StylesBlock from './StylesBlock';

class AreaElements extends Component {
  render() {
    console.log('AreaElements => structure: ',this.props.structure);
    if(!this.props.structure) return null;
    return this.props.structure.map((element) => (
      <div key={element.id} className="area-element-block">
        <div className="el-block-title">
          {element.title}
        </div>
        <StylesBlock
          selector={{
            areaSelector: element.cssSelector,
            areaElementName: element.element
          }}
          styles={element.styleProps}
        />
        <AreaElements structure={element.elements} />

        {/* <button className="submit-area-button" onClick={this.areaSubmitHandler}>Submit Area</button> */}
      </div>
    ));
  }
}

export default AreaElements;
