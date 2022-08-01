import { OptionButton } from './FeedbackOptions.styled'
 

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