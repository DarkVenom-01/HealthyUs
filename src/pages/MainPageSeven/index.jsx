import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const MainPageSevenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100_03 flex flex-col font-abyssinicasil items-start justify-end mx-auto pt-[26px] sm:px-5 px-[26px] w-full">
        <div className="flex flex-col gap-[34px] justify-end mt-14 md:px-5 w-[95%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end ml-16 md:ml-[0] w-[96%] md:w-full">
            <Img
              className="h-[149px] sm:h-auto object-cover w-[11%] md:w-full"
              src="images/img_screenshot20231104_149x157.png"
              alt="screenshot20231"
            />
            <div className="flex flex-row gap-1.5 items-start justify-center ml-2.5 md:ml-[0] md:mt-0 mt-[47px] w-[17%] md:w-full">
              <Text
                className="bg-clip-text bg-gradient  mt-3 sm:text-[33.22px] md:text-[39.22px] text-[43.22px] text-transparent"
                size="txtAbyssinicaSILRegular4322"
              >
                HealthyMe
              </Text>
              <Button
                className="flex h-8 items-center justify-center shadow-bs8 w-8"
                shape="circle"
                size="xs"
                color="blue_A200_deep_purple_A200"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
              </Button>
            </div>
            <div className="md:h-[66px] h-[68px] md:ml-[0] ml-[516px] md:mt-0 mt-[38px] relative w-[39%] md:w-full">
              <div className="absolute bg-gradient  flex flex-col h-full inset-y-[0] items-start justify-end my-auto p-2 right-[0] rounded-[17px]">
                <Text
                  className="md:ml-[0] ml-[38px] mt-[7px] sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                  size="txtAbyssinicaSILRegular34"
                >
                  Log In
                </Text>
              </div>
              <div className="absolute flex flex-row gap-[47.59px] items-center justify-between left-[0] top-[15%] w-auto">
                <div className="flex flex-col gap-[7px] items-start justify-start">
                  <Text
                    className="sm:text-[21.38px] md:text-[23.38px] text-[25.38px] text-gray-800"
                    size="txtAbyssinicaSILRegular2538"
                  >
                    Home
                  </Text>
                  <Line className="bg-blue-800_75 h-0.5 md:ml-[0] ml-[3px] w-[95%]" />
                </div>
                <Text
                  className="sm:text-[21.38px] md:text-[23.38px] text-[25.38px] text-gray-800 w-auto"
                  size="txtAbyssinicaSILRegular2538"
                >
                  About Us
                </Text>
                <Text
                  className="sm:text-[21.38px] md:text-[23.38px] text-[25.38px] text-gray-800 w-auto"
                  size="txtAbyssinicaSILRegular2538"
                >
                  How to use
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between mr-[19px] w-[99%] md:w-full">
            <div className="flex flex-col gap-3 justify-start mb-1.5 w-[43%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[9px] items-center justify-between mr-[19px] w-[97%] md:w-full">
                <Img
                  className="common-pointer h-[115px] md:h-auto object-cover"
                  src="images/img_pngclipartcom.png"
                  alt="pngclipartcom"
                  onClick={() => navigate("/landingnew")}
                />
                <div className="bg-gray-100_04 flex flex-row sm:gap-10 items-center justify-between mb-[25px] md:mt-0 mt-4 p-3 rounded-[30px] shadow-bs9 w-[84%] md:w-full">
                  <Text
                    className="ml-4 sm:text-[16.97px] md:text-[18.97px] text-[20.97px] text-blue_gray-700_cc"
                    size="txtAbyssinicaSILRegular2097"
                  >
                    Search your product
                  </Text>
                  <div className="flex flex-row gap-[12.33px] h-12 md:h-auto items-start justify-start mr-1.5 w-[168px]">
                    <Button
                      className="flex h-12 items-center justify-center rounded-[50%] w-12"
                      shape="circle"
                      color="blue_A200_deep_purple_A200"
                    >
                      <Img
                        className="h-[27px]"
                        src="images/img_heroiconsoutlinephoto.svg"
                        alt="heroiconsoutlin"
                      />
                    </Button>
                    <Button
                      className="flex h-12 items-center justify-center rounded-[50%] w-12"
                      shape="circle"
                      color="blue_A200_deep_purple_A200"
                    >
                      <Img
                        className="h-[27px]"
                        src="images/img_heroiconsoutlinemicrophone.svg"
                        alt="heroiconsoutlin_One"
                      />
                    </Button>
                    <Button
                      className="flex h-12 items-center justify-center rounded-[50%] w-12"
                      shape="circle"
                      color="blue_A200_deep_purple_A200"
                    >
                      <Img
                        className="h-[27px]"
                        src="images/img_search_white_a700.svg"
                        alt="search"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="h-[768px] md:h-auto md:ml-[0] ml-[102px] object-cover rounded-[42px] w-[85%]"
                src="images/img_rectangle1_7.png"
                alt="rectangleTwo"
              />
            </div>
            <div className="bg-gradient1  flex flex-col items-start justify-end outline outline-[3px] outline-blue-A200 p-[18px] rounded-[35px] shadow-bs10 w-[56%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[89px] justify-start mb-[7px] mt-[30px] w-[95%] md:w-full">
                <div className="flex flex-row gap-[11px] items-center justify-start md:ml-[0] ml-[31px] w-[38%] md:w-full">
                  <Text
                    className="md:text-5xl text-[70px] text-black-900"
                    size="txtAbyssinicaSILRegular70"
                  >
                    FRUITS
                  </Text>
                  <Img
                    className="h-[54px] w-[54px]"
                    src="images/img_component1.svg"
                    alt="componentOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start ml-12 md:ml-[0] pb-3.5 w-4/5 md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[39px] items-center justify-start w-[92%] md:w-full">
                      <div className="bg-amber-600 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[38px] w-[29%] sm:w-full">
                        <div className="flex flex-col h-[106px] items-center justify-start my-[21px] w-[106px]">
                          <Img
                            className="h-[106px] md:h-auto rounded-[50%] w-[106px]"
                            src="images/img_image1_106x106.png"
                            alt="imageOne"
                          />
                        </div>
                      </div>
                      <div className="bg-pink-500 flex flex-col items-start justify-start p-3.5 rounded-[38px] w-[29%] sm:w-full">
                        <div className="flex flex-col h-[130px] items-center justify-start my-[19px] w-[130px]">
                          <Img
                            className="h-[130px] md:h-auto rounded-[50%] w-[130px]"
                            src="images/img_image3.png"
                            alt="imageThree"
                          />
                        </div>
                      </div>
                      <div className="bg-light_green-500 flex flex-col items-center justify-start p-3.5 rounded-[38px] w-[29%] sm:w-full">
                        <div className="flex flex-col h-[137px] items-center justify-start my-[15px] w-[137px]">
                          <Img
                            className="h-[137px] md:h-auto rounded-[50%] w-[137px]"
                            src="images/img_image2.png"
                            alt="imageTwo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="mb-[3px] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                        size="txtAbyssinicaSILRegular34Black900"
                      >
                        Proteins
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[81px] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                        size="txtAbyssinicaSILRegular34Black900"
                      >
                        Fats
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[143px] sm:mt-0 mt-[3px] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                        size="txtAbyssinicaSILRegular34Black900"
                      >
                        Carbohydrates
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[74%] md:w-full">
                      <Text
                        className="text-gray-600 text-xl"
                        size="txtAbyssinicaSILRegular20"
                      >
                        0.6g
                      </Text>
                      <Text
                        className="text-gray-600 text-xl"
                        size="txtAbyssinicaSILRegular20"
                      >
                        0.3g
                      </Text>
                      <Text
                        className="text-gray-600 text-xl"
                        size="txtAbyssinicaSILRegular20"
                      >
                        27.6g
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                  size="txtAbyssinicaSILRegular32Black900"
                >
                  Eating fruits is an essential part of a healthy diet. Fruits
                  are packed with vitamins, minerals, and antioxidants that can
                  help protect your body from chronic diseases such as heart
                  disease, stroke, and certain types of cancers.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageSevenPage;
