import React, { Component } from "react";
import FeedbackOptions from "./atoms/FeedbackOptions/FeedbackOptions";
import Statistics from "./molecules/Statistics/Statistics"
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
      console.log(positiveFeedbackPercentage)
      return positiveFeedbackPercentage
    }
    
  }

  handleClick = (e) => {
    console.log(e.target.name)
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
          
      
        {!this.countTotalFeedback() > 0 && (
          <Notification message="There is no feedback"/>
        )}
        
        {this.countTotalFeedback() > 0 && (
         
        <Section title="Statistics">
         
            <Statistics good={good} 
                        neutral={neutral} 
                        bad={bad} 
                        total={this.countTotalFeedback()} 
                        positivePercentage={this.countPositiveFeedbackPercentage()} 
                        />
        </Section>
        
          
      )}
       
     
              
  </> 
    );
  }
}


export default App;
 
 


//         Доброго дня!
// Перечитайте, будь ласка, уважно завдання і проведіть рефакторинг: 
// у вас має бути рівно така кількість компонентів і з такими назваи (якщо вони вказані), 
// як передбачено в завданні).
// Компонентами-класами зробіть лише компоненти зі стейтом.
// Стилі завжди мають бути в окремому файлі.
// Допрацюйте, після чого будуть надані більш точкові коментарі.