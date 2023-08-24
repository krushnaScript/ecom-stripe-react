import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { CommonStyles } from "../constants/CommonStyles";
import { Text24 } from "./CustomTypography";

export const DressStyleCard = ({ name, image }) => {
  return (
    <Card sx={{ ...CommonStyles.DressCardStyle }}>
      <CardActionArea>
        <CardMedia image={image} title={name} />
        <CardContent>
          <Text24 text={name} bold="true" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
