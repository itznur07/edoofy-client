import React from "react";
import Banner from "../../Components/Banner/Banner";
import PopularClass from "../../Components/PopularClasses/PopularClass";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");

  return (
    <>
      <Banner></Banner>
      <PopularClass></PopularClass>
    </>
  );
};

export default Home;
