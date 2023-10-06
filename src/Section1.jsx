import React from "react";

const Section1 = () => {
  return (
    <div className="md:w-[100%] w-full h-[300px] gap-6 flex flex-col md:flex-row bg-white p-5 mt-5 rounded-lg">
      <div className="md:w-[60%] w-full relative bg-black h-full">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
          className="w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-full bg-red-800/75 p-4">
          <h1 className="text-2xl font-bold text-white">
            Make your entertainment live!
          </h1>
          <div className="flex justify-between text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              repudiandae maiores obcaecati, perspiciatis dolores
            </p>
            <button className="bg bg-red-800 rounded-lg text-white px-4">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-[40%] w-full h-full  bg-yellow-200">
        <h1 className="text-xl text-red-600 font-bold">Latest Articles</h1>
        <div className="flex flex-col">
          <div className="w-full py-2 bg-yellow-200 rounded-[10px]">
            <i class="fa fa-circle p-1" aria-hidden="true"></i>
            read import information here
          </div>
          <div className="w-full py-2 bg-yellow-200 rounded-[10px]">
            <i class="fa fa-circle p-1" aria-hidden="true"></i>
            read import information here
          </div>
          <div className="w-full py-2 bg-yellow-200 rounded-[10px]">
            <i class="fa fa-circle p-1" aria-hidden="true"></i>
            read import information here
          </div>
          <div className="w-full py-2 bg-yellow-200 rounded-[10px]">
            <i class="fa fa-circle p-1" aria-hidden="true"></i>
            read import information here
          </div>
          <div className="w-full bg-yellow-200 rounded-[10px]">
            <i class="fa fa-circle p-1" aria-hidden="true"></i>
            read import information here
          </div>
          <div className="w-full py-2 bg-yellow-200 rounded-[10px]">
            <i class="fa fa-circle p-1" aria-hidden="true"></i>
            read import information here
          </div>
          <div className="w-full bg-yellow-200 rounded-[10px]">
            <i class="fa fa-circle p-1" aria-hidden="true"></i>
            read import information here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
