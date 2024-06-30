"use client";
import React, { useContext, useEffect,useState } from "react";
import Image from "next/image";
import ResutSection from "@/app/components/result/ResutSection";
import SideBar from "@/app/components/sidebar/SideBar";
import { UserContext } from "@/app/context/ContextProvider";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Loading from "@/app/loading";

const page = () => {
  const { temperature, setTemperature, Fahrenheit } = useContext(UserContext);
  const searchValue = useParams().location;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchWeather = async () => {
      if(temperature.temp==="temperature"){
      try {
        setLoading(true);
        const data = await axios.get(`/api/get-city-location/${searchValue}`);
        console.log(data.data, "data");
        const kalvin = data.data.message.main.temp;
        const celsius = kalvin - 273.15;
        const fahrenheit = (celsius * 9) / 5 + 32;
        setLoading(false);
        setTemperature({
          celsius: `${celsius.toFixed(2)} °C`,
          fahrenheit: `${fahrenheit.toFixed(2)} °F`,
          ...data.data.message,
        });
      } catch (error) {
        // return router.push("/not-found");
        console.log(error);
      }
      }
    };
    fetchWeather();
  }, [temperature]);
  
  if(temperature.temp ==="temperature"){
    return <Loading/>
  }
  return (
    <div>
      <div className="w-screen h-screen fixed top-0 left-0 -z-50">
        <Image
          className="w-full h-full object-cover"
          src="/clouds.jpg"
          width={200}
          height={200}
          alt="cloudsbackground"
        />
      </div>
      {/* <WeatherCardLocation location={"delhi"} temperature={"36 °C"} /> */}
      <ResutSection
        location={temperature?.name}
        isFahrenheit={Fahrenheit}
        fahrenheit={temperature?.fahrenheit}
        humidity={temperature?.main.humidity}
        celsius={temperature?.celsius}
        windSpeed={temperature?.wind.speed}
        feelsLike={temperature?.main.feels_like}
        weather={temperature?.weather[0].description}
        mainWeather={temperature?.weather[0].main}
        clouds={temperature.clouds.all}
        sunRise={temperature.sys.sunrise}
        visibility={temperature.visibility}


      />
      <SideBar />
      {/* <WeaterCard/> */}
    </div>
  );
};

export default page;

// 1719663319, … }
// ​
// base: "stations"
// ​
// celsius: "30.06 °C"
// ​
// clouds: Object { all: 20 }
// ​​
// all: 20
// ​​
// <prototype>: Object { … }
// ​
// cod: 200
// ​
// coord: Object { lon: 21.9167, lat: 47.15 }
// ​​
// lat: 47.15
// ​​
// lon: 21.9167
// ​​
// <prototype>: Object { … }
// ​
// dt: 1719663319
// ​
// fahrenheit: "86.11 °F"
// ​
// id: 684882
// ​
// main: Object { temp: 303.21, feels_like: 304.62, temp_min: 303.02, … }
// ​​
// feels_like: 304.62
// ​​
// grnd_level: 1003
// ​​
// humidity: 52
// ​​
// pressure: 1017
// ​​
// sea_level: 1017
// ​​
// temp: 303.21
// ​​
// temp_max: 303.21
// ​​
// temp_min: 303.02
// ​​
// <prototype>: Object { … }
// ​
// name: "Biharia"
// ​
// sys: Object { type: 2, id: 50396, country: "RO", … }
// ​
// timezone: 10800
// ​
// visibility: 10000
// ​
// weather: Array [ {…} ]
// ​​
// 0: Object { id: 801, main: "Clouds", description: "few clouds", … }
// ​​
// length: 1
// ​​
// <prototype>: Array []
// ​
// wind: Object { speed: 1.54, deg: 340 }
// ​​
// deg: 340
// ​​
// speed: 1.54
