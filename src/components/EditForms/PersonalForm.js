import React, { Component } from "react";

export class PersonalForm extends Component {
  render() {
    //access information here, not in local state
    const personalInfo = this.props.personal;

    const {
      name,
      job,
      photo,
      address,
      city,
      state,
      email,
      phone,
      description,
    } = personalInfo;
    const { onChange } = this.props;

    /* potential way to add custom photo
     <label class="custom-file-upload">
          <input type="file" name="photo" placeholder="Photo" value={photo} onChange={(e) => onChange(e.target.name, e.target.value)}/>Upload Photo
    
          </label> 
    */

    return (
      <div className="form">
        <h3>Personal Information</h3>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={name}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="job"
          placeholder="Job title"
          value={job}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo"
          value={photo}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="address"
          placeholder="Street address"
          value={address}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={state}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
    );
  }
}

export default PersonalForm;
