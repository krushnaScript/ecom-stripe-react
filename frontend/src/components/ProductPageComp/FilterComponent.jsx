import {
  Box,
  Divider,
  ListItemButton,
  ListItemText,
  Collapse,
  List,
  Grid,
  Slider,
} from "@mui/material";
import React, { useState } from "react";
import { CommonStyles } from "../../constants/CommonStyles";
import { Text16, Text20 } from "../CustomTypography";
import {
  ExpandLess,
  ExpandMore,
  Tune,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { CustomButton } from "../CustomButtonList";

const SubCollpaseItem = ({ headerText = "", children }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box mb={!open ? 1 : 0}>
      <ListItemButton onClick={handleClick} sx={{ padding: 0 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Text16 text={headerText} />
          {open ? <ExpandMore /> : <KeyboardArrowRight />}
        </Grid>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box pb={2} pt={2}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

const FilterSection = ({ headerText = "", children }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <ListItemButton onClick={handleClick} sx={{ padding: 0 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Text20 bold="true" text={headerText} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </Grid>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box pb={2} pt={2}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

function valuetext(value) {
  return `${value}°C`;
}

const FilterComponent = () => {
  const [size, setSize] = useState("Large");
  const [value1, setValue1] = React.useState([20, 37]);
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <Box sx={{ ...CommonStyles.CommonBorder }} p={2}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Text20 bold="true" text="Filters" />
        <Tune />
      </Grid>
      <Box pt={2} pb={2}>
        <Divider />
      </Box>
      <Box>
        <SubCollpaseItem headerText="Casual">
          <p>ssssssss</p>
        </SubCollpaseItem>
        <SubCollpaseItem headerText="Formal" />
        <SubCollpaseItem headerText="Party" />
        <SubCollpaseItem headerText="Gym" />
      </Box>
      <Box pt={2} pb={2}>
        <Divider />
      </Box>
      <Box>
        <FilterSection headerText="Price">
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
        </FilterSection>
      </Box>
      <Box pt={2} pb={2}>
        <Divider />
      </Box>
      <Box>
        <FilterSection headerText="Size">
          <Grid container spacing={1}>
            {[
              "XX-Small",
              "X-Small",
              "Small",
              "Medium",
              "Large",
              "X-Large",
              "XX-Large",
              "3X-Large",
              "4X-Large",
            ].map((sizeName) => {
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
        </FilterSection>
      </Box>
      <Box pt={2} pb={2}>
        <Divider />
      </Box>
      <Box>
        <FilterSection headerText="Dress Style">
          <SubCollpaseItem headerText="Casual">
            <p>ssssssss</p>
          </SubCollpaseItem>
          <SubCollpaseItem headerText="Formal" />
          <SubCollpaseItem headerText="Party" />
          <SubCollpaseItem headerText="Gym" />
        </FilterSection>
      </Box>
    </Box>
  );
};

export default FilterComponent;
