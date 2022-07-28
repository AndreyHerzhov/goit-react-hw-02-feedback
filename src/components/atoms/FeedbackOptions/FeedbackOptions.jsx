import { OptionButton } from './FeedbackOptions.styled'

import React, { Component } from "react";

class Button extends Component {
  render() {
    const { title, onClick } = this.props;
    return <OptionButton onClick={onClick} name={title}>{title}</OptionButton>;
  }
}

export default Button;