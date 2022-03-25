import React, { Component } from "react";
import "./Components.css";

export class General extends Component {
  render() {
    const personalInfo = this.props.personal;

    return (
      <div className="general--wrapper">
        <h4>Description</h4>
        <hr />
        <p className="description">{personalInfo.description}</p>
      </div>
    );
  }
}

export default General;
