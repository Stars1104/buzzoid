import React from "react";
import SubmitReview from "./SubmitReview";
import { FaStar } from "react-icons/fa";

function WhatCustomerSays() {
  return (
    <div className="flex items-center flex-col justify-center mt-24 w-full">
      <p className="lg:text-5xl md:text-[2rem] text-[1.3rem] font-[system-ui] font-[700] text-center text-[#001F3F]">
        What Our Customers Say
      </p>

      <div className="flex items-center justify-between lg:flex-row flex-col  mt-12 lg:w-4/6 w-full ">
        <div className="lg:w-1/3 w-5/6">
          <SubmitReview />
        </div>
        <div className="flex flex-col w-5/6 mt-12 lg:mt-0 lg:w-1/2 lg:ml-12 ">
          <div className="mb-6 ">
            <div className="flex gap-1 lg:order-1 order-1 md:w-auto sm:w-[60%]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2ECC71] p-[0.5rem] w-6 h-6 flex justify-center items-center rounded-lg"
                >
                  <FaStar className="text-lg text-white" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-semibold">"Love This App!"</p>
              <p className="text-gray-600 ">Ellie</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex gap-1 lg:order-1 order-1 md:w-auto sm:w-[60%]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2ECC71] p-[0.5rem] w-6 h-6 flex justify-center items-center rounded-lg"
                >
                  <FaStar className="text-lg text-white" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-semibold">"Love This App!"</p>
              <p className="text-gray-600 ">Ellie</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex gap-1 lg:order-1 order-1 md:w-auto sm:w-[60%]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2ECC71] p-[0.5rem] w-6 h-6 flex justify-center items-center rounded-lg"
                >
                  <FaStar className="text-lg text-white" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-semibold">"Love This App!"</p>
              <p className="text-gray-600 ">Ellie</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex gap-1 lg:order-1 order-1 md:w-auto sm:w-[60%]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2ECC71] p-[0.5rem] w-6 h-6 flex justify-center items-center rounded-lg"
                >
                  <FaStar className="text-lg text-white" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-semibold">"Love This App!"</p>
              <p className="text-gray-600 ">Ellie</p>
            </div>
          </div>

          

          <div className="w-full self-center px-4 py-1 text-center hover:cursor-pointer bg-gray-200 text-gray-600 font-medium rounded-xl shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
              <p>Show All Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatCustomerSays;
