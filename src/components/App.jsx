import React, { Component } from "react";
import FeedbackOptions from "./atoms/FeedbackOptions/FeedbackOptions";
import { StatisticTitle} from "./molecules/Statistics/Statistics.styled"
import Statistics from "./molecules/Statistics/Statistics"
import Notification from "./atoms/Notification/Notification";
// import Section from "./atoms/Section/Section"
import styled from "styled-components";

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
    // console.log(Object.keys(this.state))
    // console.log(Object.values(this.state))
    // console.log(Object.entries(this.state))
    const { good, neutral, bad } = this.state;
    const stateKeysArr = Object.keys(this.state)
    return (
     <>  
       
       <FeedbackCard>
        <StatisticTitle>Please leave feedback</StatisticTitle>
        <FeedbackOptions 
                   options={stateKeysArr} 
                   onLeaveFeedback={this.handleClick}/>

        {/* {Object.keys(this.state).map(key => {
          return <FeedbackOptions 
                  options={key} 
                  key={key} onLeaveFeedback={() => this.handleClick(key)}/>
        })} */}
        {!this.countTotalFeedback() > 0 && (
          <Notification message="There is no feedback"/>
        )}
        

        {this.countTotalFeedback() > 0 && (
         
        <StatisticWrapper>
         
        <Statistics good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={this.countTotalFeedback()} 
                    positivePercentage={this.countPositiveFeedbackPercentage()} 
                    />
        </StatisticWrapper>
        
          
      )}
       
       </FeedbackCard>
              
  </> 
    );
  }
}


export default App;
 
const FeedbackCard = styled.div`
margin: 50px;
padding: 20px;
text-align: center;
width: 320px;
height: 500px;
background-color: #85d093;
border-radius: 20px;
`

const StatisticWrapper = styled.div`
  width: 320px;
  height: 300px;
`



         /* {Object.entries(this.state).map(el => {
          return <Wrapper key={el[0]}>
                      <ValueTitle title={el[0]}/>
                      <Value  value={el[1]} />
                  </Wrapper>
        })} */ 