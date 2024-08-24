import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="loading flex items-center justify-center h-screen w-full">
      <div className="corners">
        <div className="corner corner--1"></div>
        <div className="corner corner--2"></div>
        <div className="corner corner--3"></div>
        <div className="corner corner--4"></div>
    </div>
    </div>
  );
};

export default Loading;
