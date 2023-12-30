import React, { useState } from "react";

const TitleComponent = ({ title, overview }) => {
  return (
    <div className="relative pt-[50%] md:pt-[15%] px-14 bg-gradient-to-b from-black w-screen aspect-video z-10">
      <h1 className="-mx-5 md:mx-3 text-2xl md:text-5xl font-bold w-4/4 md:w-1/2 m-4 text-white opacity-50  md:opacity-70">
        {title}
      </h1>

      <p className="hidden md:block text-lg m-4 w-1/4 font-lg font-semibold text-white opacity-70">
        {overview}
      </p>
      {/* <button className="hidden md:inline-block bg-white text-black font-bold px-6 py-2 m-4 rounded-md hover:opacity-70">
        ▶️ Play
      </button>
      <button className="hidden md:inline-block bg-white text-black font-bold px-6 py-2 m-4 rounded-md hover:opacity-70">
        ℹ️ More info
      </button> */}
    </div>
  );
};

export default TitleComponent;
