import { Box, Grid } from "@mui/material";
import React from "react";
import { Text24 } from "../CustomTypography";
import { TestimonyData } from "../../constants/CommonDatas";
import TestimonyCard from "../TestimonyCard";

const RatingsAndReviewComp = () => {
  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item>
            <Text24 text="All Review" />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {TestimonyData.map((singleItem) => {
            return (
              <Grid item xs={12} md={6}>
                <TestimonyCard
                  name={singleItem.name}
                  review={singleItem.review}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default RatingsAndReviewComp;
