import React, { Component } from "react";
import Value from "../../atoms/Values/Statistics"
import ValueTitle from '../../atoms/ValueName/ValueName'
 
import styled from "styled-components";

class Statistica  extends Component {
    
    render() {
      const { good, neutral, bad, total, positivePercentage} = this.props;
      console.log(good.name)
       
      return (
       <>  
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
             <Value value={total} />
          </Wrapper>
          <Wrapper>
             <ValueTitle title="Positive feedback:"/>
             <Value value={positivePercentage} />
             <ValueTitle title="%"/>
          </Wrapper>
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

 
  
export default Statistica ;