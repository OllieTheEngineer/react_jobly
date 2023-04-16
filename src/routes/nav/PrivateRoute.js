import React, { useContext } from 'react';
import { Route, Navigate } from "react-router-dom";
import UserContext from '../../auth_forms/UserContext';



function PrivateRoute({ children, ...rest }) {
    const { currUser } = useContext(UserContext);

  return (
    <Route
    {...rest}
    render={({location}) =>
        currUser ? (
            children
        ) : (
            <Navigate
            to={{
                pathname: "/login",
                state: {from: location}
            }}
            />
         )
      }
    />
  )
}

export default PrivateRoute;