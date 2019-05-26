import React, { Component } from 'react';
import StyleProperties from './StyleProperties';

class StylesBlock extends Component {
  render() {
    if(!this.props.styles) return null;
    return (
      <div className="styles-block">
        <StyleProperties selector={this.props.selector}  styles={this.props.styles} />
      </div>
    )
  }
}

export default StylesBlock;
