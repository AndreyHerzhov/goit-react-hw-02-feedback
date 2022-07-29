import React, { Component } from "react";
import styled from "styled-components";

class Notification extends Component{
    render() {
        const {message} = this.props
        return  (
            <NotificationTitle>{message}</NotificationTitle>

        )
    }
}
export default Notification

const NotificationTitle = styled.p`
    margin-top: 30px;
    color: #ff0000;
    font-size: 24px;
`