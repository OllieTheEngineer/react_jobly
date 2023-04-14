import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Alert from '../Alert';

//  Sign up form for users to create an account so that they can log in and utilize the app

const SignupForm = () => {
  const history = useHistory();

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
    let res = await SignupForm(formData);
    if(res.sucess) {
        history.push('/companies');
    } else {
        setFormErrors(res.errors);
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
    <form onSubmit={handleSignUp}>
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
      {formErrors.length? <Alert type="danger" messages={formErrors} />
      : null
      }
        <button onSubmit={handleSignUp}type='submit'> Sign Up</button>
    </form>
  )
}

export default SignupForm;