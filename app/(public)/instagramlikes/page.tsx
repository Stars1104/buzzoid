import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaCheck, FaStar } from "react-icons/fa";
import Image from "next/image";
import Delivery from "../../components/instagramlikes/Delivery";
import WhyChooseBuzzoid from "@/app/components/instagramlikes/WhyChooseBuzzoid";
import HowItWorks from "@/app/components/instagramlikes/HowItWorks";
import BenefitOfBuying from "@/app/components/instagramlikes/BenefitOfBuying";
import FAQ from "@/app/components/homepage/Faq";
import BoostYourIG from "@/app/components/instagramlikes/BoostYourIG";
import WhatCustomerSays from "@/app/components/instagramlikes/WhatCustomerSays";

const InstagramComment = () => {
  return (
    <div>
      <Header />
      <section className="w-full flex flex-col justify-center items-center mt-24">
        <div className="max-w-7xl w-full flex flex-col justify-center items-center pt-10 px-2">
          <div className="w-full flex flex-col justify-center items-center mb-12">
            <div className="flex md:flex-row flex-col ">
              <p className="lg:text-5xl md:text-[2rem] text-[1.3rem] font-[system-ui] font-[700] text-center text-[#001F3F]">
                Buy Instagram Followers with{" "}
              </p>
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #326fd6 0%, #f461f5 100%)",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className=" lg:text-5xl md:text-[2rem] text-[1.3rem] font-[system-ui] font-[700] text-center ml-3"
              >
                Instant Delivery
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-12-500 md:w-[38rem] w-full">
            <span className="text-center text-xl font-[system-ui] font-medium text-gray-600">
              At Buzzoid, you can buy Instagram followers quickly, safely, and
            </span>
            <span className="text-center text-xl font-[system-ui] font-medium text-gray-600">
              easily with just a few clicks. See our affordable prices and deals
            </span>
            <span className="text-center text-xl font-[system-ui] font-medium text-gray-600 flex md:flex-row flex-col">
              below! Rated world{" "}
              <span className="text-[#2ECC71] ml-3">
                #1 IG growth service since 2012.
              </span>
            </span>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-8">
          <div className="lg:flex lg:justify-center lg:w-[65%] w-full lg:items-center grid grid-cols-[60%,40%] place-items-center grid-rows-2 bg-transparent lg:py-4 lg:px-0 px-2 rounded-lg">
            <div className="flex gap-1 lg:order-1 order-1 md:justify-center justify-start md:w-auto sm:w-[60%]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2ECC71] p-[0.5rem] w-8 h-8 flex justify-center items-center rounded-lg"
                >
                  <FaStar className="text-lg text-white" />
                </div>
              ))}
              <div className="w-[1px] h-8 bg-gray-500 ml-3 lg:flex hidden"></div>
            </div>

            <div className="flex items-center gap-2 bg-[#bef4d4] text-white lg:px-4 py-[0.5rem] rounded-lg lg:w-[50%] sm:w-[75%] w-full lg:order-2 order-3 lg:ml-4 lg:mr-4 col-span-2">
              <div className="content w-full">
                <div className="slider w-full">
                  <div className="slider-text-1 text-sm font-bold w-full">
                    <span className="relative flex size-3 ml-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ECC71] opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-[#2ECC71]"></span>
                    </span>
                    <div className="flex justify-between w-full h-full mt-20px items-center text-[#2ECC71] px-2">
                      <div className="w-1/2 flex justify-center font-[system-ui]">
                        <b>100 likes &nbsp;</b>delivered
                      </div>
                      <div className="w-1/2 flex justify-end items-center gap-2 font-[system-ui]">
                        <span className="p-1 rounded-full bg-white text-[#2ECC71]">
                          {" "}
                          <FaCheck />{" "}
                        </span>
                        <span>19 mins ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="slider-text-2 text-sm font-bold w-full">
                    <span className="relative flex size-3 ml-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ECC71] opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-[#2ECC71]"></span>
                    </span>
                    <div className="flex justify-between w-full h-full mt-20px items-center text-[#2ECC71] px-2">
                      <div className="w-1/2 flex justify-center font-[system-ui]">
                        <b>100 likes &nbsp;</b>delivered
                      </div>
                      <div className="w-1/2 flex justify-end items-center gap-2 font-[system-ui]">
                        <span className="p-1 rounded-full bg-white text-[#2ECC71]">
                          {" "}
                          <FaCheck />{" "}
                        </span>
                        <span>19 mins ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="slider-text-3 text-sm font-bold w-full">
                    <span className="relative flex size-3 ml-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ECC71] opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-[#2ECC71]"></span>
                    </span>
                    <div className="flex justify-between w-full h-full mt-20px items-center text-[#2ECC71] px-2">
                      <div className="w-1/2 flex justify-center font-[system-ui]">
                        <b>100 likes &nbsp;</b>delivered
                      </div>
                      <div className="w-1/2 flex justify-end items-center gap-2 font-[system-ui]">
                        <span className="p-1 rounded-full bg-white text-[#2ECC71]">
                          {" "}
                          <FaCheck />{" "}
                        </span>
                        <span>19 mins ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:justify-center justify-end md:ml-0 ml-10 items-center md:w-auto sm:w-[40%] lg:order-3 order-2">
              <div className="w-[1px] h-8 bg-gray-500 lg:flex hidden"></div>
              <button className="border border-black px-3 py-2 rounded-lg ml-4">
                <Image
                  src="assets/icon/apple.svg"
                  alt="Apple Pay"
                  width={45}
                  height={25}
                />
              </button>
            </div>
          </div>
        </div>

        <Delivery />

        <div className="lg:w-1/2  flex items-center justify-center flex-col lg:flex-row gap-8 mt-24 lg:h-96">
          <div className="border-2 lg:w-1/3 w-1/2 flex-col rounded-lg  text-gray-600 h-full">
            <div className="p-4  rounded-t-lg  h-20">
              <p className="font-bold text-gray-600">
                High Quality <br /> Followers
              </p>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">Everything in Active, plus:</p>
                  <p className="underline"> What's the difference?</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">Fast delivery</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">No password required</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">24/7 support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2  lg:w-1/3 w-1/2 flex-col rounded-lg  text-gray-600 h-full">
            <div className="p-4 bg-black rounded-t-lg  h-20">
              <p className="font-bold text-white">
                Active <br /> Followers
              </p>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">Everything in Active, plus:</p>
                  <p className="underline"> What's the difference?</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">Fast delivery</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">No password required</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">24/7 support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 lg:w-1/3 w-1/2 flex-col rounded-lg  text-gray-600 h-full">
            <div className="p-4 bg-[#9936fe] rounded-t-lg h-20">
              <p className="font-bold text-white ">Exclusive/ VIP</p>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold text-[#9936fe]">
                    Everything in Active, plus:
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">
                    REAL followers from Targeted people
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6 ">
                <img src="assets/icon/done-64.png" className="h-4 w-4" />
                <div className="flex-1 ">
                  <p className="font-semibold">
                    Reach the explore page and turbocharge engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <WhyChooseBuzzoid />
      </section>

      <section>
        <HowItWorks />
      </section>

      <section>
        <BenefitOfBuying />
      </section>

      <FAQ />

      <section >
        <WhatCustomerSays />
      </section>

      <section>
        <BoostYourIG />
      </section>
      <Footer />
    </div>
  );
};

export default InstagramComment;
