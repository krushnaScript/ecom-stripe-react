import React, { useState } from "react";
import { Box, Divider, Grid, Rating } from "@mui/material";
import { Text16, Text32, Text40 } from "../CustomTypography";
import {
  CustomAdditionButton,
  CustomButton,
  CustomColorButton,
} from "../CustomButtonList";
import { CommonColors } from "../../constants/CommonColors";
import { CommonStyles } from "../../constants/CommonStyles";
import { maxQuantity, minQuantity } from "../../constants/CommonConst";

const ProductDetailsDescComp = ({
  pName = "One Life Graphic T-shirt",
  ratingValue = 4.5,
  unit = "$",
  price = "260",
  oldPrice = "300",
  percent = "40",
  fullDesc = "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
}) => {
  const [size, setSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("red");
  const [quantity, setQuantity] = useState(1);

  return (
    <Box>
      <Text40 text={pName} bold="true" mb={1} />
      <Grid container alignItems="center" mb={1}>
        <Grid item>
          <Rating name="read-only" value={Number(ratingValue)} readOnly />
        </Grid>
        <Grid item>
          <Box sx={{ ml: 1 }}>
            <Text16 text={`${ratingValue} / 5`} gutterBottom />
          </Box>
        </Grid>
      </Grid>
      <Grid container alignItems="center" mb={2}>
        <Grid item>
          <Text32 bold="true" text={`${unit}${price}`} />
        </Grid>
        <Grid item sx={{ ml: 1 }}>
          <Text32
            bold="true"
            text={`${unit}${oldPrice}`}
            sx={{ textDecoration: "line-through" }}
          />
        </Grid>
        <Grid item sx={{ ml: 1 }}>
          <CustomButton
            rounded
            backgroundColor={CommonColors.red100}
            color="danger"
          >
            <Text16 bold="true" text={`-${percent}%`} />
          </CustomButton>
        </Grid>
      </Grid>
      <Text16 text={fullDesc} />
      <Box pt={2} pb={2}>
        <Divider />
      </Box>
      <Box>
        <Text16 text="Select Colors" gutterBottom />
        <Grid container spacing={1}>
          {["red", "green", "blue"].map((colName) => {
            return (
              <Grid item key={colName}>
                <CustomColorButton
                  onClick={() => {
                    setSelectedColor(colName);
                  }}
                  // text={colName}
                  rounded
                  backgroundColor={colName}
                  customStyle={CommonStyles.colorSelectButton}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box pt={2} pb={2}>
        <Divider />
      </Box>
      <Box>
        <Text16 text="Choose Size" gutterBottom />
        <Grid container spacing={1}>
          {["Small", "Medium", "Large", "X-Large"].map((sizeName) => {
            return (
              <Grid item key={sizeName}>
                <CustomButton
                  onClick={() => {
                    setSize(sizeName);
                  }}
                  text={sizeName}
                  rounded
                  customStyle={
                    size === sizeName
                      ? CommonStyles.blackButtonStyle
                      : CommonStyles.grayButtonStyle
                  }
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box pt={2} pb={2}>
        <Divider />
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CustomAdditionButton
              text={quantity}
              rounded
              width="100%"
              customStyle={CommonStyles.grayButtonStyle}
              onMinusClick={() => {
                setQuantity((prev) => (prev > minQuantity ? prev - 1 : prev));
              }}
              onPlusClick={() => {
                setQuantity((prev) => (prev < maxQuantity ? prev + 1 : prev));
              }}
            />
          </Grid>
          <Grid item xs={9}>
            <CustomButton
              text="Add to Cart"
              rounded
              width="100%"
              onClick={() => {
                setQuantity((prev) => (prev < maxQuantity ? prev + 1 : prev));
              }}
              customStyle={CommonStyles.blackButtonStyle}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDetailsDescComp;
