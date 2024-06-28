import React from 'react'
import WeatherCardLocation from './components/weatherCardLoaction/WeatherCardLocation'
import SideBar from './components/sidebar/SideBar'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='w-screen h-screen fixed top-0 left-0 -z-50'>
        <Image className='w-full h-full object-cover' src="/clouds.jpg" alt="cloudsbackground" />
      </div>
      <SideBar/>
      <WeatherCardLocation location={"delhi"} temprapure={"35 deg"}/>
      
      
    </div>
  )
}

export default page