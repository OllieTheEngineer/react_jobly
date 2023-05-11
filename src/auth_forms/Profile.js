import React, {useState} from 'react'

function Profile() {
  const InitialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  const [ formData, setFormData ] = useState(InitialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();

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