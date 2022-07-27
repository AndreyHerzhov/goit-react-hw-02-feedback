import React, {Component} from "react";
import { Button } from "./Button.styled";
import styled from "styled-components";

class Statistic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bgColor: 'yellow'
      }
      this.onShow = this.onShow.bind(this)
    }
  
  
  
    render() {
      console.log(this.state);
      return (
         <>

          <Button></Button>
          <Button></Button>
          <Button></Button>         
          
          </>
      );
    }
  }
  
  
 export default Statistic

 