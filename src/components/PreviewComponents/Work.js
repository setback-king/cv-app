import React, { Component } from "react";
import "./Components.css";

export class Work extends Component {
  render() {
    const workInfo = this.props.work;
    const workElements = workInfo.map((item) => {
      return (
        <div key={item.key} className="compElement">
          <div className="dates">
            <span className="work--details">{item.dateBegin}</span> -
            <br />
            <span className="work--details">{item.dateEnd}</span>
          </div>
          <div className="company">
            <span className="work--details">{item.position}</span>
            <br />
            <span className="details">{item.companyName},</span>
            <span style={{ marginLeft: "5px" }} className="details">
              {item.city}
            </span>
          </div>
        </div>
      );
    });

    return (
      <div className="general--wrapper">
        <h4>Experience</h4>
        <hr />
        {workElements}
      </div>
    );
  }
}

export default Work;
