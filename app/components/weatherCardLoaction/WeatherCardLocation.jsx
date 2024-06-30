"use client"
import { UserContext } from '@/app/context/ContextProvider';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

const WeatherCardLocation = () => {
  const [weather, setWeather] = useState("")
  const [location, setLocation] = useState("")
  const [locationPermission, setLocationPermission] = useState(false)
  const [weatherNews, setWeatherNews] = useState(false)
  const {Fahrenheit } = useContext(UserContext);
  const getLocation = async () => {
    try {
      if(weather==="",location===""){ 

        const geo = navigator.geolocation;
        const position = await new Promise((resolve, reject) => {
            geo.getCurrentPosition(resolve, reject);
          });          
        const {latitude, longitude} = position.coords;
        const res = await axios.get(`/api/get-weather/${longitude}/${latitude}`);
        const {name, main} = res.data.message;
        const feganite = main.temp - 273.15;
        const degri = main.temp - 273.15;
        setLocation(name)
        setLocationPermission(true)
        if(Fahrenheit){
          const fahrenheit = (feganite * 9) / 5 + 32;
          setWeather(`${fahrenheit.toFixed(2)} °F `);
        }else
        setWeather(`${degri.toFixed(2)} °C `);
      }else{
        if(!Fahrenheit){
          const degri = (Number(weather.split(" ")[0]) - 32) * 5 / 9;
          setWeather(`${degri.toFixed(2)} °C `);
        }else{
        const feranite = (Number(weather.split(" ")[0]) * 9 / 5) + 32;
        setWeather(`${feranite.toFixed(2)} °F `);}
      }


        

    } catch (error) {
      console.log(error)
    }
};
 useEffect(() => {
      getLocation()
  } , [Fahrenheit])
  return (
    <div className='fixed top-0 left-0 bottom-0 hc my-auto bg-[#FFF7FC] bg-opacity-60 backdrop-blur-sm text-[#01204E]  px-4 py-2 flex flex-col gap-y-8 justify-center items-center text-xl font-bold max-w-56 text-center ' >
        <h2 className='mx-2 text-2xl uppercase'>weather in your location</h2>
        {locationPermission?<div>
        <p className='my-2'>{location}</p>
        <p>{weather}</p>
        </div>:<p>please allow location for see details</p>}
        <div onClick={()=>setWeatherNews(true)} className='px-4 py-2 text-sm border-[#01204E] border-solid border-2 rounded-full text-[#FFF7FC] bg-[#01204E] uppercase cursor-pointer'>
        {weatherNews?"comming soon":"weather news"}
      </div>

    </div>
  )
}

export default WeatherCardLocation