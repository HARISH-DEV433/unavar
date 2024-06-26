import React from "react";
import Image from "next/image";
import Addbanner from "./Addbanner";
import Banner from "./subcomponents/banner";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left h-[30vh]">
        <div className="flex flex-wrap justify-around gap-10  bg-white p-[40px] mb-10 pb-10">
          <div className="flex flex-col gap-5 w-[400px]">
            <div className="left flex items-center gap-5">
              <Image alt="logo" src="/images/logo.png" width={50} height={50} />
              <p className="font-bold text-black text-left">
                UNAVAR FOOD INSPECTION & <br /> CERTIFICATION PRIVATE LIMITED
              </p>
            </div>
            <div className="flex flex-col gap-9">
              <p className="text-balance text-black">
                UNAVAR.Your Trusted Partner in Food Safety Solutions, with a
                commitment to excellence,UNAVAR offers comprehensive services
                spanning inspection, certification and consultation.
              </p>
              {/* <button className=" bg-transparent border border-lime-500 text-lime-500 font-light py-2 px-6 rounded-lg hover:bg-lime-500 hover:text-white">
                Know more
              </button> */}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-black font-bold text-lg">Main Navigations</div>
            <div className="flex flex-col gap-2 ">
              <a className="text-black font-regular hover:cursor-pointer">
                Home
              </a>
              <a className="text-black font-regular hover:cursor-pointer">
                About us
              </a>
              <a className="text-black font-regular hover:cursor-pointer">
                Services
              </a>
              <a className="text-black font-regular hover:cursor-pointer">
                Industry
              </a>
              <a className="text-black font-regular hover:cursor-pointer">
                Clients
              </a>
              <a className="text-black font-regular hover:cursor-pointer">
                Blogs
              </a>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-4">
              <div className="text-black font-bold text-lg">Useful links</div>
              {/* <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5X2Kk8BWmqo?si=Hp199dfToy6D4jH0"
                title="YouTube video player"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div> */}
              <div className="flex flex-col gap-2 ">
                <a
                  href="https://hygiene.fssai.gov.in/index.php"
                  className="text-black font-regular hover:cursor-pointer"
                >
                  Hygiene Rating
                </a>
                <a
                  href="https://eatrightindia.gov.in/eatrightstation/"
                  className="text-black font-regular hover:cursor-pointer"
                >
                  Eat Right Station
                </a>
                <a
                  href="https://eatrightindia.gov.in/EatRightCampus/home"
                  className="text-black font-regular hover:cursor-pointer"
                >
                  Eat Right Campus
                </a>
                <a
                  href="https://eatrightindia.gov.in/eatrightplaceofworship/index.php"
                  className="text-black font-regular hover:cursor-pointer"
                >
                  Blog
                </a>
                <a
                  href="https://eatrightindia.gov.in/fruitsandvegetablesmarket/index.php"
                  className="text-black font-regular hover:cursor-pointer"
                >
                  Clean Veg Market
                </a>
                <a
                  href="https://eatrightindia.gov.in/streetfoodhub/home"
                  className="text-black font-regular hover:cursor-pointer"
                >
                  Clean Street Food Hub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
