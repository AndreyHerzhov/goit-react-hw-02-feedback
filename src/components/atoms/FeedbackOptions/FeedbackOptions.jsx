import { OptionButton } from './FeedbackOptions.styled'

import React, { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return <OptionButton onClick={onLeaveFeedback} name={options}>{options}</OptionButton>;
  }
}

export default FeedbackOptions;