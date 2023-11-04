import React from "react";

import { Img } from "components";

const ComponentsRowfacebook = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-end justify-start w-[7%]">
          <Img
            className="h-[23px]"
            src="images/img_facebook_blue_600_21x11.svg"
            alt="facebook"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-[11%]">
          <Img
            className="h-[18px]"
            src="images/img_twitter.svg"
            alt="twitter"
          />
        </div>
        <Img
          className="h-6 w-6"
          src="images/img_instagram.svg"
          alt="instagram"
        />
        <div className="flex flex-col items-center justify-start w-6">
          <div className="flex flex-col items-center justify-start w-[23px] md:w-full">
            <Img
              className="h-[22px] w-[23px]"
              src="images/img_linkedin.svg"
              alt="linkedin"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[12%]">
          <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
            <Img
              className="h-[18px]"
              src="images/img_youtube.svg"
              alt="youtube"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ComponentsRowfacebook.defaultProps = {};

export default ComponentsRowfacebook;
