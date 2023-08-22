import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PageRoute } from "../constants/CommonConst";

const PrivateRouter = ({ children }) => {
  const token = !!localStorage.getItem("token");

  if (!token) {
    return <Navigate to={PageRoute.Login} replace />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRouter;
