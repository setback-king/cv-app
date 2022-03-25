import React, { Component } from "react";
import Work from "./PreviewComponents/Work";
import Education from "./PreviewComponents/Education";
import General from "./PreviewComponents/General";
import Sidebar from "./PreviewComponents/Sidebar";

export class Preview extends Component {
  render() {
    const { name, job, general, education, work } = this.props;

    return (
      <div className="preview">
        <header>
          <div className="heading">
            <h1 className="name">{name}</h1>
            <h3 className="jobTitle">{job}</h3>
          </div>
        </header>
        <div className="wrapper">
          <div className="components">
            <General personal={general} />
            <Work work={work} />
            <Education education={education} />
          </div>
          <div className="sideBar">
            <Sidebar personal={general} />
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
