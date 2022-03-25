import React, { Component } from 'react'


export class EducationForm extends Component {



  render() {

    const educationInfo = this.props.education
    const { changeEducation, deleteEntry, addEducation } = this.props

    
    
    return (
    <div className="edForm">
      <h3 className="form">Education</h3>
      {educationInfo.length === 0 ? <button className="addBack" onClick={addEducation}>Add</button> : null}
      {educationInfo.map((item, index) => {
      return (
      <div className="form" key={item.key}>
        <input type="text" name="dateBegin" id={item.key} placeholder="Date Started" value={item.dateBegin} onChange={(e) => changeEducation(e.target.name, e.target.value, e.target.id)}/>
        <input type="text" name="dateEnd" id={item.key} placeholder="Date Until" value={item.dateEnd} onChange={(e) => changeEducation(e.target.name, e.target.value, e.target.id)}/>
        <input type="text" name="schoolName" id={item.key} placeholder="School" value={item.schoolName} onChange={(e) => changeEducation(e.target.name, e.target.value, e.target.id)}/>
        <input type="text" name="city" id={item.key} placeholder="Location (city)" value={item.city} onChange={(e) => changeEducation(e.target.name, e.target.value, e.target.id)}/>
        <input type="text" name="degree" id={item.key} placeholder="Degree Level" value={item.degree} onChange={(e) => changeEducation(e.target.name, e.target.value, e.target.id)}/>
        <input type="text" name="subject" id={item.key} placeholder="Concentration" value={item.subject} onChange={(e) => changeEducation(e.target.name, e.target.value, e.target.id)}/>
        <div key={index} className="buttons">
          <button className="delete" id={index} name="education" onClick={(e) => deleteEntry(e.target.id, e.currentTarget.name)}>Delete</button>
          {index === educationInfo.length - 1 ? <button className="add" onClick={addEducation}>Add</button> : null}
        
          
        </div>
      </div>
      )
      })}
      
    </div>
    )
  }
}

export default EducationForm