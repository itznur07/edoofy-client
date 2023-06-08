import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className='container mx-auto'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div
            className='h-screen bg-cover bg-center'
            style={{
              backgroundImage: `url(https://source.unsplash.com/featured/?education)`,
            }}
          >
            <div className='h-full bg-black bg-opacity-50 flex items-center justify-center'>
              <div className='text-white text-center'>
                <h1 className='text-6xl font-bold'>Learn Anything Online</h1>
                <p className='text-2xl mt-4'>
                  Join our community of learners and experts
                </p>
                <button className='bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg mt-8'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='h-screen bg-cover bg-center'
            style={{
              backgroundImage: `url(https://source.unsplash.com/featured/?courses)`,
            }}
          >
            <div className='h-full bg-black bg-opacity-50 flex items-center justify-center'>
              <div className='text-white text-center'>
                <h1 className='text-6xl font-bold'>
                  Explore Thousands of Courses
                </h1>
                <p className='text-2xl mt-4'>
                  Find the best course for your needs and goals
                </p>
                <button className='bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg mt-8'>
                  Browse Courses
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='h-screen bg-cover bg-center'
            style={{
              backgroundImage: `url(https://source.unsplash.com/featured/?teachers)`,
            }}
          >
            <div className='h-full bg-black bg-opacity-50 flex items-center justify-center'>
              <div className='text-white text-center'>
                <h1 className='text-6xl font-bold'>
                  Share Your Knowledge and Skills
                </h1>
                <p className='text-2xl mt-4'>
                  Become a teacher and earn money by creating courses
                </p>
                <button className='bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg mt-8'>
                  Teach Online
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
