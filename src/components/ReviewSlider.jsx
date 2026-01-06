import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import Button from "../components/Button";
import { IoStar } from "react-icons/io5";
import { useTranslation } from "../contexts/useTranslation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { PiNotePencilThin } from "react-icons/pi";
import formatDate from "../utils/formatDate";



const ReveiwSlider = ({ setShowReviewForm, reviews }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const { t } = useTranslation();

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
    <div  className="relative w-full mx-auto pt-10">
      <div className="container">
        <div className="relative">
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            mousewheel={true}
            spaceBetween={10}
            loop={true}
            onSlideChange={(slides) => setActiveIndex(slides.realIndex)}
            modules={[Pagination, Autoplay, Navigation]}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={500}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx} className="px-1 py-2">
                <div className="p-5 border-2 flex justify-between flex-col border-gray-500/30 min-h-52 sm:min-h-64 group  dark:hover:border-primary-light duration-300 select-none">
                  <div>
                    <div className="flex gap-1">
                      {new Array(review.rating).fill(0).map((star, idx) => (
                        <IoStar key={idx} className="text-orange-400" />
                      ))}
                    </div>

                    <p className="text-sm mt-6 duration-300 text-gray-900">
                      {t(review.review)}
                    </p>

                    <p className="text-xs mt-3 italic duration-300 text-gray-600">
                      {formatDate(review.date)}
                    </p>
                  </div>

                  <div className="flex items-start gap-5 mt-5">
                    {/* <img className="size-10  aspect-square rounded-full" src={review.profilePhoto} alt="" /> */}

                    <div>
                      <h3 className="text-sm  flex items-center gap-2">
                        {review.name}{" "}
                        <RiVerifiedBadgeFill className="size-4 text-blue-600" />
                      </h3>
                      <span className="text-xs text-white/50 block">
                        {review.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center justify-between -mt-5">
            <div className="flex justify-center items-center py-8">
              <Button
                onClick={() => setShowReviewForm((prev) => !prev)}
                className="flex text-xs md:mt-0 md:py-2 tracking-normal"
                arrow={false}
              >
                <PiNotePencilThin />
                {t("Write a Review***Ecrire un avis")}
              </Button>
            </div>

            <div className="flex gap-3 justify-end">
              <Button
                onClick={handlePrev}
                arrow={false}
                className="p-2 md:p-2 aspect-square md:mt-0"
              >
                <GoArrowLeft className="duration-150 text-xl" />
              </Button>
              <Button
                onClick={handleNext}
                arrow={false}
                className="p-2 md:p-2 aspect-square md:mt-0"
              >
                <GoArrowRight className="duration-150 text-xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ReveiwSlider
