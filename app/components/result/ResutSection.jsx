import React from "react";
import { IoIosCloudOutline } from "react-icons/io";
import Image from "next/image";
import { WiHumidity } from "react-icons/wi";
import { FaWind,FaCloudSunRain  } from "react-icons/fa";



const ResutSection = ({ title,temprature,humidity }) => {
  return (
    <div className="flex  justify-center">
      <div className=" bg-opacity-60   border-2 rounded-lg backdrop-blur-sm max-w-[500px]  h-full w-[65%] mt-3  bg-[#fff7fc]  text-[#01204e] absolute  ">
        <div className="w-full h-full flex flex-col items-center  justify-start">
          <div className="flex flex-col items-center uppercase ">
            <IoIosCloudOutline className="w-36 h-36 text-[#429ed6] font-thin leading-3" />
            <p className="relative bottom-4 text-4xl  font-bold cursor-pointer hover:underline">
              fusion of weather
            </p>
          </div>
          <p className="relative bottom-4 mt-16 text-6xl  font-bold max-sm:text-3xl capitalize  cursor-pointer ">
            {title}
          </p>

          <div className="flex flex-col w-[400px] justify-center text-center">
            <p className="relative bottom-4 mt-8 text-5xl  font-bold max-sm:text-3xl capitalize  cursor-pointer ">
              {temprature || "23"}
            </p>
            <p className="relative bottom-4 mt-8 text-3xl  max-sm:text-xl capitalize  cursor-pointer ">
              {temprature || "clear"}
            </p>
            <div className=" max-w-[500px] grid max-sm:grid-cols-2 grid-cols-3 items-center text-center ">
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <WiHumidity className="w-7 h-7"/>
                    <p> {humidity || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <FaWind className="w-7 h-7"/>
                    <p> {humidity || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <FaCloudSunRain  className="w-7 h-7"/>
                    <p> {humidity || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <WiHumidity className="w-7 h-7"/>
                    <p> {humidity || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <WiHumidity className="w-7 h-7"/>
                    <p> {humidity || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <WiHumidity className="w-7 h-7"/>
                    <p> {humidity || "23"}</p>
                </div>
            </div>
            <p className="relative bottom-4 mt-16 text-xl  max-sm:text-lg capitalize  cursor-pointer ">Local time : 
              {temprature || "10:05 pm"}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResutSection;
