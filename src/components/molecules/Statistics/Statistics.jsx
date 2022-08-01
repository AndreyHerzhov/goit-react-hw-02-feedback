 
import Value from "../../atoms/Values/Value"
import ValueTitle from '../../atoms/ValueName/ValueName'
import {StatisticsWrapper, ValueWrapper} from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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
 };
 
  
export default Statistics  ;