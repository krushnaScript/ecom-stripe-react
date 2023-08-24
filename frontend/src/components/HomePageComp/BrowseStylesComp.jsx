import { Box, Button, Grid, Link } from "@mui/material";
import React from "react";
import { CommonStyles } from "../../constants/CommonStyles";
import { Text48 } from "../CustomTypography";
import { BorderRadius } from "../../constants/CommonConst";
import { DressStyleCard } from "../DressStyleCard";

const data = [
  {
    name: "Gym",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEmytl2X29-YKtZElMldfh2FLXVRyF9s2up2Gwfjjd6dg-1ZIHJqqA7GqVFuQFVPzkdk&usqp=CAU",
  },
  {
    name: "Formal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEmytl2X29-YKtZElMldfh2FLXVRyF9s2up2Gwfjjd6dg-1ZIHJqqA7GqVFuQFVPzkdk&usqp=CAU",
  },
  {
    name: "Casual",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEmytl2X29-YKtZElMldfh2FLXVRyF9s2up2Gwfjjd6dg-1ZIHJqqA7GqVFuQFVPzkdk&usqp=CAU",
  },
  {
    name: "Party",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEmytl2X29-YKtZElMldfh2FLXVRyF9s2up2Gwfjjd6dg-1ZIHJqqA7GqVFuQFVPzkdk&usqp=CAU",
  },
];

const BrowseStylesComp = () => {
  return (
    <Box sx={{ ...CommonStyles.GrayCard, borderRadius: BorderRadius[20] }}>
      <Text48
        text="BROWSE BY DRESS STYLE"
        pt={6}
        // pb={5}
        textAlign="center"
        bold="true"
      />
      <Grid container p={6} spacing={3}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={`${item.name}_${index}`}>
              <DressStyleCard name={item.name} image={item.image} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BrowseStylesComp;
