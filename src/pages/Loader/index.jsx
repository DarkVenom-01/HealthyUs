import React from "react";

import { Img } from "components";

const LoaderPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Img
          className="h-[472px] md:h-auto object-cover w-[647px]"
          src="images/img_screenshot20231104.png"
          alt="screenshot20231"
        />
      </div>
    </>
  );
};

export default LoaderPage;
