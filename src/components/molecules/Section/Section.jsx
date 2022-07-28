import React, { Component } from "react";
import Button from "../../atoms/FeedbackOptions/FeedbackOptions";
import { Section, StatisticTitle } from "./Section.styled";
import Value from "../../atoms/Values/Statistics"
import ValueTitle from '../../atoms/ValueName/ValueName'
 
import styled from "styled-components";

class Card extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
       
    }
      
    handleGood = () => {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    };

    handleNeutral = () => {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    };

    handleBad = () => {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    };

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
    
  
    render() {
      const { title } = this.props;
      const { good, neutral, bad } = this.state;
      return (
       <>  
         
        <Section>
          <StatisticTitle>{title}</StatisticTitle>
          <Button title="good"  onClick={this.handleGood}/>
          <Button title="neutral"  onClick={this.handleNeutral}/>
          <Button title="bad" onClick={this.handleBad}/>
          {this.countTotalFeedback() > 0 && (
           <Statistics>
           <Wrapper>
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
            </Wrapper>
            <Wrapper>
               <ValueTitle title="Total:"/>
               <Value value={this.countTotalFeedback()} />
            </Wrapper>
            <Wrapper>
               <ValueTitle title="Positive feedback:"/>
               <Value value={this.countPositiveFeedbackPercentage()} />
               <ValueTitle title="%"/>
            </Wrapper>
           </Statistics>
            
        )}
         
        </Section>
                
    </> 
      );
    }
  }

const Wrapper = styled.div`
   
    padding: 2px;
    border-radius: 10px;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    height: 30px;
    background-color: #e2efc0;
    border: 1px solid black;
`;

const Statistics  = styled.div`
 
`;
  
export default Card;