"use client"
import React, { useRef, useState } from 'react'
import WeatherCardLocation from './components/weatherCardLoaction/WeatherCardLocation'
import SideBar from './components/sidebar/SideBar'
import WeatherCardDetail from './components/mainCard/WeatherCardDetail'
import axios from 'axios'
import Image from 'next/image'

const Page = () => {
  const [searchValue, setSearchValue] = useState('')
  const [temperature, setTemperature] = useState("temperature")
  const [Fahrenheit, setFahrenheit] = useState(true)

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }

  const search = async () => {
    try {
      const data = await axios.get(`/api/get-city-location/${searchValue}`)
      setTemperature(data.data.message.main.temp)
      console.log(data.data.message.main)
      // setSearchValue(data.data.message.name)
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div className='w-screen h-screen fixed top-0 left-0 -z-50'>
        <Image className='w-full h-full object-cover' src="/clouds.jpg" alt="cloudsbackground" />
      </div>
      <WeatherCardLocation location={"delhi"} temperature={"36 °C"} />
      <WeatherCardDetail setFahrenheit={setFahrenheit} Fahrenheit={Fahrenheit} onEnter={onEnter} setSearchValue={setSearchValue} search={search} />
      <SideBar />
      {/* <WeaterCard/> */}
    </div>
  )
}

export default Page
