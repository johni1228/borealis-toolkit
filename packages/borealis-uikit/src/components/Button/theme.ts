import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    width: "494px",
    height: "67px",
    padding: "0 20px",
    fontSize: "20px",
  },
  [scales.SM]: {
    height: "54px",
    width: "290px",
    padding: "0 16px",
    fontSize: "16px",
  },
  [scales.XS]: {
    width: "141",
    height: "52px",
    fontSize: "16px",
    padding: "0 15px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "secondary",
    boxShadow: "none",
    color: "white",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
};
