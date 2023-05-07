import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../auth_forms/UserContext';

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
      <h1> Jobly </h1>
      <p> Your dream job is just one click away! </p>
      {username ? 
        <h2>
          Welcome, { username }!
        </h2>
       : (
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