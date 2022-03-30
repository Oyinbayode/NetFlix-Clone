import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children }) {
  console.log(loggedInPath);
  return !user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: loggedInPath,
      }}
    />
  );
}

export function ProtectedRoute({ user, children }) {
  let location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/signin",
        state: { from: location },
      }}
    />
  );
}
