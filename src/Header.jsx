import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-2 bg-red-800 p-4">
      <div className="flex lg:w-[50%] w-[100%] flex-col md:flex-row justify-center   md:items-baseline align-baseline md:justify-between items-center gap-2 md:gap-0">
        <h1 className="font-bold text-3xl text-white">Entertainment Live</h1>

        <div className="flex flex-col p-3 gap-5 bg-red-950">
          <input
            type="text"
            className="rounded-lg py-1 pl-2"
            placeholder="Search Keyword"
          />
          <div className="flex text-white gap-3">
            <span>Entertainment</span>
            <span>Entertainment</span>
            <span>Entertainment</span>
          </div>
        </div>
      </div>
    </div>
  );
};
