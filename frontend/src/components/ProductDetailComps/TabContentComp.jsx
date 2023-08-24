import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import RatingsAndReviewComp from "./RatingsAndReviewComp";

const TabContentComp = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box sx={{ borderBottom: "1px solid" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          variant="fullWidth"
        >
          {["Product Details", "Rating & Reviews", "FAQs"].map((tabVal) => {
            return <Tab key={tabVal} value={tabVal} label={tabVal} wrapped />;
          })}
        </Tabs>
      </Box>
      <Box pt={3} pb={3}>
        {value === "Product Details" ? (
          <>
            <RatingsAndReviewComp />
          </>
        ) : value === "Rating & Reviews" ? (
          <>
            <RatingsAndReviewComp />
          </>
        ) : null}
      </Box>
    </Box>
  );
};

export default TabContentComp;
