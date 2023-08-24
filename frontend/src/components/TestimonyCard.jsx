import { Avatar, Box, Card, CardContent, Rating, Stack } from "@mui/material";
import React from "react";
import { CommonStyles } from "../constants/CommonStyles";
import { Text16, Text24, Text20 } from "./CustomTypography";
import Vector from "../assets/Vector.svg";

const TestimonyCard = ({ ratingValue = "5", name, review = "" }) => {
  return (
    <Card sx={{ ...CommonStyles.TestimonyCardStyle }} elevation={4}>
      <CardContent>
        <Rating name="read-only" value={Number(ratingValue)} readOnly />
        <Stack flexDirection="row" alignItems="baseline">
          <Text20 text={name} bold="true" mr={1} gutterBottom />
          <Avatar
            size="sm"
            variant="plain"
            src={Vector}
            alt="Remy"
            sx={{ width: "20px", height: "20px" }}
          />
        </Stack>
        <Text16 text={review} className="review_text" />
      </CardContent>
    </Card>
  );
};

export default TestimonyCard;
