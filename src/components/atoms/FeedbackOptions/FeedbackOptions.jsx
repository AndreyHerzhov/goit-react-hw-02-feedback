import { OptionButton } from './FeedbackOptions.styled'
import PropTypes from "prop-types"
 

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
    {options.map(el => 
    <OptionButton 
            onClick={onLeaveFeedback} 
            key={el} name={el}>{el}
      </OptionButton>
    )}
    
    </>
  );
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired
 
} 

   