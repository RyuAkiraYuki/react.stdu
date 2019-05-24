import React, { Component } from 'react';

class AreaElements extends Component {
  render() {
    return this.props.structure.map((element) => (
      <div className="element-block">
        <div className="el-block-title">
          {element.title}
        </div>
      </div>
    ));
  }
}

export default AreaElements;
