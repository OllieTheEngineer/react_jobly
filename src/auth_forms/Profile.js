import React, { useState } from "react";
import api from "../api";
// import UserContext from '../auth_forms/UserContext';

function Profile() {
  const InitialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(InitialState);
  const [registeredData, setRegisteredData] = useState(null);
  const [formErrors, setFormErrors] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileInfo = {
      // username: formData.username,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };
    let username = localStorage.getItem("username");
    let updateUser;
    try {
      console.log(username, profileInfo);
      updateUser = await api.saveProfile(username, profileInfo);
      console.log(updateUser);
      setRegisteredData(updateUser);
    } catch (errors) {
      setFormErrors(updateUser.errors);
    }
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="my-4"> Please update your profile </h2>
      <form onSubmit={handleSubmit}>
      <div className="container my-4">
      <div className="row justify-content-center">
      <div className="col-md-6 col-lg-3 border shadow-light rounded p-4">
      {/* <div className="form-group">
          <label htmlFor="username"> Username: </label>
          <input
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
            autoComplete="firstName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
            autoComplete="lastName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email: </label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>
        <div className="d-grid gap-2 d-md-block my-4">
        <button className="btn btn-primary">Save Changes </button>
        </div>
        </div>
        </div>
        </div>
      </form>

      <div>
        {registeredData ? 
        <div>
          <p>Your data was saved successfully</p>
          {/* <p>Username: {registeredData.username}</p> */}
          <p>First Name: {registeredData.firstName}</p>
          <p>Last Name: {registeredData.lastName}</p>
          <p>Email: {registeredData.email}</p>
        </div> : ""}
      </div>
    </div>
  );
}

export default Profile;
