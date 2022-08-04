import {StatisticsWrapper, ValueWrapper,StatisticValue,ValueName} from "./Statistics.styled"
import PropTypes from "prop-types"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return (
      <>  
         <StatisticsWrapper>
            <ValueWrapper>
               <ValueName>Good</ValueName>
               <StatisticValue>{good}</StatisticValue>
            </ValueWrapper>

            <ValueWrapper>
               <ValueName>Neutral</ValueName>
               <StatisticValue>{neutral}</StatisticValue>
            
            </ValueWrapper>

            <ValueWrapper>
               <ValueName>Bad</ValueName>
               <StatisticValue>{bad}</StatisticValue>
         
            </ValueWrapper>  

            <ValueWrapper>
               <ValueName>Total</ValueName>
               <StatisticValue>{total}</StatisticValue>
            
            </ValueWrapper>
            <ValueWrapper>
               <ValueName>Positive feedback:</ValueName>
               <ValueName title="Positive feedback:"/>
               <StatisticValue>{positivePercentage}</StatisticValue>
               <ValueName>%</ValueName>
               
            </ValueWrapper>
         </StatisticsWrapper>
   </> 
   );
 };
 
  
export default Statistics  ;


 
Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positivePercentage: PropTypes.number.isRequired

}