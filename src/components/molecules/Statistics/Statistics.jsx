import React, { Component } from "react";
import Value from "../../atoms/Values/Value"
import ValueTitle from '../../atoms/ValueName/ValueName'
 
import styled from "styled-components";

class Statistics extends Component {
    
    render() {
      const { good, neutral, bad, total, positivePercentage} = this.props;
             
      return (
       <>  
       <StatisticsWrapper>
          <ValueWrapper>
             <ValueTitle title="Good:"/>
             <Value value={good} />
          </ValueWrapper>

          <ValueWrapper>
             <ValueTitle title="Neutral:"/>
             <Value value={neutral} />
          </ValueWrapper>

          <ValueWrapper>
             <ValueTitle title="Bad:"/>
             <Value value={bad} />
          </ValueWrapper>  

          <ValueWrapper>
             <ValueTitle title="Total:"/>
             <Value value={total} />
          </ValueWrapper>
          <ValueWrapper>
             <ValueTitle title="Positive feedback:"/>
             <Value value={positivePercentage} />
             <ValueTitle title="%"/>
          </ValueWrapper>
          </StatisticsWrapper>
    </> 
      );
    }
  }

const ValueWrapper = styled.div`
   
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

const StatisticsWrapper  = styled.div`
 
`;

 
  
export default Statistics  ;