import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
} from "@mui/material";
import { Text16, Text14, Text24, Text20 } from "./CustomTypography";
import { CommonStyles } from "../constants/CommonStyles";

const ProductCard = ({
  name = "",
  image = "",
  desc = "",
  price = "",
  unit = "$",
  ratingValue = "3.0",
  onAddButtonClick,
}) => {
  return (
    <Card sx={{ ...CommonStyles.productCardStyle }}>
      <CardMedia image={image} title={name} />
      <CardContent>
        <Text20 text={name} bold="true" />
        <Text14 text={desc} gutterBottom />
        <Grid container alignItems="center">
          <Grid item>
            <Rating name="read-only" value={Number(ratingValue)} readOnly />
          </Grid>
          <Grid item>
            <Box sx={{ ml: 1 }}>
              <Text16 text={`${ratingValue} / 5`} gutterBottom />
            </Box>
          </Grid>
        </Grid>
        <Text24 bold="true" text={`${unit}${price}`} />
        {/* <Button onClick={onAddButtonClick}>ssss</Button> */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
