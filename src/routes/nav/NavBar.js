import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
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
        View Companies
    </NavLink>
    <br></br>
    <a href="/jobs" >
      Jobs
    </a>
    <br></br>
    <a href="/profile" >
      Profile
    </a>
  </div>
  )
}

export default NavBar