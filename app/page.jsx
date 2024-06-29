"use client"
import React, { useRef, useState } from 'react'
import WeatherCardLocation from './components/weatherCardLoaction/WeatherCardLocation'
import SideBar from './components/sidebar/SideBar'
import WeatherCardDetail from './components/mainCard/WeatherCardDetail'
import Image from 'next/image'

const Page = () => {


  return (
    <div>
      <div className='w-screen h-screen fixed top-0 left-0 -z-50'>
        <Image className='w-full h-full object-cover' width={200} height={200} src="/clouds.jpg" alt="cloudsbackground" />
      </div>
      <WeatherCardLocation  />
      <WeatherCardDetail  />
      <SideBar />
      {/* <WeaterCard/> */}
    </div>
  )
}

export default Page
