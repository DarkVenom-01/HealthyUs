import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const MainPageThirteenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100_03 font-abyssinicasil h-[1117px] mx-auto pt-[26px] sm:px-5 px-[26px] relative w-full">
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start max-w-[1480px] mx-auto md:px-5 top-[7%] w-full">
          <div className="flex flex-col md:gap-10 gap-[105px] justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[129px] w-[92%] md:w-full">
              <div className="flex flex-row gap-1.5 items-start justify-between md:mt-0 mt-[9px] w-[19%] md:w-full">
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
              <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mb-2 w-[48%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[47.59px] items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[17%] sm:w-full">
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
                <Text
                  className="bg-gradient  pb-2 pt-4 sm:px-5 px-[35px] rounded-[17px] sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                  size="txtAbyssinicaSILRegular34"
                >
                  Log In
                </Text>
              </div>
            </div>
            <div className="md:h-[73px] h-[82px] relative w-[37%] sm:w-full">
              <div className="absolute bg-gray-100_04 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-0.5 rounded-[30px] shadow-bs9 w-full">
                <Text
                  className="mb-[42px] md:ml-[0] ml-[26px] sm:text-[16.97px] md:text-[18.97px] text-[20.97px] text-blue_gray-700_cc"
                  size="txtAbyssinicaSILRegular2097"
                >
                  Search your product
                </Text>
              </div>
              <div className="absolute flex flex-row gap-[12.33px] h-12 md:h-auto items-center justify-center right-[4%] top-[0] w-[168px]">
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
        </div>
        <div className="absolute bg-gradient1  bottom-[0] flex flex-col items-start justify-end outline outline-[3px] outline-blue-A200 p-[18px] md:px-5 right-[8%] rounded-[35px] shadow-bs10 w-[51%]">
          <div className="flex flex-col md:gap-10 gap-[93px] items-start justify-start mb-[7px] mt-[26px] w-[95%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start ml-0.5 md:ml-[0] w-[54%] md:w-full">
              <Text
                className="md:text-5xl text-[70px] text-black-900"
                size="txtAbyssinicaSILRegular70"
              >
                VEG SOUP
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
                        src="images/img_image1_1.png"
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
                <div className="flex flex-row items-start justify-between w-[69%] md:w-full">
                  <Text
                    className="text-gray-600 text-xl"
                    size="txtAbyssinicaSILRegular20"
                  >
                    4g
                  </Text>
                  <Text
                    className="text-gray-600 text-xl"
                    size="txtAbyssinicaSILRegular20"
                  >
                    2g
                  </Text>
                  <Text
                    className="text-gray-600 text-xl"
                    size="txtAbyssinicaSILRegular20"
                  >
                    9g
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtAbyssinicaSILRegular32Black900"
            >
              Vegetable soup is a common soup prepared using vegetables and leaf
              vegetables as primary ingredients. Basic ingredients in addition
              to vegetables can include beans and legumes, grains, tofu, noodles
              and pasta, vegetable broth or stock, milk, cream, water, olive or
              vegetable oil, seasonings, salt and pepper, among myriad others.
            </Text>
          </div>
        </div>
        <div className="absolute bottom-[0] md:h-[768px] h-[882px] left-[2%] md:px-5 w-[36%] md:w-full">
          <Img
            className="absolute bottom-[0] h-[768px] object-cover right-[0] rounded-[42px] w-[90%]"
            src="images/img_rectangle1_2.png"
            alt="rectangleTwo"
          />
          <Img
            className="common-pointer absolute h-[115px] left-[0] object-cover top-[0] w-[16%]"
            src="images/img_pngclipartcom.png"
            alt="pngclipartcom"
            onClick={() => navigate("/landingnew")}
          />
        </div>
        <Img
          className="absolute h-[149px] left-[5%] object-cover top-[4%] w-[10%]"
          src="images/img_screenshot20231104_149x157.png"
          alt="screenshot20231"
        />
      </div>
    </>
  );
};

export default MainPageThirteenPage;
