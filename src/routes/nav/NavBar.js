import React from 'react';
// import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <a href='/'> Homepage </a>
    {/* <NavLink to="/" >
        HomePage
    </NavLink> */}
    <br></br>
    <a href="/signUp" >
      Signup
    </a>
    <br></br>
    <a href="/login" >
      Login
    </a>
    <br></br>
    <a href="/companies" >
      Companies
    </a>
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