import React from "react";

const Section2 = () => {
  return (
    <div className="w-[100%] text-2xl md:w-[50%] mt-6 p-4 flex-col flex">
      <h1 className="font-bold">Latest Videos</h1>

      <div className="flex  flex-col md:flex-row w-full p-4 bg-yellow-700 gap-3">
        <div className="md:w-[70%] w-[100%] flex bg-yellow-100 rounded-md">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
            className="w-[50%] p-1 "
          />
          <div className="w-[50%] h-full p-1">
            <div className="w-full gap-1 flex ">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
                className="w-[30%]"
              />
              <div className="flex flex-col text-sm">
                <h1 className="font-bold">RIP PetrolHeads</h1>
                <p>monf ds sd sdsd dsdsds dsdsds</p>
              </div>
            </div>
            <div className="w-full gap-1 flex ">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
                className="w-[30%] mt-1"
              />
              <div className="flex flex-col text-sm">
                <h1 className="font-bold">RIP PetrolHeads</h1>
                <p>monf ds sd sdsd dsdsds dsdsds</p>
              </div>
            </div>
            <div className="w-full gap-1 flex ">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
                className="w-[30%] mt-1"
              />
              <div className="flex flex-col text-sm">
                <h1 className="font-bold">RIP PetrolHeads</h1>
                <p>monf ds sd sdsd dsdsds dsdsds</p>
              </div>
            </div>
            <div className="w-full gap-1 flex ">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
                className="w-[30%] mt-1"
              />
              <div className="flex flex-col text-sm">
                <h1 className="font-bold">RIP PetrolHeads</h1>
                <p>monf ds sd sdsd dsdsds dsdsds</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[30%] w-[100%] flex flex-col p-2 bg-red-900 rounded-md">
          <div className="w-full p-2 bg-red-500 rounded-xl text-white">
            <h1 className="font-bold text-xl">Latest Poll</h1>
          </div>
          <div className="flex flex-col p-3 justify-between h-full">
            <p className="text-xs text-white">What is your favourite genre?</p>
            <div className="text-xs text-white">
              <i class="fa fa-circle p-1" aria-hidden="true"></i>
              Rap
            </div>
            <div className="text-xs text-white">
              <i class="fa fa-circle p-1" aria-hidden="true"></i>
              Rap
            </div>{" "}
            <div className="text-xs text-white">
              <i class="fa fa-circle p-1" aria-hidden="true"></i>
              Rap
            </div>{" "}
            <div className="text-xs text-white">
              <i class="fa fa-circle p-1" aria-hidden="true"></i>
              Rap
            </div>{" "}
            <div className="text-xs text-white">
              <i class="fa fa-circle p-1" aria-hidden="true"></i>
              Rap
            </div>
            <div className="flex w-full gap-3 mt-3">
              <button className="text-white font-bold text-xs bg-red-500 px-3 rounded-md">
                Vote
              </button>
              <button className="text-white font-bold text-xs bg-red-500 px-3 rounded-md">
                Result
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
