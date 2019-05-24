import React, { Component } from 'react';

class AreaElements extends Component {
  render() {
    console.log(this.props.structure);
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
