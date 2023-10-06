import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="md:w-[50%] mt-20 w-full flex gap-2 justify-center md:justify-around pb-2 text-white font-bold pt-1 bg-red-800 flex-wrap ">
        <span>Movie</span>
        <span> Music</span>
        <span> Movie</span>
        <span> Movie</span>
        <span> Movie</span>
        <span> Music</span>
        <span> Movie</span>
        <span> Music</span>
      </div>

      <div className="w-full bg-red-800 h-10 "></div>
      <div className="w-full bg-red-950 flex justify-center items-center gap-5 flex-col md:flex-row py-2 ">
        <h1 className="text-white text-3xl font-bold">ENTERTAINMENT LIVE</h1>
        <p className="text-white text-xs">
          @ copy right 2023 created change kardio
        </p>
      </div>
    </div>
  );
};

export default Footer;
