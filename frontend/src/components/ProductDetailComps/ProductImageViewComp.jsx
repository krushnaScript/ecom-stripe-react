import { Box, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import { CommonStyles } from "../../constants/CommonStyles";

const ProductImageViewComp = ({
  image = "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_640.png",
  name = "image",
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ ...CommonStyles.ViewProductSideImageCard }} p={2}>
              <img src={image} alt={name} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ ...CommonStyles.ViewProductSideImageCard }} p={2}>
              <img src={image} alt={name} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ ...CommonStyles.ViewProductSideImageCard }} p={2}>
              <img src={image} alt={name} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ ...CommonStyles.ViewProductMainImageCard }} p={2}>
          <img src={image} alt={name} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductImageViewComp;
