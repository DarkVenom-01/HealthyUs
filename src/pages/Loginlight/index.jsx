import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Line, Text } from "components";

const LoginlightPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-abyssinicasil items-center justify-end mx-auto pt-[65px] md:px-10 sm:px-5 px-[65px] w-full">
        <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-end max-w-[1554px] mt-[35px] mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[64%] md:w-full">
              <div className="flex flex-row gap-[29px] items-start justify-between w-[34%] md:w-full">
                <Img
                  className="h-[65px] md:h-auto mt-0.5 object-cover"
                  src="images/img_group1.png"
                  alt="groupOne"
                />
                <div className="flex flex-row gap-[5px] items-start justify-between w-[69%]">
                  <Text
                    className="bg-clip-text bg-gradient  mt-2.5 sm:text-[32.63px] md:text-[34.63px] text-[36.63px] text-transparent"
                    size="txtAbyssinicaSILRegular3663"
                  >
                    HealthyMe
                  </Text>
                  <Button
                    className="flex h-[27px] items-center justify-center shadow-bs1 w-[27px]"
                    shape="round"
                    size="xs"
                    color="blue_A200_deep_purple_A200"
                  >
                    <Img
                      className="h-[15px]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex flex-row gap-[40.34px] items-center justify-start w-auto">
                <div className="flex flex-col gap-1.5 items-start justify-start w-[18%]">
                  <Text
                    className="sm:text-[17.51px] md:text-[19.51px] text-[21.51px] text-gray-800"
                    size="txtAbyssinicaSILRegular2151"
                  >
                    Home
                  </Text>
                  <Line className="bg-blue-800_75 h-0.5 md:ml-[0] ml-[3px] w-[94%]" />
                </div>
                <Text
                  className="sm:text-[17.51px] md:text-[19.51px] text-[21.51px] text-gray-800 w-auto"
                  size="txtAbyssinicaSILRegular2151"
                >
                  About Us
                </Text>
                <Text
                  className="sm:text-[17.51px] md:text-[19.51px] text-[21.51px] text-gray-800 w-auto"
                  size="txtAbyssinicaSILRegular2151"
                >
                  How to use
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-end justify-between w-[23%] md:w-full">
              <div className="flex flex-row items-end justify-evenly my-2.5">
                <Text
                  className="text-[16.77px] text-black-900 tracking-[1.01px]"
                  size="txtAbyssinicaSILRegular1677"
                >
                  English
                </Text>
                <Img
                  className="h-1.5 mb-[3px] mt-2.5"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start mt-2.5">
                <a
                  href="javascript:"
                  className="text-[16.77px] text-indigo-A400 tracking-[1.01px]"
                >
                  <Text size="txtAbyssinicaSILRegular1677IndigoA400">
                    Sign in
                  </Text>
                </a>
                <Line className="bg-indigo-A400 h-0.5 w-[41%]" />
              </div>
              <Button
                className="common-pointer cursor-pointer leading-[normal] min-w-[110px] rounded-[14px] text-[16.77px] text-center tracking-[1.01px]"
                onClick={() => navigate("/registerlight")}
                shape="round"
                color="blue_A200_deep_purple_A200"
              >
                Register
              </Button>
            </div>
          </div>
          <div className="h-[1162px] relative w-full">
            <div className="h-[1162px] m-auto w-full">
              <div className="h-[1162px] m-auto w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[484px] mb-14"
                      src="images/img_background.svg"
                      alt="background"
                    />
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-[235px]">
                      <div className="flex flex-col gap-[49px] items-end justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-[13.77px] text-gray-400 tracking-[1.38px]"
                            size="txtAbyssinicaSILRegular1377"
                          >
                            Recover Password ?
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Button
                            className="common-pointer cursor-pointer min-w-[393px] sm:min-w-full rounded-[14px] text-[18.69px] text-center tracking-[1.68px]"
                            onClick={() => navigate("/landingnew")}
                            shape="round"
                            color="indigo_A400"
                            size="md"
                            variant="fill"
                          >
                            Sign In
                          </Button>
                          <div className="flex flex-row items-center justify-between mt-[51px] w-full">
                            <Line className="bg-gray-300 h-px my-2 w-[31%]" />
                            <a
                              href="javascript:"
                              className="text-[13.77px] text-gray-500 tracking-[1.24px]"
                            >
                              <Text size="txtAbyssinicaSILRegular1377Gray500">
                                Or continue with
                              </Text>
                            </a>
                            <Line className="bg-gray-300 h-px my-2 w-[31%]" />
                          </div>
                          <div className="flex flex-row items-center justify-between mt-[49px] w-full">
                            <div className="bg-gray-100_02 border border-gray-300_01 border-solid flex flex-col items-start justify-start p-3.5 rounded-[10px] w-[30%]">
                              <Img
                                className="common-pointer h-[29px] ml-6 md:ml-[0]"
                                src="images/img_google.svg"
                                alt="google"
                                onClick={() => googleSignIn()}
                              />
                            </div>
                            <div className="bg-white-A700 flex flex-col items-start justify-start p-3.5 rounded-[10px] shadow-bs2 w-[30%]">
                              <Img
                                className="h-[29px] md:ml-[0] ml-[25px]"
                                src="images/img_fire.svg"
                                alt="fire"
                              />
                            </div>
                            <div className="bg-gray-100_02 border border-gray-300_01 border-solid flex flex-col items-start justify-start p-3.5 rounded-[10px] w-[30%]">
                              <Img
                                className="h-[29px] md:ml-[0] ml-[21px]"
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
                  className="absolute h-[1162px] inset-y-[0] my-auto object-cover right-[20%] w-1/2"
                  src="images/img_shirtlessbodyb.png"
                  alt="shirtlessbodyb"
                />
              </div>
              <div className="absolute flex flex-col gap-[57px] inset-x-[0] justify-start mx-auto top-[3%] w-[91%]">
                <Text
                  className="md:ml-[0] ml-[1104px] sm:text-[35.77px] md:text-[41.77px] text-[45.77px] text-black-900"
                  size="txtAbyssinicaSILRegular4577"
                >
                  Welcome Back
                </Text>
                <div className="flex flex-col md:gap-10 gap-[76px] items-start justify-start mr-[813px]">
                  <Text
                    className="leading-[75.00px] md:text-5xl text-[63.57px] text-black-900"
                    size="txtAbyssinicaSILRegular6357"
                  >
                    <>
                      Sign In to
                      <br />
                      get your nutrients
                    </>
                  </Text>
                  <Text
                    className="sm:text-[23.12px] md:text-[25.12px] text-[27.12px] text-black-900"
                    size="txtAbyssinicaSILRegular2712"
                  >
                    <span className="text-black-900 font-abyssinicasil text-left font-normal">
                      <>
                        if you don’t have an account
                        <br />
                        you can{" "}
                      </>
                    </span>
                    <span className="text-indigo-A400 font-abyssinicasil text-left font-normal">
                      Register here!
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[413px] items-end justify-start right-[0] top-[11%] w-[26%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[59px] h-[75px] py-[7px] relative w-full">
                  <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                  <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-[90%]">
                    <Text
                      className="text-[17.71px] text-blue_gray-700 tracking-[1.59px]"
                      size="txtAbyssinicaSILRegular1771"
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
                <div className="font-inter md:h-[61px] h-[75px] mt-0.5 py-[7px] relative w-full">
                  <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                  <div className="absolute flex flex-row h-max inset-[0] items-start justify-between m-auto w-[90%]">
                    <Text
                      className="sm:text-[21.58px] md:text-[23.58px] text-[25.58px] text-blue_gray-500"
                      size="txtInterRegular2558"
                    >
                      ••••••••
                    </Text>
                    <Img
                      className="h-[23px] w-[23px]"
                      src="images/img_xicon_blue_gray_500_01.svg"
                      alt="xicon_One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[9px] items-end justify-start w-[18%] md:w-full">
                <Text
                  className="text-[16.72px] text-black-900 tracking-[1.00px]"
                  size="txtAbyssinicaSILRegular1672"
                >
                  Go Dark
                </Text>
                <Line className="bg-black-900 h-0.5 mr-0.5 w-[36%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginlightPage;
