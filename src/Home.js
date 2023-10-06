import React from "react";
import { Header } from "./Header";
import HeaderBottom from "./HeaderBottom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <HeaderBottom />
    </div>
  );
};

export default Home;
