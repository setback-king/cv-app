import React, { Component } from "react";
import dog from "./dog.jpg";

export class Sidebar extends Component {
  render() {
    const personalInfo = this.props.personal;

    const { photo, address, city, state, phone, email } = personalInfo;

    return (
      <div className="general--wrapper">
        <div className="photo">
          <img src={dog} alt="" />
        </div>
        <h4>Personal Details</h4>
        <hr />
        <h5 className="personalDetails">Address</h5>
        <span className="details">{address}</span>
        <br />
        <span className="details">{city}</span>,
        <span className="statedetails">{state}</span>
        <h5 className="personalDetails">Phone Number</h5>
        <span className="details">{phone}</span>
        <h5 className="personalDetails">Email</h5>
        <span className="details">{email}</span>
      </div>
    );
  }
}

export default Sidebar;
