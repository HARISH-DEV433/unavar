import React from "react";
import Image from "next/image";
import Stat from "./subcomponents/Stat";

type Props = {};

const Maps = (props: Props) => {
  return (
    <div className="relative">
      <div className=" absolute  md:gap-[2rem]  bg-white p-[40px] top-[16rem] rounded-lg md:left-[10%] md:right-[10%] z-20 shadow-lg  mx-4  md:mx-0">
        <h1 className="text-2xl font-bold text-center mb-6">
          Certificate Issued
        </h1>
        <div className="flex gap-4 lg:flex-wrap md:flex-wrap flex-wrap justify-center">
          <Stat img="/images/icon_1.png" num={33} desc="xxx" />
          <Stat img="/images/icon_1.png" num={33} desc="xxx" />
          <Stat img="/images/icon_1.png" num={33} desc="xxx" />
          <Stat img="/images/icon_1.png" num={33} desc="xxx" />
          <Stat img="/images/icon_1.png" num={33} desc="xxx" />
          <Stat img="/images/icon_1.png" num={33} desc="xxx" />
        </div>
      </div>
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/Maps.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white sm:text-xl md:text-2xl lg:text-3xl">
            All Across India
          </a>
          <div className="flex text-white flex-col gap-5 p-[30px]">
            <ul className="flex flex-wrap md:gap-x-[32px] md:gap-y-[20px] gap-x-5 gap-y-5 justify-center text-xs sm:text-sm md:text-xs md:flex  lg:text-sm xl:text-xl list-disc">
              <li className="text-white font-regular ">NEWDELHI</li>
              <li className="text-white font-regular">MUMBAI</li>
              <li className="text-white font-regular">BANGLORE</li>
              <li className="text-white font-regular">CHENNAI</li>
              <li className="text-white font-regular">HYDERABAD</li>
            </ul>
            <ul className="flex gap-8 justify-center text-xs sm:text-sm md:text-xs md:flex md:gap-10 lg:text-sm xl:text-xl list-disc">
              <li className="text-white font-regular">AHMEDABAD</li>
              <li className="text-white font-regular">COCHIN</li>
              <li className="text-white font-regular">KOLKATA</li>
              <li className="text-white font-regular">INDORE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
