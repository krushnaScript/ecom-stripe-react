import React from "react";
import Slider from "react-slick";
import TestimonyCard from "../TestimonyCard";
import { Box } from "@mui/material";
import { Text48 } from "../CustomTypography";
import { TestimonyData } from "../../constants/CommonDatas";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} silk_slider_Arrow`} onClick={onClick} />;
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} silk_slider_Arrow`} onClick={onClick} />;
}
const CustomerTestimonyComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box>
      <Text48 text="OUR HAPPY CUSTOMERS" mt={5} mb={5} bold="true" />
      <Slider {...settings}>
        {TestimonyData.map((item) => {
          return (
            <Box pr={2} sx={{ margin: "1px 0px 0px 5px" }}>
              <TestimonyCard name={item.name} review={item.review} />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default CustomerTestimonyComp;
