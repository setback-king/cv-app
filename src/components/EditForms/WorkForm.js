import React, { Component } from 'react'


export class WorkForm extends Component {

  


  render() {

   const workInfo = this.props.work
  
   //const placeHolders = ["Date Started", "Date Until", "Job Position", "Company", "Address (city)"]
   //mapping over this doesn't work. this.props.changeWork function calls a type error. 
   /*const workElements = item.map(item => {
   return Object.keys(item).map(function(key, nanoid() {
      return (

        <input type="text" key={nanoid()} value={item[key]} name={key} onChange={(e) => this.props.changeWork(e.target.name, e.target.value)} placeholder={placeHolders[nanoid(]}/>
  
      )
    });
   
   })
   */
   const { changeWork, deleteEntry, add } = this.props
   
  
    return (
      <div>
        <h3 className="form">Experience</h3>
        {workInfo.length === 0 ? <button className="addBack" onClick={add}>Add</button> : null}
        {workInfo.map((item, index) => {
         return ( <div key={item.key} className="form">
            <input type="text" id={item.key} name="dateBegin" placeholder="Date Started" value={item.dateBegin} onChange={(e) => changeWork(e.target.name, e.target.value, e.target.id)}/>
            <input type="text" id={item.key} name="dateEnd" placeholder="Date Until" value={item.dateEnd} onChange={(e) => changeWork(e.target.name, e.target.value, e.target.id)}/>
            <input type="text" id={item.key} name="position" placeholder="Job Position" value={item.position} onChange={(e) => changeWork(e.target.name, e.target.value, e.target.id)}/>
            <input type="text" id={item.key} name="companyName" placeholder="Company" value={item.companyName} onChange={(e) => changeWork(e.target.name, e.target.value, e.target.id)}/>
            <input type="text" id={item.key} name="city" placeholder="Address (city)" value={item.city} onChange={(e) => changeWork(e.target.name, e.target.value, e.target.id)}/>
            <div className="buttons">
              <button className="delete" id={index} name="work" onClick={(e) => deleteEntry(e.target.id, e.currentTarget.name)}>Delete</button>
              {index === workInfo.length - 1 ? <button className="add" onClick={add}>Add</button> : ''} 
            </div>
          </div>
         )})}
       

      </div>
     
    )
  }
}

export default WorkForm