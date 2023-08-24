import React from "react";
import { Box, Grid } from "@mui/material";
import BreadCrumbComp from "../components/BreadCrumbComp";
import ProductImageViewComp from "../components/ProductDetailComps/ProductImageViewComp";
import ProductDetailsDescComp from "../components/ProductDetailComps/ProductDetailsDescComp";
import TabContentComp from "../components/ProductDetailComps/TabContentComp";

const ProductDetailPage = () => {
  return (
    <Box>
      <Box pt={3} pb={3}>
        <BreadCrumbComp />
      </Box>
      <Box pb={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProductImageViewComp />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductDetailsDescComp />
          </Grid>
        </Grid>
      </Box>
      <Box pb={6}>
        <TabContentComp />
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
