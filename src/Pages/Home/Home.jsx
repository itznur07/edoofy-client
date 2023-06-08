import React from "react";
import Banner from "../../Components/Banner";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");

  return (
    <>
      <Banner></Banner>
    </>
  );
};

export default Home;
