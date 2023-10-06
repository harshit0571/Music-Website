import React from "react";
import { Header } from "./Header";
import HeaderBottom from "./HeaderBottom";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-yellow-100 h-full">
      <Header />
      <HeaderBottom />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
