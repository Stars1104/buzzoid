"use client";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaQuestion } from "react-icons/fa";

const Delivery = () => {
  const [isHelpModelOpen, setIsHelpModelOpen] = useState<boolean>(false);
  const [isActiveFollowerModalOpen, setIsActiveFollowerModalOpen] =
    useState<boolean>(false);
  const [isExclusiveModelOpen, setIsExclusiveModelOpen] =
    useState<boolean>(false);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isHighQuality, setIsHighQuality] = useState<boolean>(true);
  const [isExclusive, setIsExclusive] = useState<boolean>(false);
  const [currentlyActiveID, setCurrentlyActiveID] = useState<number>(1);
  const [borderColor, setBorderColor] = useState<string>("border-gray-300");
  const [currentPrice, setCurrentPrice] = useState<number>(2.97);
  const [originPrice, setOriginPrice] = useState<number>(3.3);
  const [currentAcive, setCurrentActive] = useState<number>(1);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  function formatNumberWithSuffix(num: any) {
    if (num === 0) return "0";

    const suffixes = [
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
    ];

    let i;
    for (i = suffixes.length - 1; i >= 0; i--) {
      if (num >= suffixes[i].value) {
        return Math.round(num / suffixes[i].value) + suffixes[i].symbol;
      }
    }

    // If the number is less than 1, just return it as a string
    return num.toString();
  }

  const HighQuality = [
    {
      id: 1,
      count: 100,
      save: 0.5,
      bestselling: false,
      isActive: false,
      currentPrice: 2.97,
      originPrice: 3.3,
    },
    {
      id: 2,
      count: 250,
      save: 1,
      bestselling: false,
      isActive: true,
      currentPrice: 4.99,
      originPrice: 5.87,
    },
    {
      id: 3,
      count: 500,
      save: 2,
      bestselling: false,
      isActive: false,
      currentPrice: 6.99,
      originPrice: 8.74,
    },
    {
      id: 4,
      count: 1000,
      save: 4,
      bestselling: true,
      isActive: false,
      currentPrice: 12.99,
      originPrice: 17.32,
    },
    {
      id: 5,
      count: 2500,
      save: 10,
      bestselling: false,
      isActive: false,
      currentPrice: 29.99,
      originPrice: 42.84,
    },
    {
      id: 6,
      count: 5000,
      save: 20,
      bestselling: false,
      isActive: false,
      currentPrice: 35.99,
      originPrice: 55.37,
    },
    {
      id: 7,
      count: 10000,
      save: 35,
      bestselling: false,
      isActive: false,
      currentPrice: 49.99,
      originPrice: 83.32,
    },
    {
      id: 8,
      count: 20000,
      save: 80,
      bestselling: false,
      isActive: false,
      currentPrice: 89.99,
      originPrice: 163.32,
    },
    {
      id: 9,
      count: 50000,
      save: 250,
      bestselling: false,
      isActive: false,
      currentPrice: 199.99,
      originPrice: 444.42,
    },
    {
      id: 10,
      count: 100000,
      save: 650,
      bestselling: false,
      isActive: false,
      currentPrice: 349.99,
      originPrice: 999.97,
    },
    {
      id: 11,
      count: 200000,
      save: 1800,
      bestselling: false,
      isActive: false,
      currentPrice: 599.99,
      originPrice: 2399.96,
    },
  ];

  const ActiveFollower = [
    {
      id: 1,
      count: 100,
      save: 0.5,
      bestselling: false,
      isActive: false,
      currentPrice: 2.97,
      originPrice: 3.3,
    },
    {
      id: 2,
      count: 250,
      save: 1,
      bestselling: false,
      isActive: true,
      currentPrice: 4.99,
      originPrice: 5.87,
    },
    {
      id: 3,
      count: 500,
      save: 2,
      bestselling: false,
      isActive: false,
      currentPrice: 6.99,
      originPrice: 8.74,
    },
    {
      id: 4,
      count: 1000,
      save: 4,
      bestselling: true,
      isActive: false,
      currentPrice: 12.99,
      originPrice: 17.32,
    },
    {
      id: 5,
      count: 2500,
      save: 10,
      bestselling: false,
      isActive: false,
      currentPrice: 29.99,
      originPrice: 42.84,
    },
    {
      id: 6,
      count: 5000,
      save: 20,
      bestselling: false,
      isActive: false,
      currentPrice: 35.99,
      originPrice: 55.37,
    },
  ];

  const Exclusive = [
    {
      id: 1,
      count: 100,
      save: 0.5,
      bestselling: false,
      isActive: false,
      currentPrice: 2.97,
      originPrice: 5.5,
    },
    {
      id: 2,
      count: 250,
      save: 1,
      bestselling: false,
      isActive: true,
      currentPrice: 4.99,
      originPrice: 5.87,
    },
    {
      id: 3,
      count: 500,
      save: 2,
      bestselling: false,
      isActive: false,
      currentPrice: 6.99,
      originPrice: 8.74,
    },
    {
      id: 4,
      count: 1000,
      save: 4,
      bestselling: true,
      isActive: false,
      currentPrice: 12.99,
      originPrice: 17.32,
    },
    {
      id: 5,
      count: 2500,
      save: 10,
      bestselling: false,
      isActive: false,
      currentPrice: 29.99,
      originPrice: 42.84,
    },
    {
      id: 6,
      count: 5000,
      save: 20,
      bestselling: false,
      isActive: false,
      currentPrice: 35.99,
      originPrice: 55.37,
    },
    {
      id: 7,
      count: 10000,
      save: 35,
      bestselling: false,
      isActive: false,
      currentPrice: 49.99,
      originPrice: 83.32,
    },
    {
      id: 8,
      count: 20000,
      save: 80,
      bestselling: false,
      isActive: false,
      currentPrice: 89.99,
      originPrice: 163.32,
    },
  ];

  const Active = (index: number) => {
    setCurrentlyActiveID(1);
    if (index === 1) {
      setIsHighQuality(true);
      setBorderColor("border-gray-300");
      setIsActive(false);
      setIsExclusive(false);

      setCurrentPrice(HighQuality[1].currentPrice);
      setOriginPrice(HighQuality[1].originPrice);

      setIsToggled(false);
    } else if (index === 2) {
      setIsHighQuality(false);
      setIsActive(true);
      setBorderColor("border-[#296FF9]");
      setIsExclusive(false);

      setCurrentPrice(ActiveFollower[1].currentPrice);
      setOriginPrice(ActiveFollower[1].originPrice);
      setIsToggled(false);
    } else {
      setIsHighQuality(false);
      setIsActive(false);
      setIsExclusive(true);
      setBorderColor("border-[#952EFF]");

      setCurrentPrice(Exclusive[1].currentPrice);
      setOriginPrice(Exclusive[1].originPrice);
      setIsToggled(true);
    }
    setCurrentActive(index);
  };

  const CurrentActive = (index: number) => {
    if (index === 1) {
      return HighQuality.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center border border-gray-300 bg-gray-100 cursor-pointer rounded-lg relative md:py-4 py-4 transition duration-300 from-[#FFA567] to-[#FF4330] group ${
            item.id === currentlyActiveID
              ? "bg-gradient-to-r"
              : "hover:bg-gradient-to-r"
          }`}
          onClick={() => HighQualityActive(item.id)}
        >
          <div
            className={`absolute top-0 w-full bg-blue-500 px-1 py-[0.1rem] justify-center items-center text-white bg-gradient-to-r from-[#6ee7b7] to-[#10b981] rounded-t-lg uppercase md:text-xs text-[0.5rem] ${
              item.bestselling ? "flex" : "hidden"
            }`}
          >
            Best selling
          </div>
          <span
            className={`md:text-xl text-sm font-medium ${
              item.id === currentlyActiveID
                ? "text-white"
                : "group-hover:text-white"
            }`}
          >
            {formatNumberWithSuffix(item.count)}
          </span>
          <span
            className={`md:text-sm text-xs font-medium group-hover:text-white uppercase ${
              item.id === currentlyActiveID
                ? "text-white"
                : "group-hover:text-white"
            }`}
          >
            ${item.save} off
          </span>
        </div>
      ));
    } else if (index === 2) {
      return ActiveFollower.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center border border-gray-300 bg-gray-100 cursor-pointer rounded-lg relative md:py-4 py-4 transition duration-300 from-[#296FF9] to-[#59CEFC] group ${
            item.id === currentlyActiveID
              ? "bg-gradient-to-r"
              : "hover:bg-gradient-to-r"
          }`}
          onClick={() => ActiveFollowers(item.id)}
        >
          <div
            className={`absolute top-0 w-full bg-blue-500 px-1 py-[0.1rem] justify-center items-center text-white bg-gradient-to-r from-[#6ee7b7] to-[#10b981] rounded-t-lg uppercase md:text-xs text-[0.5rem] ${
              item.bestselling ? "flex" : "hidden"
            }`}
          >
            Best selling
          </div>
          <span
            className={`md:text-xl text-sm font-medium ${
              item.id === currentlyActiveID
                ? "text-white"
                : "group-hover:text-white"
            }`}
          >
            {formatNumberWithSuffix(item.count)}
          </span>
          <span
            className={`md:text-sm text-xs font-medium group-hover:text-white uppercase ${
              item.id === currentlyActiveID
                ? "text-white"
                : "group-hover:text-white"
            }`}
          >
            ${item.save} off
          </span>
        </div>
      ));
    } else if (index === 3) {
      return Exclusive.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center border border-gray-300 bg-gray-100 cursor-pointer rounded-lg relative md:py-4 py-4 transition duration-300 from-[#952EFF] to-[#BF81FF] group ${
            item.id === currentlyActiveID
              ? "bg-gradient-to-r"
              : "hover:bg-gradient-to-r"
          }`}
          onClick={() => ExclusiveVIP(item.id)}
        >
          <div
            className={`absolute top-0 w-full bg-blue-500 px-1 py-[0.1rem] justify-center items-center text-white bg-gradient-to-r from-[#6ee7b7] to-[#10b981] rounded-t-lg uppercase md:text-xs text-[0.5rem] ${
              item.bestselling ? "flex" : "hidden"
            }`}
          >
            Best selling
          </div>
          <span
            className={`md:text-xl text-sm font-medium ${
              item.id === currentlyActiveID
                ? "text-white"
                : "group-hover:text-white"
            }`}
          >
            {formatNumberWithSuffix(item.count)}
          </span>
          <span
            className={`md:text-sm text-xs font-medium group-hover:text-white uppercase ${
              item.id === currentlyActiveID
                ? "text-white"
                : "group-hover:text-white"
            }`}
          >
            ${item.save} off
          </span>
        </div>
      ));
    }
  };

  const HighQualityActive = (index: number) => {
    setCurrentlyActiveID(index);
    setCurrentPrice(HighQuality[index - 1].currentPrice);
    setOriginPrice(HighQuality[index - 1].originPrice);
  };

  const ActiveFollowers = (index: number) => {
    setCurrentlyActiveID(index);
    setCurrentPrice(ActiveFollower[index - 1].currentPrice);
    setOriginPrice(ActiveFollower[index - 1].originPrice);
  };

  const ExclusiveVIP = (index: number) => {
    setCurrentlyActiveID(index);
    setCurrentPrice(Exclusive[index - 1].currentPrice);
    setOriginPrice(Exclusive[index - 1].originPrice);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
    CurrentActive(3);
    Active(3);
  };

  const ItemButton = (index: number) => {
    if (index === 1) {
      return (
        <>
          <button className="flex justify-center items-center px-10 py-3 uppercase bg-gradient-to-r from-[#FFA567] to-[#FF4330] text-white font-medium rounded-lg">
            Buy Now
          </button>
          <span className="text-lg text-[#ff4330] text-center font-medium">
            You Save ${(originPrice - currentPrice).toFixed(2)}
          </span>
        </>
      );
    } else if (index === 2) {
      return (
        <>
          <button className="flex justify-center items-center px-10 py-3 uppercase bg-gradient-to-r from-[#296FF9] to-[#59CEFC] text-white font-medium rounded-lg">
            Buy Now
          </button>
          <span className="text-lg text-[#296FF9] text-center font-medium">
            You Save ${(originPrice - currentPrice).toFixed(2)}
          </span>
        </>
      );
    } else {
      return (
        <>
          <button className="flex justify-center items-center px-10 py-3 uppercase bg-gradient-to-r from-[#952EFF] to-[#BF81FF] text-white font-medium rounded-lg">
            Buy Now
          </button>
          <span className="text-lg text-[#952EFF] text-center font-medium">
            You Save ${(originPrice - currentPrice).toFixed(2)}
          </span>
        </>
      );
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 mt-10">
      <div className="md:w-[28rem] w-[95%] border border-gray-500 rounded-full flex justify-between items-center p-4 shadow-xl">
        <div className="flex justify-center items-center gap-4">
          <label
            className="relative flex items-center cursor-pointer"
            onChange={handleToggle}
          >
            <input
              type="checkbox"
              value=""
              checked={isToggled}
              onChange={handleToggle}
              className="sr-only peer"
              id="check_box"
            />
            <div
              className="w-12 h-7 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] 
                            after:absolute after:top-[2px] after:left-[-1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#952eff]"
            ></div>
            <span className="ml-3 text-base font-medium text-gray-600 peer-checked:text-[#952eff]">
              I need VIP treatment
            </span>
          </label>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="w-4 h-4 flex justify-center items-center rounded-full bg-gray-500 cursor-pointer"
            onClick={() => setIsHelpModelOpen(true)}
          >
            <FaQuestion className="w-[70%] h-[70%] text-white" />
          </div>
        </div>
      </div>

      <div className="md:w-[28rem] w-[95%] flex flex-col">
        <div className="w-full flex justify-center md:gap-4">
          <div
            className={`w-1/3 flex justify-start items-center md:p-4 p-2 border cursor-pointer rounded-t-2xl ${
              isHighQuality
                ? "border-t-2 border-l-2 border-r-2 border-b-0 border-gray-300"
                : ""
            }`}
            onClick={() => Active(1)}
          >
            <span className="font-medium md:text-base text-sm">
              High-Quality followers
            </span>
          </div>
          <div
            className={`w-1/3 flex justify-start items-center md:p-4 p-2 border cursor-pointer bg-gradient-to-r relative from-[#296FF9] to-[#59CEFC] rounded-t-2xl ${
              isActive
                ? "border-t-2 border-l-2 border-r-2 border-b-0 border-[#296FF9]"
                : ""
            }`}
            onClick={() => Active(2)}
          >
            <span className="font-medium text-white md:text-base text-sm">
              Active followers
            </span>
            <div className="flex justify-center items-center absolute top-7 right-3">
              <div
                className="w-4 h-4 flex justify-center items-center rounded-full bg-white cursor-pointer"
                onClick={() => setIsActiveFollowerModalOpen(true)}
              >
                <FaQuestion className="w-[70%] h-[70%] text-gray-500" />
              </div>
            </div>
            <span className="absolute p-1 text-white font-medium top-[-10px] flex justify-center items-center uppercase md:text-xs text-[0.5rem] right-1 rounded-md bg-gradient-to-r from-[#FFA567] to-[#FF4330]">
              recommended
            </span>
          </div>
          <div
            className={`w-1/3 flex justify-start items-center md:p-4 p-2 border cursor-pointer rounded-t-2xl bg-gradient-to-r relative from-[#952EFF] to-[#BF81FF] ${
              isExclusive
                ? "border-t-2 border-l-2 border-r-2 border-b-0 border-[#952EFF]"
                : ""
            }`}
            onClick={() => Active(3)}
          >
            <span className="font-medium text-white md:text-base text-sm">
              Exclusive/ <br /> VIP
            </span>
            <div className="flex justify-center items-center absolute top-7 right-3">
              <div
                className="w-4 h-4 flex justify-center items-center rounded-full bg-white cursor-pointer"
                onClick={() => setIsExclusiveModelOpen(true)}
              >
                <FaQuestion className="w-[70%] h-[70%] text-gray-500" />
              </div>
            </div>
            <span className="absolute p-1 text-white font-medium top-[-10px] flex justify-center items-center uppercase md:text-xs text-[0.5rem] right-1 rounded-md bg-gradient-to-r from-[#FFA567] to-[#FF4330]">
              exclusive
            </span>
          </div>
        </div>
        <div
          className={`w-full flex flex-col md:px-4 px-1 py-8 gap-4 border-2 ${borderColor}`}
        >
          <div className="grid grid-cols-4 md:gap-3 gap-1 justify-center items-center">
            {CurrentActive(currentAcive)}
          </div>
          <div className="w-full flex justify-center items-center gap-2">
            <div className="flex justify-center items-center py-2 gap-1">
              <span className="text-gray-500 font-medium text-lg">$</span>
              <span className="font-medium font-[system-ui] text-3xl">
                {currentPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-center items-center py-1 gap-1 h-9">
              <div className="text-lg font-medium text-gray-500 relative mb-2">
                <span>${originPrice.toFixed(2)}</span>
                <div className="top-1/2 w-full absolute h-[0.1rem] bg-gray-600"></div>
              </div>
            </div>
          </div>
          {ItemButton(currentAcive)}
        </div>
      </div>

      <div
        className={`w-full h-screen fixed top-0 bg-[#0000003b] justify-center items-center z-10 mb-24 ${
          isHelpModelOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center p-6 rounded-lg bg-white text-sm w-96 font-medium text-gray-500 relative">
          Fit for our most VIP Instagrammers! VIP followers are our highest
          quality packages, all from North America geo targeted and highly
          active, with real engagement, interactive stories, dynamic carousels,
          no ghost profiles, and have 5-10x more followers than following.
          <CgClose
            className="w-5 h-5 text-gray-500 absolute top-2 right-2 cursor-pointer"
            onClick={() => setIsHelpModelOpen(false)}
          />
        </div>
      </div>

      <div
        className={`w-full h-screen fixed top-0 bg-[#0000003b] justify-center items-center z-10 mb-24 ${
          isActiveFollowerModalOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center flex-col gap-4 p-6 rounded-lg bg-white text-sm w-96 font-medium text-gray-500 relative">
          <div className="flex w-full flex-col justify-center items-start gap-1">
            <h1 className="text-black">High Quality Followers</h1>
            <span>
              These are Followers with profile pictures but no further uploads
              on their account. Auto-refill is enabled within the warranty.
            </span>
          </div>
          <div className="flex w-full flex-col justify-center items-start gap-1">
            <h1 className="text-black">Active Followers</h1>
            <span>
              New Active followers are for those who are serious about their
              instagram growth. These are guaranteed with very little to NO
              drop!
            </span>
          </div>
          <div className="flex w-full flex-col justify-center items-start gap-1">
            <h1 className="text-black">Managed Growth</h1>
            <span>
              Managed growth is for brands, influencers and agencies looking for
              followers that engage. This is not an INSTANT service and is aimed
              at helping users build an authentic audience.
            </span>
          </div>
          <div className="flex w-full flex-col justify-center items-start gap-1">
            <h1 className="text-black">Exclusive/VIP Followers</h1>
            <span>
              Fit for our most VIP Instagrammers! VIP followers are our highest
              quality packages, all from North America geo targeted and highly
              active, with real engagement, interactive stories, dynamic
              carousels, no ghost profiles, and have 5-10x more followers than
              following.
            </span>
          </div>
          <CgClose
            className="w-5 h-5 text-gray-500 absolute top-2 right-2 cursor-pointer"
            onClick={() => setIsActiveFollowerModalOpen(false)}
          />
        </div>
      </div>

      <div
        className={`w-full h-screen fixed top-0 bg-[#0000003b] justify-center items-center z-10 mb-24 ${
          isExclusiveModelOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center flex-col gap-4 p-6 rounded-lg bg-white text-sm w-96 font-medium text-gray-500 relative">
          <div className="flex w-full flex-col justify-center items-start gap-1">
            <h1 className="text-black">High Quality Followers</h1>
            <span>
              These are Followers with profile pictures but no further uploads
              on their account. Auto-refill is enabled within the warranty.
            </span>
          </div>
          <div className="flex w-full flex-col justify-center items-start gap-1">
            <h1 className="text-black">Active Followers</h1>
            <span>
              New Active followers are for those who are serious about their
              instagram growth. These are guaranteed with very little to NO
              drop!
            </span>
          </div>
          <div className="flex w-full flex-col justify-center items-start gap-1">
            <h1 className="text-black">Managed Growth</h1>
            <span>
              Managed growth is for brands, influencers and agencies looking for
              followers that engage. This is not an INSTANT service and is aimed
              at helping users build an authentic audience.
            </span>
          </div>
          <div className="flex w-full flex-col justify-center items-start gap-1">
            <h1 className="text-black">Exclusive/VIP Followers</h1>
            <span>
              Fit for our most VIP Instagrammers! VIP followers are our highest
              quality packages, all from North America geo targeted and highly
              active, with real engagement, interactive stories, dynamic
              carousels, no ghost profiles, and have 5-10x more followers than
              following.
            </span>
          </div>
          <CgClose
            className="w-5 h-5 text-gray-500 absolute top-2 right-2 cursor-pointer"
            onClick={() => setIsExclusiveModelOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
