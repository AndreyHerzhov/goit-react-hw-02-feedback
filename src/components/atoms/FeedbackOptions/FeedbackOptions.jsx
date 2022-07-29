import { OptionButton } from './FeedbackOptions.styled'

import React, { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props; //   options = ['good', 'neutral', 'bad']
    return (
      <>
    {options.map(el => 
    <OptionButton 
            onClick={onLeaveFeedback} 
            key={el} name={el}>{el}
            </OptionButton>
    )}
    
    </>
    )
  }
}

export default FeedbackOptions;