import styled from "styled-components";

 
  
 

export const OptionButton = styled.button`
border: none;
 height: 25px;
 width: 70px;
 color: black;
 border-radius: 10px;
 margin-left: 15px;
 background-color: initial;
background-image: linear-gradient(-180deg, #FF7E31, #E62C03);
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
color: black;
cursor: pointer;
transition: box-shadow .2s;
 &:hover{
      box-shadow: rgba(253, 76, 0, 0.5) 0 3px 8px;
    background-color: darkblue;
    color: white;
  &:active{
      transform: translateY(2px);
  }  
 }
`
export const OptionButtonWrapper = styled.div`
      margin-top: 15px;
      width: 200px;
      height: 50px;
      display: flex;
`