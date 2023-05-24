import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../auth_forms/UserContext';
import "./Homepage.css"
function Homepage() {
  const { username } = useContext(UserContext);
  const [ showLogin, setShowLogin ] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  return (
    <div className="Homepage">
      <div class="m-auto p-5">
      <h1> Jobly </h1>
      <p class="lead"> Your dream job is just one click away! </p>
      </div> 
      {username ? 
      <div class="container">
      <div class="border border-primary border-3">
        <h2 className="welcome">
          Welcome, { username }!
        </h2>
      </div>
      </div>
       :(
        <p>
          {showLogin ? (
            <>
            <Link to="/login">
              Log in
            </Link>
            <button onClick={handleSignupClick}>
              Sign Up!
            </button>
            </>
          ) : (
            <>
            <button onClick={handleLoginClick}>
              Log In
            </button>
            <Link to="/signup">
              Sign Up
            </Link>
            </>
          )}
        </p>
      )}
    </div>
  );
}

export default Homepage;