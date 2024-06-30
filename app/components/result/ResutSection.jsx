import React from "react";
import { IoIosCloudOutline } from "react-icons/io";
import { WiHumidity } from "react-icons/wi";
import { FaWind,FaCloudSunRain  } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GiInvisible } from "react-icons/gi";
import { WiSunrise } from "react-icons/wi";



const ResutSection = ({ location,visibility,humidity,isFahrenheit,fahrenheit,celsius,windSpeed,feelsLike,weather,mainWeather,clouds,sunRise }) => {
  const convertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex  justify-center">
      <div className=" bg-opacity-60   border-2 rounded-lg backdrop-blur-sm max-w-[500px]  h-full w-[65%] mt-3  bg-[#fff7fc]  text-[#01204e] absolute max-md:w-[90%] ">
        <div className="w-full h-full flex flex-col items-center  justify-start">
          <div className="flex flex-col items-center uppercase ">
            <IoIosCloudOutline className="w-36 h-36 text-[#429ed6] font-thin leading-3" />
            <p className="relative bottom-4 text-4xl  font-bold cursor-pointer hover:underline">
              fusion of weather
            </p>
          </div>
          <p className="relative bottom-4 mt-16 text-6xl  font-bold max-sm:text-3xl capitalize  cursor-pointer ">
            {location}
          </p>

          <div className="flex flex-col w-[400px] justify-center text-center">
            <p className="relative bottom-4 mt-8 text-5xl  font-bold max-sm:text-3xl capitalize  cursor-pointer ">
              {isFahrenheit?`${fahrenheit}`:`${celsius}` || "23"}
            </p>
            <p className="relative bottom-4 mt-8 text-3xl  max-sm:text-xl capitalize  cursor-pointer ">
              {mainWeather || "clear"}
            </p>
            <div className=" max-w-[500px] grid max-sm:grid-cols-2 grid-cols-3 items-center text-center ">
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <WiHumidity className="w-7 h-7"/>
                    <p> {`${humidity}%` || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <FaWind className="w-7 h-7"/>
                    <p> {windSpeed || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <FaCloudSunRain  className="w-7 h-7"/>
                    <p> {`${clouds}%` || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <GiInvisible className="w-7 h-7"/>
                    <p> {`vis: ${visibility}M` || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl relative">
                    {/* <Image src ></Image> */}
                    <FaUsersViewfinder className="w-7 h-7"/>
                    <FcLike className="absolute top-0 right-12 text-sm" />
                    <p> {feelsLike || "23"}</p>
                </div>
                <div className="flex flex-col items-center p-1 text-xl">
                    {/* <Image src ></Image> */}
                    <WiSunrise className="w-7 h-7"/>
                    <p> {`${convertTimestampToTime(sunRise)}` || "23"}</p>
                </div>
            </div>
                       
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResutSection;
