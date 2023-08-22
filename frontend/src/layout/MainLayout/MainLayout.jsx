import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Container fixed>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
