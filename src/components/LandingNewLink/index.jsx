import React from "react";

import { Img, Text } from "components";

const LandingNewLink = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[7.2px] items-center justify-start w-auto md:w-full">
          <div className="flex flex-col h-[23px] items-center justify-start p-0.5 w-[23px]">
            {!!props?.useremailimage ? (
              <Img
                className="h-[15px] my-0.5"
                alt="mail"
                src={props?.useremailimage}
              />
            ) : null}
          </div>
          <Text
            className="text-blue_gray-700 text-center text-lg w-auto"
            size="txtDMSansRegular18"
          >
            {props?.linkitem}
          </Text>
        </div>
      </div>
    </>
  );
};

LandingNewLink.defaultProps = { linkitem: "ABC@XYZ.COM" };

export default LandingNewLink;
