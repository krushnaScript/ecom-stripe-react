import { LinearProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        zIndex: 1301,
      }}
    >
      <LinearProgress color="primary" />
    </div>
  );
};

export default Loader;
