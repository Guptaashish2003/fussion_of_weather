import React from "react";
import { IoIosCloudOutline } from "react-icons/io";
import SearchBar from "../tools/SearchBar";
import ConversionTemp from "../tools/ConversionTemp";
import RecentSearch from "../RecentSearch/RecentSearch";

const WeatherCardDetail = () => {
  return (
    <div className="flex  justify-center">
      <div className=" bg-opacity-60   border-2 rounded-lg backdrop-blur-sm max-w-[500px]  h-auto w-[65%] mt-3  bg-[#fff7fc]  text-[#01204e] absolute max-md:w-[90%] ">
        <div className="w-full h-full flex flex-col items-center  justify-start">
          <div className="flex flex-col items-center uppercase ">
            <IoIosCloudOutline className="w-36 h-36 text-[#429ed6] font-thin leading-3" />
            <p className="relative bottom-4 text-4xl  font-bold underline">fusion of weather </p>
          </div>
            <SearchBar  />
            <ConversionTemp   />
            <RecentSearch />
        </div>
      </div>
    </div>
  );
};

export default WeatherCardDetail;
