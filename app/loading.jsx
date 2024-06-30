import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="loading flex items-center justify-center h-screen w-full">
      <div class="corners">
        <div class="corner corner--1"></div>
        <div class="corner corner--2"></div>
        <div class="corner corner--3"></div>
        <div class="corner corner--4"></div>
    </div>
    </div>
  );
};

export default Loading;
