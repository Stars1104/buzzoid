import React from "react";

function WhyChooseBuzzoid() {
  return (
    <div className="flex items-center flex-col justify-center mt-24">
      <p className="lg:text-5xl md:text-[2rem] text-[1.3rem] font-[system-ui] font-[700] text-center text-[#001F3F]">
        Why Choose{" "}
        <span
          style={{
            background: "linear-gradient(45deg, #fabf58 13%, #f59252 40%)",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Buzzoid
        </span>
      </p>

      <div className="mt-24 px-24 flex w-full flex-wrap items-center justify-center flex-row text-[#001F3F] gap-4 ">
        <div className="w-1/4 bg-white border rounded-lg shadow-lg flex items-center justify-center flex-col ">
          <img src="assets/icon/clock-64.png" className="h-16 w-16 my-6" />
          <p className="text-lg font-bold">Instant delivery guaranteed</p>

          <p className="text-sm p-8 text-center font-semibold">
            You don't have to wait for your growth to start-your Insta followers
            arrive immediately! Buzzoid's state-of-the-art system delivers
            powerful interactions as soon as you order!
          </p>
        </div>
        <div className="w-1/4 bg-white border rounded-lg shadow-lg flex items-center justify-center flex-col ">
          <img src="assets/icon/clock-64.png" className="h-16 w-16 my-6" />
          <p className="text-lg font-bold">Instant delivery guaranteed</p>

          <p className="text-sm p-8 text-center font-semibold">
            You don't have to wait for your growth to start-your Insta followers
            arrive immediately! Buzzoid's state-of-the-art system delivers
            powerful interactions as soon as you order!
          </p>
        </div>
        <div className="w-1/4 bg-white border rounded-lg shadow-lg flex items-center justify-center flex-col ">
          <img src="assets/icon/clock-64.png" className="h-16 w-16 my-6" />
          <p className="text-lg font-bold">Instant delivery guaranteed</p>

          <p className="text-sm p-8 text-center font-semibold">
            You don't have to wait for your growth to start-your Insta followers
            arrive immediately! Buzzoid's state-of-the-art system delivers
            powerful interactions as soon as you order!
          </p>
        </div>
        <div className="w-1/4 bg-white border rounded-lg shadow-lg flex items-center justify-center flex-col ">
          <img src="assets/icon/clock-64.png" className="h-16 w-16 my-6" />
          <p className="text-lg font-bold">Instant delivery guaranteed</p>

          <p className="text-sm p-8 text-center font-semibold">
            You don't have to wait for your growth to start-your Insta followers
            arrive immediately! Buzzoid's state-of-the-art system delivers
            powerful interactions as soon as you order!
          </p>
        </div>
        <div className="w-1/4 bg-white border rounded-lg shadow-lg flex items-center justify-center flex-col ">
          <img src="assets/icon/clock-64.png" className="h-16 w-16 my-6" />
          <p className="text-lg font-bold">Instant delivery guaranteed</p>

          <p className="text-sm p-8 text-center font-semibold">
            You don't have to wait for your growth to start-your Insta followers
            arrive immediately! Buzzoid's state-of-the-art system delivers
            powerful interactions as soon as you order!
          </p>
        </div>
        <div className="w-1/4 bg-sky-300 border rounded-lg shadow-lg flex items-center justify-center flex-col relative">
          <p className="my-4 font-bold">Want organic, Targeted followers?</p>

          <p className="uppercase p-1 text-xs absolute -top-3 right-3 bg-orange-600 rounded-md shadow font-bold text-white">New Service</p>

          <p className="text-sm py-2 px-4 font-bold hover:cursor-pointer hover:brightness-150 text-center  bg-yellow-300 my-4 rounded-lg shadow-md">
            Try AI Growth for Free {`>`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseBuzzoid;
