import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '../Homepage';
import CompaniesList from '../companies/CompaniesList';
import LoginForm from '../auth_forms/LoginForm';
import SignupForm from '../auth_forms/SignupForm.js';
import JobList from '../Jobs/JobList';
import Profile from '../auth_forms/Profile';


function Routes() {


  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" >
      <Homepage /> 
    </Route>
    <Route exact path="/signup" >
      <SignupForm /> 
    </Route>
    <Route exact path="/login" >
    <LoginForm /> 
    </Route>
    <Route exact path="/companies" >
      <CompaniesList /> 
    </Route>
    <Route exact path="/jobs" >
      <JobList /> 
    </Route>
    <Route exact path="/profile" >
      <Profile /> 
    </Route>
    <Redirect to="/colors" />
  </Switch>
  </BrowserRouter>
  );
}

export default Routes;