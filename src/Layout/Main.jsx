import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";
import { AuthContext } from "../Providers/AuthContext";

const Main = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className={`bg-${theme}`}>
      <Navbar></Navbar>
      <Outlet> </Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
