import { Colors } from "./types";

export const baseColors = {
  failure: "#F70916",
  failureBright: "#FEE8E9",
  primary: "#804BF2",
  primaryBright: "#F0ECFA",
  primaryDark: "#D3C4F2",
  secondary: "#F2780C",
  success: "#26D748",
  warning: "#F08D19",
  white: "#FFFFFF"
};

export const additionalColors = {
  binance: "#F3BA2F",
  overlay: "#452a7a",
  gold: "#F7D10D",
  silver: "#7A7A7A",
  bronze: "#F2DFCE",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#F5F3FA",
  text: "#280D5F",
  textDisabled: "#BDC2C4",
  textSubtle: "#7A6EAA",
  disabled: "#E9EAEB",
  gradients: {
    navbar: "linear-gradient(180deg, #886DF2 -112.5%, #685BF7 4.22%, #6DB2F2 136.5%)",
    siderbar : "linear-gradient(180deg, #804BF2 0%, #1DCBF2 100%)",
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = lightColors;
