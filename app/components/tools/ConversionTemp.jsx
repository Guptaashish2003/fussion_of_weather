"use client";
import { UserContext } from "@/app/context/ContextProvider";
import React,{useContext} from "react";

const ConversionTemp = () => {
  const { Fahrenheit,setFahrenheit } = useContext(UserContext);
    const conversionTemp = () => {
        setFahrenheit(!Fahrenheit)
    }
  return (
    <div className="w-36 h-full mx-auto my-6">
      <button onClick={conversionTemp} className="w-full h-10 bg-[#fff7fc] shadow-lg text-[#01204e] hover:bg-[#01204e] hover:text-[#fff7fc]  rounded-2xl">
      Displaying in {Fahrenheit ? "°F " : "°C"}
        
      </button>
    </div>
  );
};

export default ConversionTemp;
