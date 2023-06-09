import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Banner from "../../Components/Banner/Banner";
import ContactUs from "../../Components/Contact/Contact";
import PopularClass from "../../Components/PopularClasses/PopularClass";
import PopularInstructors from "../../Components/PopularInstructors/PopularInstructors";
import Testimonials from "../../Components/Testimonials/Testimonials";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");

  const bannerRef = useRef(null);
  const popularClassRef = useRef(null);
  const popularInstructorsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactUsRef = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const elements = [
        bannerRef,
        popularClassRef,
        popularInstructorsRef,
        testimonialsRef,
        contactUsRef,
      ];

      elements.forEach((elementRef) => {
        const element = elementRef.current;

        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const isVisible = top < window.innerHeight && bottom >= 0;

          if (isVisible) {
            controls.start("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      <motion.div
        ref={bannerRef}
        initial='hidden'
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
      >
        <Banner></Banner>
      </motion.div>
      <motion.div
        ref={popularClassRef}
        initial='hidden'
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
      >
        <PopularClass></PopularClass>
      </motion.div>
      <motion.div
        ref={popularInstructorsRef}
        initial='hidden'
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
      >
        <PopularInstructors></PopularInstructors>
      </motion.div>
      <motion.div
        ref={testimonialsRef}
        initial='hidden'
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
      >
        <Testimonials></Testimonials>
      </motion.div>
      <motion.div
        ref={contactUsRef}
        initial='hidden'
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
      >
        <ContactUs></ContactUs>
      </motion.div>
    </>
  );
};

export default Home;
