import { Typography } from "@mui/material";

export const Header1 = (props) => {
  return (
    <Typography
      variant="h3"
      component="div"
      textAlign="center"
      fontWeight={700}
      {...props}
    >
      {props?.heading}
    </Typography>
  );
};
