import React, { Component } from "react";
import { StatisticValue } from "./Statistics.styled"


class Value extends Component {
  render() {
    const { value } = this.props;
    return <StatisticValue>{value}</StatisticValue>;
  }
}

export default Value;