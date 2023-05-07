import React, { useState, useContext } from "react";
import Alert from "../Alert";
import { useNavigate } from "react-router-dom";
import UserContext from "../auth_forms/UserContext";
import api from '../api';


// user log in form
// allows user to log in and shows companies and jobs

function LoginForm() {
  const navigate = useNavigate();
  const { setToken, setUserName } = useContext(UserContext);

  const InitialState = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(InitialState);
  const [formErrors, setFormErrors] = useState([]);

  //  handle log in form submission

  async function handleLoginSubmit(e) {
    e.preventDefault();
    let res;
    try {
      res = await api.login(formData);

      // Set res JWT token within local storage
      localStorage.setItem("session", res);
      localStorage.setItem("username", formData.username);
      setToken(res);
      setUserName(formData.username);

      navigate("/companies");
    } catch (errors) {
      setFormErrors(res.errors);
    }
  }

  // updating form information

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };
  return (
    <div>
      <h4> Log In Here </h4>
      <div>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
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
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          {formErrors.length ? (
            <Alert type="danger" messages={formErrors} />
          ) : null}

          <button
            className="btn btn-primary float-right"
            onSubmit={handleLoginSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
