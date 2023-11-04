import React from "react";

const sizeClasses = {
  txtAbyssinicaSILRegular4322: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1377Gray500: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1493: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular20: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular6381: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular16: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1677IndigoA400: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular18: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2538: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular14: "font-abyssinicasil font-normal",
  txtInterRegular2568: "font-inter font-normal",
  txtLatoMedium22: "font-lato font-medium",
  txtAbyssinicaSILRegular3663: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular4594: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular34BlueA200: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular3386: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular90: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2133: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2097: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular52: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2159Bluegray700: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular216: "font-abyssinicasil font-normal",
  txtDMSansRegular2159: "font-dmsans font-normal",
  txtInterMedium1386: "font-inter font-medium",
  txtAbyssinicaSILRegular2723: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2168: "font-abyssinicasil font-normal",
  txtInterRegular2558: "font-inter font-normal",
  txtAbyssinicaSILRegular1672: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1679: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1876: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1677: "font-abyssinicasil font-normal",
  txtInterExtraBold80: "font-extrabold font-inter",
  txtAbyssinicaSILRegular1383Gray500: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular32Black900: "font-abyssinicasil font-normal",
  txtInterBold4866: "font-bold font-inter",
  txtInterBold45: "font-bold font-inter",
  txtAbyssinicaSILRegular1826: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular34: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2159: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2633: "font-abyssinicasil font-normal",
  txtInterExtraBold80Gray90003: "font-extrabold font-inter",
  txtAbyssinicaSILRegular2712: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2399: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular4577: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2151: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular6357: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1383: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular30: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular32: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular32Gray600: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular70: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1679IndigoA400: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular28: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular992: "font-abyssinicasil font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtAbyssinicaSILRegular1377: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1771: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular1778: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular2304: "font-abyssinicasil font-normal",
  txtDMSansRegular18: "font-dmsans font-normal",
  txtAbyssinicaSILRegular3677: "font-abyssinicasil font-normal",
  txtAbyssinicaSILRegular34Black900: "font-abyssinicasil font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
