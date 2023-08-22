import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ name = "", image = "", desc = "" }) => {
  return (
    <Card sx={{ maxWidth: 295 }}>
      <CardMedia sx={{ height: 298 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
