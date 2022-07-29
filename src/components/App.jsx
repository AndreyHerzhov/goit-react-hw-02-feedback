import React, { Component } from "react";
import FeedbackOptions from "./atoms/FeedbackOptions/FeedbackOptions";
import { Section, StatisticTitle} from "../components/molecules/Section/Section.styled"
import Statistica from "./molecules/Section/Section"
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

  handleClick = (key) => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1
      }
    })
  }

 
  render() {
    console.log(Object.keys(this.state))
    console.log(Object.values(this.state))
    console.log(Object.entries(this.state))
    const { good, neutral, bad } = this.state;
    return (
     <>  
       
      <Section>
        <StatisticTitle>Please leave feedback</StatisticTitle>
        {Object.keys(this.state).map(key => {
          return <FeedbackOptions options={key}  key={key} onLeaveFeedback={() => this.handleClick(key)}/>
        })}
 
        {this.countTotalFeedback() > 0 && (
         <Statistics>

        {/* {Object.entries(this.state).map(el => {
          return <Wrapper key={el[0]}>
                      <ValueTitle title={el[0]}/>
                      <Value  value={el[1]} />
                  </Wrapper>
        })} */}
        
        <Statistica good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={this.countTotalFeedback()} 
                    positivePercentage={this.countPositiveFeedbackPercentage()} 
                    />
 
        </Statistics>
          
      )}
       
      </Section>
              
  </> 
    );
  }
}

 

const Statistics  = styled.div`
 
`;

export default App;