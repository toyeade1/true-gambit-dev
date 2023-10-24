import { cva } from "../../styled-system/css";

export const button = cva({
  base: {
    px: "16px",
    py: "8px",
    rounded: "16px",
    boxShadow: "inset 0 0 0 2px white",
    transition: "all 300ms ease-in-out",
    fontWeight: "medium",
    w: "fit-content",
  },
  variants: {
    visual: {
      white: {
        bg: "white",
        color: "black",
        _hover: {
          bg: "transparent",
          color: "white",
        },
      },
      black: {
        boxShadow: "inset 0 0 0 2px black",
        bg: "black",
        px: "24px",
        py: "8px",
        color: "white",
        _hover: {
          bg: "transparent",
          color: "black",
        },
      },
      halloween: {
        boxShadow: "inset 0 0 0 2px black",
        bg: "black",
        color: "white",
        _hover: {
          bg: "orange",
          color: "white",
        },
      },
    },
    shape: {
      rounded: {
        rounded: "full",
      },
    },
  },
});
