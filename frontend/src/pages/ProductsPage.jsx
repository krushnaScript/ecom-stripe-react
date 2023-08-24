import { Box, Grid } from "@mui/material";
import React from "react";
import ProductListComp from "../components/ProductPageComp/ProductListComp";
import FilterComponent from "../components/ProductPageComp/FilterComponent";

const ProductsPage = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FilterComponent />
        </Grid>
        <Grid item xs={9}>
          <ProductListComp />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
