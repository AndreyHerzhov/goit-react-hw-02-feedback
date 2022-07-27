import { ValueName }  from './ValueName.styled'

import React, { Component } from "react";

class ValueTitle extends Component {
  render() {
    const { title } = this.props;
    return <ValueName>{title}</ValueName>;
  }
}

export default ValueTitle;