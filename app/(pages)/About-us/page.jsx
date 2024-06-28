import React from "react";
import { IoIosCloudOutline } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const page = () => {
  const features = [
    "Comprehensive Weather Details: Get real-time weather updates, including temperature, humidity, wind speed, and more. Our detailed forecasts ensure you're always prepared, whether it's for your daily commute or an outdoor adventure.",
    "Weather News: Stay updated with the latest weather news from around the world. Our team of meteorologists and journalists bring you breaking weather stories, climate updates, and expert analyses to keep you informed about global weather patterns.",
    "Interactive Radar and Maps: Visualize weather conditions with our interactive radar and maps. Track storms, monitor precipitation, and get a clear view of weather changes in your area and beyond.",
    "Personalized Alerts: Never be caught off guard by severe weather. Customize alerts for your location and receive notifications for extreme conditions, such as thunderstorms, hurricanes, and heavy snowfall.",
    "Daily and Weekly Forecasts: Plan your week with confidence using our detailed daily and weekly forecasts. Our accurate predictions help you schedule your activities and make the most out of your time.",
    "Weather Insights and Tips: Discover valuable insights and tips on how to stay safe and comfortable in various weather conditions. From dressing recommendations to travel advice, we provide practical information to help you adapt to the weather.",
  ];

  return (
    <div className="flex  justify-center">
      <div className=" bg-opacity-60   border-2 rounded-lg backdrop-blur-sm max-w-[500px] max-sm:h-[530vh]  h-[240vh] w-[65%] mt-3  bg-[#fff7fc]  text-[#01204e] absolute  ">
        <div className="w-full h-full flex flex-col items-center  justify-start">
          <div className="flex flex-col items-center uppercase ">
            <IoIosCloudOutline className="w-36 h-36 text-[#429ed6] max-sm:w-20 max-sm:h-20  font-thin leading-3" />
            <p className="relative bottom-4 text-4xl max-sm:text-2xl font-bold hover:underline">
              About Us{" "}
            </p>
          </div>
          <p className="p-2 bg-slate-50 text-center">
            Welcome to Fussion Of Weather , your ultimate weather companion! Our
            app is designed to keep you informed and prepared, no matter what
            the weather has in store. With a host of features tailored to meet
            all your weather needs, we ensure that you stay ahead of the
            elements and make the most out of every day.
          </p>
          <p className="font-bold text-xl text-start">Our Features</p>
          {features.map((item,key) => {
            return (
              <ul key={key} className="p-2 list-disc flex flex-col items-start text-start list-inside">
                <li>{item}</li>
              </ul>
            );
          })}
          <p className="font-bold text-xl text-start">Our Mission</p>
          <p className="p-2 bg-slate-50 text-center">
            At Fussion weather App, our mission is to provide reliable and
            up-to-date weather information to help you navigate your day with
            ease. We are committed to leveraging the latest technology and
            meteorological data to deliver accurate forecasts and comprehensive
            weather coverage. Your safety and convenience are our top
            priorities, and we strive to enhance your weather awareness through
            our user-friendly and feature-rich app.
          </p>
          <p className="font-bold text-xl text-start">Contact Us</p>
          <div className="flex w-4/12 flex-row max-sm:w-11/12 justify-between">
            <a
              href="https://github.com/ak-official881"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </a>
            <a
              href="https://www.instagram.com/singh.abhishek881"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-3028192a3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </a>
            <a href="mailto:ak.official881@gmail.com">
              <SiGmail className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
