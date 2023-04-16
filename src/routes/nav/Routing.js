import React from 'react';
import { Routes , Route, Navigate } from 'react-router-dom';
import Homepage from '../../homepage/Homepage';
import CompaniesList from '../../companies/CompaniesList';
import CompanyCardInfo from '../../companies/CompanyCardInfo';
import LoginForm from '../../auth_forms/LoginForm';
import SignupForm from '../../auth_forms/SignupForm.js';
import JobList from '../../Jobs/JobList';
import Profile from '../../auth_forms/Profile';
import PrivateRoute from './PrivateRoute';


function Routing({login, signup}) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`,
  );

  return (
    <div>
    <Routes>
    <Route exact path="/" 
           element={<Homepage />} >
      {/* <Homepage />  */}
    </Route>

    <Route exact path="/signup" 
           element={<SignupForm signup={signup}/>} >
    </Route>

    <Route exact path="/login" 
           element={<LoginForm login={login}/>} >
    </Route>

    <PrivateRoute exact path="/companies" 
                  element={<CompaniesList />} >
    </PrivateRoute>

    <PrivateRoute exact path="/jobs" 
                  element={<JobList />} >
    </PrivateRoute>

    <PrivateRoute exact path="/companies/:handle"
                  element={<CompanyCardInfo />}>
    </PrivateRoute>

    <PrivateRoute exact path="/profile" 
                  element={<Profile />}>
    </PrivateRoute>
    <Navigate to="/" />
   </Routes>
   </div>
  );
}

export default Routing;