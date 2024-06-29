
"use client"
import React, { createContext, useState } from "react";
export const UserContext = createContext();
const ContextProvider = ({children}) => {
  const [searchValue, setSearchValue] = useState("");
  const [temperature, setTemperature] = useState({tem:"temperature"})
  const [Fahrenheit, setFahrenheit] = useState(true)
  return (
    <UserContext.Provider value={{ searchValue, setSearchValue,temperature,setTemperature, Fahrenheit,setFahrenheit }}>
    {children}
  </UserContext.Provider>
  )
}

export default ContextProvider