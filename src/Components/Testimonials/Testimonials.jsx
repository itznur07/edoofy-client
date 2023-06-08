import React, { useState } from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1577036421869-7c8d388d2123?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHN8fHx8fHwxNjg2MjQ1MTgx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Alice",
      feedback: "I loved the yoga class. It was so relaxing and fun.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529007196863-d07650a3f0ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHN8fHx8fHwxNjg2MjQ1MjUw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Bob",
      feedback:
        "The guitar lessons were amazing. I learned so much in a short time.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHN8fHx8fHwxNjg2MjQ1MjY2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Charlie",
      feedback:
        "The cooking class was delicious. Chef John is a great teacher.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHN8fHx8fHwxNjg2MjQ1NDIx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      name: "Chamia",
      feedback: "John is a great teacher for python courses",
    },
  ]);

  const settings = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <div className='max-w-7xl mx-auto md:px-0 md:py-0 px-4 py-5 my-10'>
      <SectionTitle title='What our client say'></SectionTitle>
      <Swiper {...settings} modules={[Pagination, Navigation]}>
        <div className='grid md:grid-cols-3 gap-4'>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial?.name}>
              <TestimonialCard key={testimonial.name} {...testimonial} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
