import { NotificationTitle } from "./Notification.styled";
import PropTypes from "prop-types" 


export const Notification = ({ message }) => {
    return (
        <NotificationTitle>{message}</NotificationTitle>
    );
  };
  
 
export default Notification

Notification.propTypes = {
  message: PropTypes.string.isRequired
}    
 
