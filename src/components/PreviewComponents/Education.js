import React, { Component } from 'react'
import "./Components.css"

export class Education extends Component {

  render() {

    const educationInfo = this.props.education

    const educationElements = educationInfo.map(item => {
      return (
        <div key={item.key} className="compElement">
          <div className="dates">
          <span className="work--details">{item.dateBegin}</span> -
          <br />
          <span className="work--details">{item.dateEnd}</span>
          </div>
          <div className="company">
          <span className="work--details">{item.schoolName},</span>
          <span style={{marginLeft: "5px"}}className="work--details">{item.city}</span>
          <br />
          <span className="details">Degree: {item.degree}</span>
          <br />
          <span className="details">Subject: {item.subject}</span>

          </div>

      </div>
      )
    })

    return (
      <div className="general--wrapper">
      <h4>Education</h4>
      <hr />
      {educationElements}
      
    </div>
    )
  }
}

export default Education