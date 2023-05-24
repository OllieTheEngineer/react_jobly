import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Alert from '../Alert';
import api from '../api';
import UserContext from '../auth_forms/UserContext';


//  Sign up form for users to create an account so that they can log in and utilize the app

const SignupForm = () => {
  const navigate = useNavigate();
  const { setToken, setUserName } = useContext(UserContext);


  const [ formData, setFormData ] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  })

const [formErrors, setFormErrors ] = useState([]);

// form submission handle

async function handleSignUp(e) {
    e.preventDefault();
    console.log("Sign up here!")
    let res;
    try {
        res = await api.signup(formData);
        
        // Set res JWT token within local storage
        localStorage.setItem("session", res);
        localStorage.setItem("username", formData.username);
        setToken(res);
        setUserName(formData.username);
        navigate('/companies');
    } catch(error) {
        setFormErrors(res.errors)
    }
};

//  update form data  
  const handleChange = (e)=> {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData, [name]: value
    }))
  }


  return (
    <form>
      <h2>Please fill out the following form</h2>
      <div class="container my-3">
      <div class="row justify-content-center">
      <div class="col-md-6 col-lg-3 border shadow-light rounded p-4">
      <div class="form-group">
        <label for="email"> First Name: </label>
        <input
            id="email"
            class="form-control"
            type="text"
            name="firstName"
            placeholder='Enter first name'
            value={formData.firstName}
            onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label for="last-name"> Last Name: </label>
        <input
            id="last-name"
            class="form-control"
            type="text"
            name="lastName"
            placeholder='Enter last name'
            value={formData.lastName}
            onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label for="username"> Username: </label>
        <input
            id="username"
            class="form-control"
            type="text"
            name="username"
            placeholder='Enter username'
            value={formData.username}
            onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label for="email"> Email: </label>
        <input
            id="email"
            class="form-control"
            type="text"
            name="email"
            placeholder='Enter email'
            value={formData.email}
            onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label for="password"> Password: </label>
        <input
            id="password"
            class="form-control"
            type="text"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
        />
      </div>
      
      {formErrors && formErrors.length? <Alert type="danger" messages={formErrors} />
      : null
      }
      <div class="d-grid gap-2 d-md-block my-3">
        <button class="btn btn-success" type="button" onClick={handleSignUp}> Sign Up</button>
      </div>
      </div>
      </div>
      </div>
    </form>
  )
}

export default SignupForm;