import { Typography } from "@mui/material";
import { FontSize } from "../constants/CommonConst";

export const Text48 = (props) => {
  return (
    <Typography
      variant="h3"
      component="div"
      fontWeight={props?.bold ? 700 : props?.medium ? 600 : 400}
      {...props}
    >
      {props?.text}
    </Typography>
  );
};

export const Text40 = (props) => {
  return (
    <Typography
      variant="h3"
      component="div"
      fontSize={FontSize[40]}
      fontWeight={props?.bold ? 700 : props?.medium ? 600 : 400}
      {...props}
    >
      {props?.text}
    </Typography>
  );
};
export const Text34 = (props) => {
  return (
    <Typography
      variant="h4"
      component="div"
      fontWeight={props?.bold ? 700 : props?.medium ? 600 : 400}
      {...props}
    >
      {props?.text}
    </Typography>
  );
};

export const Text32 = (props) => {
  return (
    <Typography
      variant="h3"
      component="div"
      fontSize={FontSize[32]}
      fontWeight={props?.bold ? 700 : props?.medium ? 600 : 400}
      {...props}
    >
      {props?.text}
    </Typography>
  );
};

export const Text24 = (props) => {
  return (
    <Typography
      variant="h5"
      component="div"
      fontWeight={props?.bold ? 700 : props?.medium ? 600 : 400}
      {...props}
    >
      {props?.text}
    </Typography>
  );
};
export const Text20 = (props) => {
  return (
    <Typography
      variant="h6"
      component="div"
      fontWeight={props?.bold ? 700 : props?.medium ? 600 : 400}
      {...props}
    >
      {props?.text}
    </Typography>
  );
};

export const Text16 = (props) => {
  return (
    <Typography
      variant="body1"
      component="div"
      fontWeight={props?.bold ? 700 : props?.medium ? 600 : 400}
      {...props}
    >
      {props?.text}
    </Typography>
  );
};

export const Text14 = (props) => {
  return (
    <Typography
      variant="body2"
      component="div"
      fontWeight={props?.bold ? 700 : props?.medium ? 600 : 400}
      {...props}
    >
      {props?.text}
    </Typography>
  );
};
