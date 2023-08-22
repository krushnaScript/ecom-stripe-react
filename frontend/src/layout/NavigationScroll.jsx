import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const NavigationScroll = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return children ? children : <Outlet />;
};

export default NavigationScroll;
