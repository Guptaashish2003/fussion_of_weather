"use client"
import React, { useEffect, useState } from 'react'
import Button from '../tools/Button';
import { FaRegClock } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";

const SideBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='absolute top-0 right-0 bottom-0 my-auto flex justify-center items-center gap-y-4 px-6 flex-col  '>
        <Button value={formatTime(currentTime)}>
            <div className=' flex justify-center items-center'>
                <FaRegClock />
            </div>
        </Button>
       

        <Button value={formatDate(currentTime)}>
            <div className='flex justify-center items-center'>
            <LuCalendarDays />
            </div>
        </Button>
    </div>
  )
}

export default SideBar