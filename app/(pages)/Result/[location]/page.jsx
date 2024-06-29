import React from 'react'
import Image from 'next/image';
import ResutSection from '@/app/components/result/ResutSection';
import WeatherCardLocation from '@/app/components/weatherCardLoaction/WeatherCardLocation';

import SideBar from '@/app/components/sidebar/SideBar';


const page = () => {
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
          <ResutSection title={"bihar"} />
          <SideBar />
          {/* <WeaterCard/> */}
        </div>
      );
}

export default page