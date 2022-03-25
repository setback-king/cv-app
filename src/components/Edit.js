import React, { Component } from 'react'
import EducationForm from "./EditForms/EducationForm"
import PersonalForm from "./EditForms/PersonalForm"
import WorkForm from "./EditForms/WorkForm"

// inputs go in here 
export class Edit extends Component {
 

  render() {

    const { personal, onChange, work, education, changeEducation, changeWork, deleteEntry, add, addEducation } = this.props
    return (
        <div className="componentInputs">
          <PersonalForm personal={personal} onChange={onChange} />
          <WorkForm work={work} changeWork={changeWork} deleteEntry={deleteEntry} add={add} />
          <EducationForm education={education} changeEducation={changeEducation} deleteEntry={deleteEntry} addEducation={addEducation} />
          

         
       
        </div>
    )
  }
}

export default Edit