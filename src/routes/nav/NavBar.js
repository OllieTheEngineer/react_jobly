import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import UserContext from '../../auth_forms/UserContext';

function NavBar({logout}) {
const { currentUser } = useContext(UserContext)
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light">
    <div class="container-fluid">
      <div class="navbar-brand text-primary">Jobly</div>
    <NavLink to="/" >
        HomePage
    </NavLink>
    <br></br>
    <NavLink to="/signup" >
        SignUp
    </NavLink>
    <br></br>
    <NavLink to="/login" >
        Login
    </NavLink>
    <br></br>
    <NavLink to="/companies" >
        Companies
    </NavLink>
    <br></br>
    <NavLink to="/jobs" >
      Jobs
    </NavLink>
    <br></br>
    <NavLink to="/profile" >
      Profile
    </NavLink>
    <br></br>
    <NavLink to="/" onClick={logout}>
        log out {currentUser}
    </NavLink>
  </div>
  </nav>
  )
}

export default NavBar