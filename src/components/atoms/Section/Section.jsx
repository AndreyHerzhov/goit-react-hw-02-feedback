 
import { SectionWrapper, SectionTitle } from "./Section.styled";
import PropTypes from "prop-types"
 

export const Section = ({ title, children }) => {
    return (
            <SectionWrapper>
                <SectionTitle>{title}</SectionTitle>
                {children}
            </SectionWrapper>
    );
  };

 
 export default Section

 Section.propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.element.isRequired
    
    }
         
