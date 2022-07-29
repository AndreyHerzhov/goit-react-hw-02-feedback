import React, { Component } from "react";
import styled from "styled-components";

class Section extends Component {
    render() {
        const {title} = this.props
        return (
            <SectionWrapper>
            <SectionTitle>{title}</SectionTitle>
            </SectionWrapper>
        )
    }
}

const SectionTitle = styled.p`
`
const SectionWrapper = styled.div`
    width: 320px;
`

 export default Section