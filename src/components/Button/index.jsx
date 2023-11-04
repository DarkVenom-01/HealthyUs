import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[13px]",
  square: "rounded-none",
  circle: "rounded-[50%]",
};
const variants = {
  gradient: { blue_A200_deep_purple_A200: "bg-gradient  text-white-A700" },
  fill: {
    indigo_A400: "bg-indigo-A400 shadow-bs text-white-A700",
    gray_900_01: "bg-gray-900_01 text-white-A700",
    gray_900_02: "bg-gray-900_02 text-white-A700",
  },
  underline: { indigo_A400: "text-indigo-A400" },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2.5",
  md: "p-[17px]",
  lg: "p-[35px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["gradient", "fill", "underline"]),
  color: PropTypes.oneOf([
    "blue_A200_deep_purple_A200",
    "indigo_A400",
    "gray_900_01",
    "gray_900_02",
  ]),
};

export { Button };
