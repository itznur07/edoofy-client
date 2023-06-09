import React from "react";
import Banner from "../../Components/Banner/Banner";
import ContactUs from "../../Components/Contact/Contact";
import PopularClass from "../../Components/PopularClasses/PopularClass";
import PopularInstructors from "../../Components/PopularInstructors/PopularInstructors";
import Testimonials from "../../Components/Testimonials/Testimonials";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
