import { CommonColors } from "./CommonColors";
import { BorderRadius } from "./CommonConst";

export const CommonStyles = {
  productCardStyle: {
    maxWidth: 295,
    boxShadow: "none",
    "& .MuiCardMedia-root": {
      height: 298,
      borderRadius: BorderRadius[20],
    },
    "& .MuiCardContent-root ": {
      paddingLeft: "0px",
    },
  },
  RoundedButtonStyle: {
    borderRadius: BorderRadius[20],
    color: CommonColors.black,
    fontWeight: 600,
    borderColor: CommonColors.grey400,
  },

  grayButtonStyle: {
    backgroundColor: CommonColors.grey300,
    color: CommonColors.black,
    textTransform: "none",

    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: CommonColors.grey400,
    },
  },
  colorSelectButton: {
    // backgroundColor: CommonColors.grey300,
    color: "transparent",
    textTransform: "none",

    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "none",
    },
  },
  additionButton: {
    "& .MuiButtonBase-root": {
      padding: "0px",
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        backgroundColor: CommonColors.grey400,
      },
    },
  },

  blackButtonStyle: {
    color: CommonColors.white,
    backgroundColor: CommonColors.black,
    textTransform: "none",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: CommonColors.black,
    },
  },

  GrayCard: {
    backgroundColor: CommonColors.grey400,
  },
  DressCardStyle: {
    backgroundColor: "transparent",
    maxWidth: 295,
    boxShadow: "none",
    position: "relative",
    "& .MuiButtonBase-root": {
      ":focus": {
        outline: "none",
      },
      "& .MuiCardMedia-root": {
        height: 298,
        borderRadius: BorderRadius[20],
      },
      "& .MuiCardContent-root ": {
        color: CommonColors.white,
        textAlign: "center",
        position: "absolute",
        bottom: "0px",
        width: "100%",
        backgroundColor: `${CommonColors.black}`,
        borderBottomLeftRadius: BorderRadius[20],
        borderBottomRightRadius: BorderRadius[20],
      },
    },
  },
  TestimonyCardStyle: {
    maxWidth: "100%",
    height: "200px",
    borderRadius: BorderRadius[10],
    "& .MuiCardContent-root ": {
      "& .review_text": {
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
  },
  ViewProductMainImageCard: {
    maxWidth: "100%",
    height: "100%",
    borderRadius: BorderRadius[20],
    backgroundColor: CommonColors.grey300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img ": {
      width: "100%",
    },
  },
  ViewProductSideImageCard: {
    width: "100%",
    maxHeight: "150px",
    borderRadius: BorderRadius[20],
    backgroundColor: CommonColors.grey300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img ": {
      width: "100%",
    },
  },
  CommonBorder: {
    border: "1px solid ",
    borderColor: CommonColors.grey400,
    borderRadius: BorderRadius[20],
  },
};
