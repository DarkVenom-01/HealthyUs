import React from "react";

import { Button, Img, Line, Text } from "components";
import ComponentsRowfacebook from "components/ComponentsRowfacebook";

const ComponentsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-abyssinicasil items-start justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[298px] mt-0.5 w-4/5 md:w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_04 tracking-[0.20px]"
            size="txtAbyssinicaSILRegular28"
          >
            Components / Variants
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-9 w-[92%] md:w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900_04 tracking-[0.20px]"
              size="txtAbyssinicaSILRegular52"
            >
              Icons
            </Text>
            <Text
              className="md:ml-[0] ml-[312px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900_04 tracking-[0.20px]"
              size="txtAbyssinicaSILRegular52"
            >
              Buttons
            </Text>
            <Text
              className="md:ml-[0] ml-[295px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900_04 tracking-[0.20px]"
              size="txtAbyssinicaSILRegular52"
            >
              Social Media
            </Text>
            <Text
              className="md:ml-[0] ml-[149px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900_04 tracking-[0.20px]"
              size="txtAbyssinicaSILRegular52"
            >
              Search
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-4 w-full">
            <div className="h-[1441px] md:h-[1720px] sm:h-[4782px] md:mt-0 mt-[5px] relative w-[81%] md:w-full">
              <div className="absolute h-[1441px] md:h-[1720px] sm:h-[4782px] inset-y-[0] left-[0] my-auto w-[93%] md:w-full">
                <Text
                  className="absolute left-[0] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900_04 top-[16%] tracking-[0.20px]"
                  size="txtAbyssinicaSILRegular52"
                >
                  Nav Bar
                </Text>
                <Text
                  className="absolute right-[12%] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900_04 top-[17%] tracking-[0.20px]"
                  size="txtAbyssinicaSILRegular52"
                >
                  Sign In Options
                </Text>
                <Text
                  className="absolute left-[0] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900_04 top-[37%] tracking-[0.20px]"
                  size="txtAbyssinicaSILRegular52"
                >
                  Gallery
                </Text>
                <div className="border border-dashed border-deep_purple-A200_01 flex flex-col h-full items-center justify-start ml-0.5 p-5 rounded-[5px] w-[23%]">
                  <div className="flex flex-col items-start justify-start mb-[5px] w-[94%] md:w-full">
                    <div className="flex flex-row items-start justify-start w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_mail_blue_gray_700.svg"
                        alt="mail"
                      />
                      <Img
                        className="h-[22px] ml-1.5 mt-[3px] w-[22px]"
                        src="images/img_iconheroiconsoutline.svg"
                        alt="iconheroiconsou"
                      />
                      <Img
                        className="h-[23px] ml-2 mt-0.5 w-[23px]"
                        src="images/img_search_blue_gray_700.svg"
                        alt="search_One"
                      />
                      <div className="border border-blue_gray-700 border-solid h-[19px] ml-12 mt-[3px] rounded-[9px] w-[19px]"></div>
                      <Img
                        className="h-[23px] ml-2.5 mt-1 w-[23px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup"
                      />
                      <Img
                        className="h-[23px] ml-[7px] mt-1 w-[23px]"
                        src="images/img_arrowdown_blue_gray_700_03.svg"
                        alt="arrowdown"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-end md:ml-[0] ml-[37px] mt-1.5 w-[84%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_iconstartfilled.svg"
                        alt="iconstartfilled"
                      />
                      <Img
                        className="h-5 ml-[78px] w-5"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Img
                        className="h-5 ml-[13px] w-5"
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <Img
                        className="h-5 ml-[13px] w-5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                    </div>
                    <div className="flex flex-row gap-[13px] items-center justify-between md:ml-[0] ml-[3px] mt-3 w-[99%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_icontarget.svg"
                        alt="icontarget"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_home.svg"
                        alt="home"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_mail_blue_gray_700_03.svg"
                        alt="mail_One"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_iconnotification.svg"
                        alt="iconnotificatio"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_music.svg"
                        alt="music"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_component1.svg"
                        alt="iconwarning"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[232px] items-center justify-start w-full">
                    <div className="flex flex-col md:gap-10 gap-[235px] justify-start w-[97%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[429px] w-[64%] md:w-full">
                        <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[5px] w-[27%] sm:w-full">
                          <Button
                            className="cursor-pointer leading-[normal] mb-1.5 min-w-[137px] rounded-[11px] sm:text-[18.44px] md:text-[20.44px] text-[22.44px] text-center"
                            shape="round"
                            color="blue_A200_deep_purple_A200"
                          >
                            Button
                          </Button>
                        </div>
                        <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-start p-[27px] sm:px-5 rounded-[5px] w-[38%] sm:w-full">
                          <ComponentsRowfacebook className="flex flex-row gap-[28.46px] items-center justify-start my-2 w-auto" />
                        </div>
                      </div>
                      <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-start p-[26px] sm:px-5 rounded-[5px] w-[46%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[47.59px] items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-center justify-start w-[18%] sm:w-full">
                            <Text
                              className="sm:text-[21.38px] md:text-[23.38px] text-[25.38px] text-gray-800"
                              size="txtAbyssinicaSILRegular2538"
                            >
                              Home
                            </Text>
                            <Line className="bg-blue-800_75 h-0.5 w-[92%]" />
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
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_250x209.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_10.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_11.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_12.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_13.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_14.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_15.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_16.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_17.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover rounded-[28px] w-full"
                            src="images/img_rectangle1_18.png"
                            alt="rectangleOne"
                          />
                          <Text
                            className="ml-1 md:ml-[0] mt-[13px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
                            size="txtAbyssinicaSILRegular2304"
                          >
                            Product Name
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] sm:text-[17.68px] md:text-[19.68px] text-[21.68px] text-gray-600"
                            size="txtAbyssinicaSILRegular2168"
                          >
                            <>
                              Lorem ipsum <br />
                              amet dolor, etit tu
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[137px] sm:h-[268px] right-[0] top-[22%] w-[44%] sm:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-center justify-start mt-6 mx-auto w-[81%]">
                  <div className="bg-gray-100_02 border border-gray-300_01 border-solid flex flex-col items-center justify-start p-[18px] rounded-[11px] w-[30%] sm:w-full">
                    <Img
                      className="h-8 w-[31px]"
                      src="images/img_google.svg"
                      alt="google"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] ml-[29px] p-[18px] rounded-[11px] shadow-bs11 w-[30%] sm:w-full">
                    <Img className="h-8" src="images/img_fire.svg" alt="fire" />
                  </div>
                  <div className="bg-gray-100_02 border border-gray-300_01 border-solid flex flex-col items-center justify-start sm:ml-[0] ml-[29px] p-[18px] rounded-[11px] w-[30%] sm:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_facebook_blue_600.svg"
                      alt="facebook_One"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[137px] inset-[0] justify-center m-auto"
                  src="images/img_group237469.svg"
                  alt="group237469"
                />
              </div>
            </div>
            <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col items-center justify-start p-[17px] rounded-[5px] w-[18%] md:w-full">
              <div className="bg-gray-100_04 flex flex-row items-center justify-between mb-[15px] mt-[11px] p-1.5 rounded-[14px] shadow-bs12 w-full">
                <Text
                  className="ml-[7px] text-[9.92px] text-blue_gray-700_cc"
                  size="txtAbyssinicaSILRegular992"
                >
                  Search your product
                </Text>
                <div className="flex flex-row gap-[5.83px] h-[22px] md:h-auto items-start justify-start mr-0.5 w-[79px]">
                  <Button
                    className="flex h-[22px] items-center justify-center rounded-[50%] w-[22px]"
                    shape="circle"
                    size="xs"
                    color="blue_A200_deep_purple_A200"
                  >
                    <Img
                      className="h-[13px]"
                      src="images/img_heroiconsoutlinephoto.svg"
                      alt="heroiconsoutlin"
                    />
                  </Button>
                  <Button
                    className="flex h-[22px] items-center justify-center rounded-[50%] w-[22px]"
                    shape="circle"
                    size="xs"
                    color="blue_A200_deep_purple_A200"
                  >
                    <Img
                      className="h-[13px]"
                      src="images/img_heroiconsoutlinemicrophone.svg"
                      alt="heroiconsoutlin_One"
                    />
                  </Button>
                  <Button
                    className="flex h-[22px] items-center justify-center rounded-[50%] w-[22px]"
                    shape="circle"
                    size="xs"
                    color="blue_A200_deep_purple_A200"
                  >
                    <Img
                      className="h-[13px]"
                      src="images/img_search.svg"
                      alt="search_Two"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
