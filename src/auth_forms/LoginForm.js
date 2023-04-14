import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Alert from '../Alert';

// user log in form
// allows user to log in and shows companies and jobs

function LoginForm({login}) {
const history = useHistory();

const InitialState = {
    username: "",
    password: ""
};
const [ formData, setFormData ] = useState(InitialState)
const [ formErrors, setFormErrors ] = useState([]);

//  handle log in form submission

async function handleLoginSubmit(e) {
    e.preventDefault();
    let res = await login(formData);
    if(res.success) {
        history.push('/companies');
    } else {
        setFormErrors(res.errors);
    }
}

// updating form information

const handleChange = (e) => {
    const { name, value } = e.target.value;
    setFormData(logged => ({...logged, [name]: value }));
}
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
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null}

                <button
                    className="btn btn-primary float-right"
                    onSubmit={handleLoginSubmit}
                >
                  Submit
                </button>
        </form>
    </div>
    </div>
  )
}

export default LoginForm