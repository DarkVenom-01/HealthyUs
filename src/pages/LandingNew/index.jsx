import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import LandingNewLink from "components/LandingNewLink";

const LandingNewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100_03 flex flex-col font-abyssinicasil items-center justify-end mx-auto shadow-bs6 w-full">
        <div className="flex flex-col items-end justify-start mt-[51px] overflow-auto w-full">
          <div className="h-[1051px] md:h-[965px] md:px-5 relative w-[95%] md:w-full">
            <div className="absolute flex flex-col md:gap-10 gap-[126px] justify-start left-[2%] top-[3%] w-[90%]">
              <div className="flex md:flex-col flex-row gap-[29px] items-center justify-end md:ml-[0] ml-[824px] w-[44%] md:w-full">
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
                <div
                  className="common-pointer bg-gradient  flex flex-col items-start justify-end p-2 rounded-[17px]"
                  onClick={() => navigate("/loginlight")}
                >
                  <Text
                    className="md:ml-[0] ml-[38px] mt-[7px] sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtAbyssinicaSILRegular34"
                  >
                    Log In
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start mr-[122px] w-[92%] md:w-full">
                <div className="md:h-[350px] h-[433px] relative w-full">
                  <Img
                    className="absolute h-[350px] right-[0] top-[0]"
                    src="images/img_background_blue_700.svg"
                    alt="background"
                  />
                  <div className="absolute h-[72px] left-[0] pr-[13px] top-[3%] w-[27%]">
                    <div className="bg-white-A700_3f border border-gray-400_01 border-solid h-[72px] m-auto rounded-[36px] w-[97%]"></div>
                    <div className="absolute flex flex-row gap-[15px] h-max inset-[0] items-start justify-center m-auto w-[83%]">
                      <Text
                        className="mb-0.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_02"
                        size="txtAbyssinicaSILRegular32"
                      >
                        Health Matters{" "}
                      </Text>
                      <Img
                        className="h-10 md:h-auto mt-0.5 object-cover"
                        src="images/img_group20.png"
                        alt="groupTwenty"
                      />
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[0] leading-[105.00px] left-[0] md:text-5xl text-[90px] text-blue-600"
                    size="txtAbyssinicaSILRegular90"
                  >
                    <span className="text-blue-600 font-abyssinicasil text-left font-normal">
                      One Step Solution
                    </span>
                    <span className="text-blue-600 font-abyssinicasil text-left font-normal">
                      <>
                        {" "}
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-abyssinicasil text-left font-normal">
                      for all your dietary needs.
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-11 items-start justify-start w-[65%] md:w-full">
                  <Text
                    className="leading-[43.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-600 w-[88%] sm:w-full"
                    size="txtAbyssinicaSILRegular32Gray600"
                  >
                    Using your BMI index we calculate whether the dish is
                    suitable for you.
                  </Text>
                  <div className="bg-gray-100_04 flex flex-col items-start justify-end p-[39px] sm:px-5 rounded-[50px] shadow-bs7 w-full">
                    <Text
                      className="md:ml-[0] ml-[7px] mt-0.5 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-700_cc"
                      size="txtAbyssinicaSILRegular30"
                    >
                      Search your product
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] h-[965px] right-[0] w-[65%] md:w-full">
              <Img
                className="h-[965px] m-auto object-cover w-full"
                src="images/img_kisspngphysici.png"
                alt="kisspngphysici"
              />
              <List
                className="absolute bottom-[14%] sm:flex-col flex-row gap-5 grid grid-cols-3 justify-start left-[3%] w-auto"
                orientation="horizontal"
              >
                <div className="bg-gradient  flex flex-col h-[78px] items-center justify-start p-4 rounded-[50%] w-full">
                  <Img
                    className="h-[45px] w-[45px]"
                    src="images/img_heroiconsoutlinephoto.svg"
                    alt="heroiconsoutlin"
                  />
                </div>
                <div className="bg-gradient  flex flex-col h-[78px] items-center justify-start p-4 rounded-[50%] w-full">
                  <Img
                    className="h-[45px] w-[45px]"
                    src="images/img_heroiconsoutlinemicrophone.svg"
                    alt="heroiconsoutlin"
                  />
                </div>
                <div className="bg-gradient  flex flex-col h-[78px] items-center justify-start p-4 rounded-[50%] w-full">
                  <Img
                    className="h-[45px] w-[45px]"
                    src="images/img_search_white_a700.svg"
                    alt="search"
                  />
                </div>
              </List>
            </div>
            <div className="absolute flex flex-row gap-[17px] items-start justify-center left-[9%] top-[3%] w-[16%]">
              <Text
                className="bg-clip-text bg-gradient  mt-3 sm:text-[33.22px] md:text-[39.22px] text-[43.22px] text-transparent"
                size="txtAbyssinicaSILRegular4322"
              >
                HealthyUs
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
            <Img
              className="absolute h-32 left-[0] object-cover top-[0] w-[9%]"
              src="images/img_screenshot20231104_149x157.png"
              alt="screenshot20231"
            />
          </div>
          <div className="flex flex-col items-start justify-start mt-[37px] md:px-5 w-[93%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[33px] items-start justify-start w-[96%] md:w-full">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5 w-[37%] md:w-full">
                <Text
                  className="bg-clip-text bg-gradient  sm:text-3xl md:text-[32px] text-[34px] text-transparent tracking-[7.82px]"
                  size="txtAbyssinicaSILRegular34BlueA200"
                >
                  FEATURES WE PROVIDE
                </Text>
                <div className="h-[210px] md:h-[241px] mt-[31px] relative w-[93%] sm:w-full">
                  <Text
                    className="common-pointer leading-[105.00px] m-auto md:text-5xl text-[70px] text-black-900"
                    size="txtAbyssinicaSILRegular70"
                    onClick={() => navigate("/bmi")}
                  >
                    <>
                      Calculating BMI
                      <br />
                      is easier
                    </>
                  </Text>
                  <Img
                    className="absolute bottom-[6%] h-[61px] right-[30%] w-[61px]"
                    src="images/img_medicalheartrate.svg"
                    alt="medicalheartrat"
                  />
                </div>
                <Text
                  className="common-pointer md:ml-[0] ml-[3px] mt-[15px] md:text-3xl sm:text-[28px] text-[32px] text-gray-600 w-full"
                  size="txtAbyssinicaSILRegular32Gray600"
                  onClick={() => navigate("/bmi")}
                >
                  We calculate your BMI index from data like age, height,
                  weight.
                </Text>
                <Text
                  className="bg-clip-text bg-gradient  mt-[243px] sm:text-3xl md:text-[32px] text-[34px] text-transparent tracking-[7.82px]"
                  size="txtAbyssinicaSILRegular34BlueA200"
                >
                  HELP TOPICS
                </Text>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start w-[62%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-end justify-between w-[82%] md:w-full">
                  <Img
                    className="h-[111px] md:h-auto mt-[22px] object-cover"
                    src="images/img_diet1.png"
                    alt="dietOne"
                  />
                  <Img
                    className="h-32 md:h-auto mb-[5px] object-cover w-32"
                    src="images/img_stats21.png"
                    alt="statsTwentyOne"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between md:ml-[0] ml-[5px] w-full">
                  <div className="md:h-[200px] h-[228px] md:mt-0 mt-[7px] relative w-[35%] md:w-full">
                    <Text
                      className="absolute inset-x-[0] mx-auto sm:text-3xl md:text-[32px] text-[34px] text-black-900 top-[0] w-max"
                      size="txtAbyssinicaSILRegular34Black900"
                    >
                      Food Recomendation
                    </Text>
                    <Text
                      className="absolute bottom-[0] left-[0] md:text-3xl sm:text-[28px] text-[32px] text-gray-600 w-[94%] sm:w-full"
                      size="txtAbyssinicaSILRegular32Gray600"
                    >
                      We provide food recomendation according to your calorie
                      requirements.
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[5px] justify-start w-[65%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[307px] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                      size="txtAbyssinicaSILRegular34Black900"
                    >
                      Nutritional Value
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <Img
                          className="h-[158px] md:h-auto object-cover w-[158px]"
                          src="images/img_chatbot1.png"
                          alt="chatbotOne"
                        />
                        <Text
                          className="sm:mt-0 mt-1 md:text-3xl sm:text-[28px] text-[32px] text-gray-600"
                          size="txtAbyssinicaSILRegular32Gray600"
                        >
                          Get all the nutritional values of your preferred dish.
                        </Text>
                      </div>
                      <Text
                        className="mt-1 sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                        size="txtAbyssinicaSILRegular34Black900"
                      >
                        Interactive Chatbot
                      </Text>
                      <Text
                        className="mt-[13px] md:text-3xl sm:text-[28px] text-[32px] text-gray-600 w-1/2 sm:w-full"
                        size="txtAbyssinicaSILRegular32Gray600"
                      >
                        Solve your queries by interacting with our bot.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="mt-[47px] md:text-5xl text-[70px] text-black-900"
              size="txtAbyssinicaSILRegular70"
            >
              Enhance Your Lifestyle
            </Text>
            <div className="flex flex-col items-center justify-end mt-[110px] pt-[13px] w-full">
              <div className="overflow-x-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[11px] items-center justify-start md:mt-0 mt-[5px] w-2/5 md:w-full">
                    <div className="flex md:flex-col flex-row gap-[11px] items-center justify-between w-full">
                      <div
                        className="common-pointer flex flex-col h-[373px] md:h-auto items-center justify-start mb-0.5 w-[309px]"
                        onClick={() => navigate("/mainpageone")}
                      >
                        <div className="flex flex-col items-center justify-start w-[96%]">
                          <Img
                            className="h-[373px] md:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                            src="images/img_rectangle1.png"
                            alt="rectangleOne"
                          />
                        </div>
                      </div>
                      <Img
                        className="common-pointer h-[370px] md:h-auto object-cover rounded-[36px]"
                        src="images/img_cholebhature1.png"
                        alt="cholebhatureOne"
                        onClick={() => navigate("/mainpagetwo")}
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[91%] md:w-full">
                      <Text
                        className="sm:mt-0 mt-1.5 sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                        size="txtAbyssinicaSILRegular34Black900"
                      >
                        PIZZA
                      </Text>
                      <Text
                        className="mb-1.5 sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                        size="txtAbyssinicaSILRegular34Black900"
                      >
                        CHOLE BHATURE
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col relative w-1/5 md:w-full">
                    <Img
                      className="common-pointer h-[382px] mx-auto object-cover rounded-[55px] w-full"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                      onClick={() => navigate("/mainpagefive")}
                    />
                    <Text
                      className="ml-[23px] mt-[-0.91px] sm:text-3xl md:text-[32px] text-[34px] text-black-900 z-[1]"
                      size="txtAbyssinicaSILRegular34Black900"
                    >
                      BURGER
                    </Text>
                  </div>
                  <div
                    className="common-pointer flex md:flex-1 flex-col items-end justify-end md:mt-0 mt-[7px] w-1/5 md:w-full"
                    onClick={() => navigate("/mainpagefour")}
                  >
                    <div className="flex flex-col justify-end w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Img
                          className="h-[370px] md:h-auto sm:mt-0 mt-1 object-cover rounded-[42px]"
                          src="images/img_rectangle1_370x309.png"
                          alt="rectangleOne_One"
                        />
                        <Img
                          className="h-[370px] md:h-auto mb-1 object-cover rounded-[56px]"
                          src="images/img_bakeddonuts003s.png"
                          alt="bakeddonuts003s"
                        />
                      </div>
                      <Text
                        className="leading-[40.00px] ml-1.5 md:ml-[0] mr-[1157px] mt-0.5 sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                        size="txtAbyssinicaSILRegular34Black900"
                      >
                        <>
                          CHEESE FILLED <br />
                          PIZZA
                        </>
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex md:flex-1 flex-col gap-[21px] items-center justify-start w-1/5 md:w-full"
                    onClick={() => navigate("/mainpagesix")}
                  >
                    <Img
                      className="h-[370px] sm:h-auto object-cover rounded-[42px] w-[97%] md:w-full"
                      src="images/img_rectangle1_1.png"
                      alt="rectangleOne_Two"
                    />
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                      size="txtAbyssinicaSILRegular34Black900"
                    >
                      RAW STRAWBERRY
                    </Text>
                  </div>
                  <div
                    className="common-pointer flex md:flex-1 flex-col gap-[22px] justify-start md:mt-0 mt-[3px] w-1/5 md:w-full"
                    onClick={() => navigate("/mainpagethirteen")}
                  >
                    <Img
                      className="h-[370px] sm:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                      src="images/img_rectangle1_2.png"
                      alt="rectangleOne_Three"
                    />
                    <Text
                      className="ml-1.5 md:ml-[0] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                      size="txtAbyssinicaSILRegular34Black900"
                    >
                      VEG SOUP
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="common-pointer flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[2523px] mt-[123px] md:px-5 w-full"
            onClick={() => navigate("/mainpage")}
          >
            <div className="flex md:flex-1 flex-col gap-5 justify-start w-[13%] md:w-full">
              <Img
                className="h-[370px] sm:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                src="images/img_rectangle1_3.png"
                alt="rectangleOne_Four"
              />
              <Text
                className="ml-1.5 md:ml-[0] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                size="txtAbyssinicaSILRegular34Black900"
              >
                MEAT
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[57%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[21px] justify-start w-full">
                <Img
                  className="h-[370px] sm:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                  src="images/img_rectangle1_4.png"
                  alt="rectangleOne"
                />
                <Text
                  className="ml-1.5 md:ml-[0] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                  size="txtAbyssinicaSILRegular34Black900"
                >
                  PEACHES
                </Text>
              </div>
              <div className="flex flex-col gap-[21px] justify-start w-full">
                <Img
                  className="h-[370px] sm:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                  src="images/img_rectangle1_5.png"
                  alt="rectangleOne"
                />
                <Text
                  className="ml-1.5 md:ml-[0] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                  size="txtAbyssinicaSILRegular34Black900"
                >
                  ICE CREAM
                </Text>
              </div>
              <div className="flex flex-col gap-[21px] justify-start w-full">
                <Img
                  className="h-[370px] sm:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                  src="images/img_rectangle1_6.png"
                  alt="rectangleOne"
                />
                <Text
                  className="ml-1.5 md:ml-[0] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                  size="txtAbyssinicaSILRegular34Black900"
                >
                  CAKE
                </Text>
              </div>
              <div className="flex flex-col gap-[21px] justify-start w-full">
                <Img
                  className="h-[370px] sm:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                  src="images/img_rectangle1_7.png"
                  alt="rectangleOne"
                />
                <Text
                  className="ml-1.5 md:ml-[0] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                  size="txtAbyssinicaSILRegular34Black900"
                >
                  FRUITS
                </Text>
              </div>
            </List>
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 w-[27%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[22px] justify-start w-full">
                <Img
                  className="h-[370px] sm:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                  src="images/img_rectangle1_8.png"
                  alt="rectangleOne"
                />
                <Text
                  className="ml-1.5 md:ml-[0] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                  size="txtAbyssinicaSILRegular34Black900"
                >
                  CURRY
                </Text>
              </div>
              <div className="flex flex-col gap-[22px] justify-start w-full">
                <Img
                  className="h-[370px] sm:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                  src="images/img_rectangle1_9.png"
                  alt="rectangleOne"
                />
                <Text
                  className="ml-1.5 md:ml-[0] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                  size="txtAbyssinicaSILRegular34Black900"
                >
                  FRUIT CHAT
                </Text>
              </div>
            </List>
          </div>
          <div className="md:h-[1286px] h-[654px] sm:h-[852px] mt-[206px] md:px-5 relative w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start pb-[31px] rounded-[50px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start w-full">
                    <Line className="bg-blue_gray-50_01 h-px rotate-[-180deg] w-full" />
                    <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex sm:flex-1 flex-col gap-[28.79px] items-start justify-start md:mt-0 mt-0.5 w-auto sm:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="bg-clip-text bg-gradient  sm:text-[33.22px] md:text-[39.22px] text-[43.22px] text-transparent"
                              size="txtAbyssinicaSILRegular4322"
                            >
                              HealthyUs
                            </Text>
                          </div>
                          <Text
                            className="leading-[35.00px] sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-500_02"
                            size="txtAbyssinicaSILRegular2159"
                          >
                            <>
                              WE CARE FOR YOU,
                              <br />
                              BECAUSE YOUR HEALTH MATTERS
                            </>
                          </Text>
                          <div className="flex flex-row gap-[26.39px] items-center justify-start w-auto">
                            <div className="flex flex-col items-end justify-start w-[7%]">
                              <Img
                                className="h-[21px]"
                                src="images/img_facebook_blue_600_21x11.svg"
                                alt="facebook_One"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start w-[11%]">
                              <Img
                                className="h-[17px]"
                                src="images/img_twitter.svg"
                                alt="twitter"
                              />
                            </div>
                            <Img
                              className="h-[22px] w-[22px]"
                              src="images/img_instagram.svg"
                              alt="instagram"
                            />
                            <div className="flex flex-col items-center justify-start w-[22px]">
                              <div className="flex flex-col items-center justify-start w-[21px] md:w-full">
                                <Img
                                  className="h-5 w-[21px]"
                                  src="images/img_linkedin.svg"
                                  alt="linkedin"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[12%]">
                              <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                                <Img
                                  className="h-4"
                                  src="images/img_youtube.svg"
                                  alt="youtube"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[123px] grid sm:grid-cols-1 grid-cols-3 ml-24 md:ml-[0] w-[42%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[47.99px] items-start justify-start w-auto">
                              <Text
                                className="sm:text-[19.99px] md:text-[21.99px] text-[23.99px] text-blue-600 w-auto"
                                size="txtAbyssinicaSILRegular2399"
                              >
                                Product
                              </Text>
                              <div className="flex flex-col gap-[21.59px] items-start justify-start w-auto">
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                      size="txtAbyssinicaSILRegular2159Bluegray700"
                                    >
                                      Features
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                      size="txtAbyssinicaSILRegular2159Bluegray700"
                                    >
                                      Pricing
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                      size="txtAbyssinicaSILRegular2159Bluegray700"
                                    >
                                      Case studies
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                      size="txtAbyssinicaSILRegular2159Bluegray700"
                                    >
                                      Reviews
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                      size="txtAbyssinicaSILRegular2159Bluegray700"
                                    >
                                      Updates
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[47.99px] items-start justify-start w-auto">
                            <Text
                              className="sm:text-[19.99px] md:text-[21.99px] text-[23.99px] text-blue-600 w-auto"
                              size="txtAbyssinicaSILRegular2399"
                            >
                              Company
                            </Text>
                            <div className="flex flex-col gap-[21.59px] items-start justify-start w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    About
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    Contact us
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    Careers
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    Culture
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    Blog
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[47.99px] items-start justify-start w-auto">
                            <Text
                              className="sm:text-[19.99px] md:text-[21.99px] text-[23.99px] text-blue-600 w-auto"
                              size="txtAbyssinicaSILRegular2399"
                            >
                              Support
                            </Text>
                            <div className="flex flex-col gap-[21.59px] items-start justify-start w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    Getting started
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    Help center
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    Server status
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    Report a bug
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 text-center w-auto"
                                    size="txtAbyssinicaSILRegular2159Bluegray700"
                                  >
                                    Chat support
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                        <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[131px] w-[19%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="sm:text-[19.99px] md:text-[21.99px] text-[23.99px] text-blue-600 w-auto"
                              size="txtAbyssinicaSILRegular2399"
                            >
                              Contacts us
                            </Text>
                          </div>
                          <LandingNewLink
                            className="flex flex-col font-dmsans items-start justify-start mt-12 w-auto"
                            useremailimage="images/img_mail.svg"
                          />
                          <LandingNewLink
                            className="flex flex-col font-dmsans items-start justify-start mt-6 w-auto"
                            linkitem="XXXXXXXXXXX"
                          />
                          <div className="flex flex-row font-abyssinicasil gap-[9.6px] items-start justify-start mt-[26px] w-auto">
                            <div className="flex flex-col h-[23px] items-center justify-start w-[23px]">
                              <Img
                                className="h-[23px] w-[23px]"
                                src="images/img_instagram_blue_600.svg"
                                alt="instagram_One"
                              />
                            </div>
                            <Text
                              className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-700 w-auto"
                              size="txtAbyssinicaSILRegular2159Bluegray700"
                            >
                              DTU, DELHI 201306
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray-300_03 h-px mt-[125px] w-full" />
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[33px] w-[99%] md:w-full">
                        <Text
                          className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-500_02"
                          size="txtAbyssinicaSILRegular2159"
                        >
                          Copyright © 2023
                        </Text>
                        <Text
                          className="sm:text-[17.59px] md:text-[19.59px] text-[21.59px] text-blue_gray-500_02 text-right"
                          size="txtDMSansRegular2159"
                        >
                          <span className="text-blue_gray-500_02 font-abyssinicasil font-normal">
                            All Rights Reserved |{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-indigo-A700 font-abyssinicasil font-normal underline"
                          >
                            Terms and Conditions
                          </a>
                          <span className="text-blue_gray-500_02 font-abyssinicasil font-normal">
                            {" "}
                            |{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-indigo-A700 font-abyssinicasil font-normal underline"
                          >
                            Privacy Policy
                          </a>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[149px] left-[8%] object-cover top-[0] w-[10%]"
              src="images/img_screenshot20231104_149x157.png"
              alt="screenshot20231_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingNewPage;
