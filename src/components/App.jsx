import React, { Component } from "react";
import FeedbackOptions from "./atoms/FeedbackOptions/FeedbackOptions";
import Statistics from "./atoms/Statistics/Statistics"
import Notification from "./atoms/Notification/Notification";
import Section from "./atoms/Section/Section"
 

 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
 
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral 
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback()
    const positive = this.state.good
    const positivePercentage = positive/totalFeedback * 100
    if(!positivePercentage) {
      return 0
    } else {
      const positiveFeedbackPercentage = positivePercentage.toFixed(0)
      return positiveFeedbackPercentage
    }
    
  }

  handleClick = (e) => {
    const key = e.target.name
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1
      }
    })
  }

 
  render() {
    const { good, neutral, bad } = this.state;
    const stateKeysArr = Object.keys(this.state)
    return (
     <>  
               
        <Section title="Please leave feedback">
              <FeedbackOptions 
                        options={stateKeysArr} 
                        onLeaveFeedback={this.handleClick}
              />
        </Section>
          
      
        {!this.countTotalFeedback() > 0
          ?  <Notification message="There is no feedback"/>
          :  <Section title="Statistics">
         
            <Statistics good={Number(good)} 
                        neutral={Number(neutral)} 
                        bad={Number(bad)} 
                        total={Number(this.countTotalFeedback())} 
                        positivePercentage={Number(this.countPositiveFeedbackPercentage())} 
                        />
            </Section>
        }
      
        
        
        
     
     
              
  </> 
    );
  }
}


export default App;
 