import React, { Component } from "react";
import Edit from "./components/Edit";
import Preview from "./components/Preview";
import { nanoid } from "nanoid";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "Benjamin Zentek",
        job: "Junior Web Developer",
        photo: "./dog.jpg",
        address: "10 Willow Avenue",
        city: "Belmont",
        state: "Wisconsin",
        phone: "860XXXXX39",
        email: "webdev@setback.com",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas.",
      },
      work: [
        {
          dateBegin: "Jan 2020",
          dateEnd: "March 2022",
          position: "Manager",
          companyName: "Cabbage Farms",
          city: "Madison",
          key: nanoid(),
        },
      ],
      education: [
        {
          dateBegin: "September 2011",
          dateEnd: "May 2015",
          schoolName: "Florida State University",
          city: "Tallahasee",
          degree: "Bachelor",
          subject: "Management",
          key: nanoid(),
        },
      ],
    };
    this.changeEducation = this.changeEducation.bind(this);
    this.changeWork = this.changeWork.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  handleChange(name, value) {
    console.log(name);

    this.setState((prevValue) => {
      return { ...prevValue, general: { ...prevValue.general, [name]: value } };
    });
  }

  changeEducation(name, value, id) {
    this.setState((prevValue) => {
      return {
        ...prevValue,
        education: [...prevValue.education].map((item) => {
          if (item.key === id) {
            return { ...item, [name]: value };
          } else {
            return item;
          }
        }),
      };
    });
  }

  changeWork(name, value, id) {
    this.setState((prevValue) => {
      return {
        ...prevValue,
        work: [...prevValue.work].map((item) => {
          if (item.key === id) {
            return { ...item, [name]: value };
          } else {
            return item;
          }
        }),
      };
    });
  }

  addEducation() {
    this.setState((prevValue) => {
      return {
        ...prevValue,
        education: [
          ...prevValue.education,
          {
            dateBegin: "",
            dateEnd: "",
            schoolName: "",
            degree: "",
            subject: "",
            key: nanoid(),
          },
        ],
      };
    });
  }

  addExperience() {
    this.setState((prevValue) => {
      return {
        ...prevValue,
        work: [
          ...prevValue.work,
          {
            dateBegin: "",
            dateEnd: "",
            position: "",
            companyName: "",
            city: "",
            key: nanoid(),
          },
        ],
      };
    });
  }

  // this class function determines which object in state to focus on, based on which button was clicked. allows me to share same function
  deleteEntry(id, name) {
    name === "education"
      ? this.setState((prevValue) => {
          let newData = prevValue.education.slice(); //copy array from prevValue
          newData.splice(id, 1);
          return { ...prevValue, education: [...newData] };
        })
      : this.setState((prevValue) => {
          let newData = prevValue.work.slice(); //copy array from prevValue
          newData.splice(id, 1);
          return { ...prevValue, work: [...newData] };
        });
  }

  /* another way of using deleteEntry function with if statements instead of the ternary above ^
   if (name === "education") {
   console.log(name)
   this.setState(prevValue => {
    let newData = prevValue.education.slice() //copy array from prevValue
    newData.splice(id, 1)
     return {...prevValue,
            education: [...newData]}      
   })
   }
   else {
    this.setState(prevValue => {
      let newData = prevValue.work.slice() //copy array from prevValue
      newData.splice(id, 1)
       return {...prevValue,
              work: [...newData]}      
     })
   }
 }
*/

  render() {
    console.log(this.state.general);
    const { general, education, work } = this.state;

    return (
      <div className="container">
        <Edit
          personal={general}
          onChange={this.handleChange}
          changeEducation={this.changeEducation}
          changeWork={this.changeWork}
          addEducation={this.addEducation}
          add={this.addExperience}
          deleteEntry={this.deleteEntry}
          education={education}
          work={work}
        />
        <div className="generatedInfo">
          <Preview
            name={general.name}
            job={general.job}
            general={general}
            education={education}
            work={work}
          />
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
