import { Button, Grid, IconButton } from "@mui/material";
import { BorderRadius } from "../constants/CommonConst";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CommonStyles } from "../constants/CommonStyles";

export const ButtonOutline = ({
  text = "",
  onClick = () => {},
  width = "",
  size = "medium",
  color = "primary",
  backgroundColor = "",
  customStyle,
  rounded = false,
  children,
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        width: width ? width : "initial",
        color,
        backgroundColor,
        borderRadius: rounded ? BorderRadius[20] : "initial",
        ...customStyle,
      }}
      size={size}
    >
      {text ? text : children}
    </Button>
  );
};

export const CustomButton = ({
  text = "",
  onClick = () => {},
  width = "",
  size = "medium",
  color = "primary",
  backgroundColor = "",
  customStyle,
  rounded = false,
  children,
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        width: width ? width : "initial",
        color,
        backgroundColor,
        borderRadius: rounded ? BorderRadius[20] : "initial",
        ...customStyle,
      }}
      size={size}
    >
      {text ? text : children}
    </Button>
  );
};

export const CustomColorButton = ({
  text = "",
  onClick = () => {},
  width = "",
  size = "medium",
  color = "primary",
  backgroundColor = "",
  customStyle,
  rounded = false,
  children,
}) => {
  return (
    <IconButton
      variant="contained"
      onClick={onClick}
      sx={{
        width: width ? width : "initial",
        color,
        backgroundColor,
        borderRadius: rounded ? BorderRadius[20] : "initial",
        ...customStyle,
      }}
      size={size}
    >
      {text ? text : children}
    </IconButton>
  );
};

export const CustomAdditionButton = ({
  text = "",
  onClick = () => {},
  onPlusClick = () => {},
  onMinusClick = () => {},
  width = "",
  size = "medium",
  color = "primary",
  backgroundColor = "",
  customStyle,
  rounded = false,

  children,
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: width ? width : "initial",
        color,
        backgroundColor,
        borderRadius: rounded ? BorderRadius[20] : "initial",
        ...CommonStyles.additionButton,
        ...customStyle,
      }}
      variant="contained"
      size={size}
    >
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <IconButton onClick={onMinusClick}>
            <RemoveIcon />
          </IconButton>
        </Grid>
        <Grid item lineHeight={0}>
          {text ? text : children ? children : 0}
        </Grid>
        <Grid item>
          <IconButton onClick={onPlusClick}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Button>
  );
};
