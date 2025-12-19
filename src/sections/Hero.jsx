import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { AnimatePresence, motion } from "motion/react";
import { GoArrowRight, GoChevronLeft, GoChevronRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    text: "Are you worried about your empty, dilapidated home and having unpaid rent?",
    image:
      "https://images.unsplash.com/photo-1572891086295-6c1c7c476549?fm=jpg&q=60&w=3000",
  },
  {
    text: "We help property owners rent faster with peace of mind.",
    image:
      "https://na.rdcpix.com/9e0979d88a8ac5444966cf4cc11cfa73w-c428287539xd-w928_q80.jpg",
  },
  {
    text: "Professional property management you can trust.",
    image:
      "https://static.wixstatic.com/media/420f35_1b6ceec079ae4ca3a5129aac207110e8~mv2.jpeg",
  },
  {
    text: "Turn your property into a steady income stream.",
    image:
      "https://alifeunfolding.com/wp-content/uploads/2025/03/Wood-Accent-wall-as-headboard-in-Short-term-Rental-1024x676.jpg",
  },
];

const textVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay, 
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: 'easeIn',
    },
  },
};


const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className="h-screen relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        effect="fade"
        onSlideChange={(slides) => setActiveIndex(slides.realIndex)}
        loop
        autoplay
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="h-full w-full object-cover"
              />

              {/* Optional text overlay */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="bg-gray-300 text-2xl p-2 absolute top-1/2 left-2 -translate-y-1/2  cursor-pointer z-40 group hover:text-white" onClick={handlePrev}>
        <span className={`absolute w-full bottom-0 left-0 h-0 group-hover:h-full duration-200 bg-primary -z-10`} />
        <GoChevronLeft  className="z-10"/>
      </button>
      <button className="bg-gray-300 text-2xl p-2 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer z-40 group hover:text-white" onClick={handleNext}>
        <span className={`absolute w-full bottom-0 left-0 h-0 group-hover:h-full duration-200 bg-primary -z-10`} />
        <GoChevronRight className="z-10"/>
      </button>

        <div className="absolute inset-0  bg-linear-to-t from-black/80 from-10% via-30% via-black/50 to-black/50 z-30">
      <AnimatePresence mode="wait">
          <div key={activeIndex} className="flex items-center justify-center flex-col gap-10 h-full">
            <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
            className="max-w-3xl text-center text-3xl md:text-5xl font-semibold text-white"
          >
            {slides[activeIndex].text}
          </motion.h1>
          <motion.button
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={0.07}
            // transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay : 0.07}}
            // transition={{ delay : 0.07}}
          className="flex items-center gap-3 uppercase text-secondary cursor-pointer hover:text-white group">
            Learn more <GoArrowRight className="group-hover:translate-x-1 duration-150 text-xl"/>
          </motion.button>
          </div>
      </AnimatePresence>
        </div>
    </div>
  );
};

export default Hero;
