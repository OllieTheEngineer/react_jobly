import React, {useState} from 'react';
import api from '../api';
// import UserContext from '../auth_forms/UserContext';

function Profile() {
  const InitialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  const [ formData, setFormData ] = useState(InitialState);
  const [ formErrors, setFormErrors] = useState(null)

  async function handleSubmit(evt){
    evt.preventDefault();

    let profileInfo = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    }
    let username = formData.username;
    let updateUser;
    try {
      updateUser = await api.saveProfile(username, profileInfo);

      // Set res JWT token within local storage
      localStorage.setItem("session", updateUser);
      localStorage.setItem("username", formData.username,
                            "first_name", formData.firstName,
                            "last_name", formData.lastName,
                            "email", formData.email);
    } catch (errors) {
      setFormErrors(updateUser.errors);
    }
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Username</label>
            <input
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>
          <div>
        <label>First Name</label>
            <input
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="firstName"
              required
            />
          </div>
          <div>
        <label>Last Name</label>
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
            <label>Email</label>
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
        <button>Save Changes </button>
      </form>
    </div>
  )
}

export default Profile