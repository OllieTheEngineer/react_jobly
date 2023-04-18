import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Alert from '../Alert';
import api from '../api'

//  Sign up form for users to create an account so that they can log in and utilize the app

const SignupForm = () => {
  const navigate = useNavigate();

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
    console.log(formData)
    let res;
    try {
        res = await api.signup(formData);
        navigate.push('/companies');
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
      <div>
        <label> First Name: </label>
        <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
        />
      </div>
      <div>
        <label> Last Name: </label>
        <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
        />
      </div>
      <div>
        <label> Username: </label>
        <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
        />
      </div>
      <div>
        <label> Email: </label>
        <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
        />
      </div>
      <div>
        <label> Password: </label>
        <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
      </div>
      {formErrors && formErrors.length? <Alert type="danger" messages={formErrors} />
      : null
      }
        <button onClick={handleSignUp}> Sign Up</button>
    </form>
  )
}

export default SignupForm;