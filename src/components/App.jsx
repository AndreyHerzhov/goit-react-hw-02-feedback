import React, { Component } from "react";
import FeedbackOptions from "./atoms/FeedbackOptions/FeedbackOptions";
import { Section, StatisticTitle} from "../components/molecules/Section/Section.styled"
// import Value from "./atoms/Values/Statistics"; 
// import ValueTitle from "./atoms/ValueName/ValueName";
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
    console.log(good)
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


         {/* <Wrapper>
             <ValueTitle title="Good:"/>
             <Value value={good} />
          </Wrapper>

          <Wrapper>
             <ValueTitle title="Neutral:"/>
             <Value value={neutral} />
          </Wrapper>

          <Wrapper>
             <ValueTitle title="Bad:"/>
             <Value value={bad} />
          </Wrapper> */}

          {/* <Wrapper>
             <ValueTitle title="Total:"/>
             <Value value={this.countTotalFeedback()} />
          </Wrapper>
          <Wrapper>
             <ValueTitle title="Positive feedback:"/>
             <Value value={this.countPositiveFeedbackPercentage()} />
             <ValueTitle title="%"/>
          </Wrapper> */}
         </Statistics>
          
      )}
       
      </Section>
              
  </> 
    );
  }
}

// const Wrapper = styled.div`
   
//     padding: 2px;
//     border-radius: 10px;
//     display: flex;
//     justify-items: center;
//     justify-content: center;
//     align-items: center;
//     margin-top: 50px;
//     height: 30px;
//     background-color: #e2efc0;
//     border: 1px solid black;
// `;

const Statistics  = styled.div`
 
`;

export default App;