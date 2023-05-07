import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../auth_forms/UserContext";

function PrivateRoute({ children }) {
  const { token } = useContext(UserContext);

  return (
    <div>
      {token ? (
        children
      ) : (
        <Navigate
          to={{
            pathname: "/login"
          }}
        />
      )}
    </div>
  );
}

export default PrivateRoute;
