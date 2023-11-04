import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Line, Text } from "components";

const RegisterlightPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-abyssinicasil items-center justify-end mx-auto pt-[55px] md:px-10 sm:px-5 px-[55px] w-full">
        <div className="flex flex-col gap-6 items-center justify-end mt-0.5 mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-[64%] md:w-full">
              <Sidebar className="!sticky !w-[375px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
                <Img
                  className="h-[149px] md:h-auto object-cover w-[42%]"
                  src="images/img_screenshot20231104_149x157.png"
                  alt="screenshot20231"
                />
                <div className="flex flex-row gap-[5px] items-start justify-between ml-[7px] my-11 w-[57%]">
                  <Text
                    className="bg-clip-text bg-gradient  mt-3.5 sm:text-[32.77px] md:text-[34.77px] text-[36.77px] text-transparent"
                    size="txtAbyssinicaSILRegular3677"
                  >
                    HealthyMe
                  </Text>
                  <div className="h-[31px] relative w-[13%]">
                    <div className="bg-gradient  h-[31px] m-auto rounded-[15px] shadow-bs3 w-full"></div>
                    <Img
                      className="absolute h-[17px] inset-[0] justify-center m-auto"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </div>
                </div>
              </Sidebar>
              <div className="flex flex-1 flex-row gap-[40.49px] items-center justify-start w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-[18%]">
                  <Text
                    className="sm:text-[17.6px] md:text-[19.6px] text-[21.6px] text-gray-800"
                    size="txtAbyssinicaSILRegular216"
                  >
                    Home
                  </Text>
                  <Line className="bg-blue-800_75 h-0.5 md:ml-[0] ml-[3px] w-[95%]" />
                </div>
                <Text
                  className="sm:text-[17.6px] md:text-[19.6px] text-[21.6px] text-gray-800 w-auto"
                  size="txtAbyssinicaSILRegular216"
                >
                  About Us
                </Text>
                <Text
                  className="sm:text-[17.6px] md:text-[19.6px] text-[21.6px] text-gray-800 w-auto"
                  size="txtAbyssinicaSILRegular216"
                >
                  How to use
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-row items-end justify-between w-[21%] md:w-full">
              <div className="flex flex-row items-end justify-evenly my-3">
                <Text
                  className="text-[16.79px] text-black-900 tracking-[1.01px]"
                  size="txtAbyssinicaSILRegular1679"
                >
                  English
                </Text>
                <Img
                  className="h-1.5 mb-[3px] mt-2.5"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[61px] mt-[13px] text-[16.79px] text-center tracking-[1.01px]"
                onClick={() => navigate("/loginlight")}
                color="indigo_A400"
                size="xs"
                variant="underline"
              >
                Sign in
              </Button>
              <Button
                className="cursor-pointer leading-[normal] mb-[3px] min-w-[110px] rounded-[14px] text-[16.79px] text-center tracking-[1.01px]"
                shape="round"
                color="blue_A200_deep_purple_A200"
              >
                Register
              </Button>
            </div>
          </div>
          <div className="md:h-[1167px] h-[1175px] relative w-full">
            <div className="absolute h-[1167px] inset-[0] justify-center m-auto w-full">
              <div className="h-[1167px] m-auto w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[485px] mb-[168px]"
                      src="images/img_background.svg"
                      alt="background"
                    />
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-[349px]">
                      <div className="flex flex-col gap-12 justify-start w-full">
                        <div className="flex flex-col items-center justify-start ml-64 md:ml-[0]">
                          <Text
                            className="text-[13.83px] text-gray-400 tracking-[1.38px]"
                            size="txtAbyssinicaSILRegular1383"
                          >
                            Having Problem ?
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="bg-indigo-A400 flex flex-col items-center justify-end p-4 rounded-[9px] shadow-bs4 w-full">
                            <a
                              href="javascript:"
                              className="text-[18.76px] text-white-A700 tracking-[1.69px]"
                            >
                              <Text size="txtAbyssinicaSILRegular1876">
                                Register
                              </Text>
                            </a>
                          </div>
                          <div className="flex flex-row items-center justify-between mt-[51px] w-full">
                            <Line className="bg-gray-300 h-px my-2 w-[30%]" />
                            <a
                              href="javascript:"
                              className="text-[13.83px] text-gray-500 tracking-[1.24px]"
                            >
                              <Text size="txtAbyssinicaSILRegular1383Gray500">
                                Or continue with
                              </Text>
                            </a>
                            <Line className="bg-gray-300 h-px my-2 w-[30%]" />
                          </div>
                          <div className="flex flex-row items-center justify-between mt-[49px] w-full">
                            <div className="bg-gray-100_02 border border-gray-300_01 border-solid flex flex-col items-center justify-start p-3.5 rounded-[9px] w-[30%]">
                              <Img
                                className="common-pointer h-[29px]"
                                src="images/img_google.svg"
                                alt="google"
                                onClick={() => googleSignIn()}
                              />
                            </div>
                            <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-[9px] shadow-bs5 w-[30%]">
                              <Img
                                className="h-[29px]"
                                src="images/img_fire.svg"
                                alt="fire"
                              />
                            </div>
                            <div className="bg-gray-100_02 border border-gray-300_01 border-solid flex flex-col items-center justify-start p-3.5 rounded-[9px] w-[30%]">
                              <Img
                                className="h-[29px]"
                                src="images/img_facebook_blue_600.svg"
                                alt="facebook_One"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[1167px] inset-y-[0] my-auto object-cover right-[20%] w-1/2"
                  src="images/img_shirtlessbodyb.png"
                  alt="shirtlessbodyb"
                />
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[6%] w-[97%]">
                <div className="flex flex-col md:gap-10 gap-[76px] items-start justify-start md:mt-0 mt-[71px]">
                  <Text
                    className="leading-[76.00px] md:text-5xl text-[63.81px] text-black-900"
                    size="txtAbyssinicaSILRegular6381"
                  >
                    <>
                      Sign Up to
                      <br />
                      get your nutrients
                    </>
                  </Text>
                  <Text
                    className="sm:text-[23.23px] md:text-[25.23px] text-[27.23px] text-black-900"
                    size="txtAbyssinicaSILRegular2723"
                  >
                    <span className="text-black-900 font-abyssinicasil text-left font-normal">
                      <>
                        if you already have an account
                        <br />
                        you can{" "}
                      </>
                    </span>
                    <span className="text-indigo-A400 font-abyssinicasil text-left font-normal">
                      Login here!
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col md:gap-10 gap-[78px] items-center justify-start w-[27%] md:w-full">
                  <div className="md:h-[59px] h-[76px] py-[7px] relative w-full">
                    <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                    <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-[90%]">
                      <Text
                        className="text-[17.78px] text-blue_gray-700 tracking-[1.60px]"
                        size="txtAbyssinicaSILRegular1778"
                      >
                        Enter Email
                      </Text>
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_xicon.svg"
                        alt="xicon"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-[99%] md:w-full">
                    <div className="flex md:h-[59px] h-[76px] justify-end py-[5px] relative w-[31%] sm:w-full">
                      <div className="bg-blue_gray-50 h-[59px] mt-auto mx-auto rounded-[9px] w-full"></div>
                      <Text
                        className="absolute bottom-[32%] left-[20%] text-[17.78px] text-blue_gray-700 tracking-[1.60px]"
                        size="txtAbyssinicaSILRegular1778"
                      >
                        Age
                      </Text>
                    </div>
                    <div className="flex md:h-[59px] h-[76px] justify-end py-[5px] relative w-[68%] sm:w-full">
                      <div className="bg-blue_gray-50 h-[59px] mt-auto mx-auto rounded-[9px] w-full"></div>
                      <div className="absolute bottom-[29%] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[82%]">
                        <Text
                          className="text-[17.78px] text-blue_gray-700 tracking-[1.60px]"
                          size="txtAbyssinicaSILRegular1778"
                        >
                          Gender
                        </Text>
                        <Img
                          className="h-[23px] w-[23px]"
                          src="images/img_xicon.svg"
                          alt="xicon_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-inter md:gap-10 gap-[78px] items-center justify-start right-[0] top-[14%] w-[26%]">
              <div className="md:h-[59px] h-[76px] py-[7px] relative w-full">
                <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                <div className="absolute flex flex-row h-max inset-[0] items-start justify-between m-auto w-[89%]">
                  <Text
                    className="sm:text-[21.68px] md:text-[23.68px] text-[25.68px] text-blue_gray-500"
                    size="txtInterRegular2568"
                  >
                    ••••••••
                  </Text>
                  <Img
                    className="h-[23px] mt-0.5 w-[23px]"
                    src="images/img_xicon_blue_gray_500_01.svg"
                    alt="xicon_Two"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-abyssinicasil gap-[15px] items-center justify-between w-[99%] md:w-full">
                <div className="sm:h-[59px] md:h-[61px] h-[76px] sm:mt-0 mt-0.5 py-2 relative w-1/2 sm:w-full">
                  <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                  <div className="absolute flex flex-row h-max inset-[0] items-start justify-between m-auto w-[82%]">
                    <Text
                      className="text-[17.78px] text-blue_gray-700 tracking-[1.60px]"
                      size="txtAbyssinicaSILRegular1778"
                    >
                      Height
                    </Text>
                    <Img
                      className="h-[23px]"
                      src="images/img_xicon.svg"
                      alt="xicon_Three"
                    />
                  </div>
                </div>
                <div className="md:h-[61px] h-[76px] mb-0.5 py-2 relative w-[47%] sm:w-full">
                  <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                  <div className="absolute flex flex-row h-max inset-[0] items-start justify-between m-auto w-[82%]">
                    <Text
                      className="text-[17.78px] text-blue_gray-700 tracking-[1.60px]"
                      size="txtAbyssinicaSILRegular1778"
                    >
                      Weight
                    </Text>
                    <Img
                      className="h-[23px]"
                      src="images/img_xicon.svg"
                      alt="xicon_Four"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute right-[6%] sm:text-[35.94px] md:text-[41.94px] text-[45.94px] text-black-900 top-[0]"
              size="txtAbyssinicaSILRegular4594"
            >
              Welcome User
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterlightPage;
