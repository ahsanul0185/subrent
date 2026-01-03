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
import Title from "../components/Title";
import { useTranslation } from "../contexts/useTranslation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";



const reviews = [
  {
    name: "Alex Johnson",
    designation: "Startup Founder***Fondateur de startup",
    profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Subrent gave me complete peace of mind. I no longer worry about unpaid rent or property management—they handle everything professionally and transparently.***Subrent m’a offert une tranquillité d’esprit totale. Je ne me soucie plus des loyers impayés ni de la gestion du bien — tout est pris en charge de manière professionnelle et transparente.",
    date: "November 25, 2024***25 novembre 2024",
    rating: 5
  },
  {
    name: "Sofia Martinez",
    designation: "Product Manager***Chef de produit",
    profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    description: "The guaranteed monthly rent is exactly what I needed. Clear contract, no hidden fees, and a team that truly takes care of the property.***Le loyer mensuel garanti est exactement ce dont j’avais besoin. Contrat clair, aucun frais caché et une équipe qui prend réellement soin du bien.",
    date: "January 20, 2025***20 janvier 2025",
    rating: 5
  },
  {
    name: "Liam Chen",
    designation: "CEO***PDG",
    profilePhoto: "https://randomuser.me/api/portraits/men/22.jpg",
    description: "Subrent transformed my vacant home into a reliable source of income. Everything is managed smoothly, and the communication is excellent.***Subrent a transformé ma maison inoccupée en une source de revenus fiable. Tout est géré efficacement et la communication est excellente.",
    date: "November 22, 2024***22 novembre 2024",
    rating: 5
  },
  {
    name: "Emma Thompson",
    designation: "Marketing Head***Responsable marketing",
    profilePhoto: "https://randomuser.me/api/portraits/women/56.jpg",
    description: "A stress-free rental solution! From maintenance to tenant management, everything is handled with care and professionalism.***Une solution locative sans stress ! De l’entretien à la gestion des locataires, tout est pris en charge avec soin et professionnalisme.",
    date: "December 18, 2024***18 décembre 2024",
    rating: 5
  },
  {
    name: "Rajiv Kapoor",
    designation: "Entrepreneur***Entrepreneur",
    profilePhoto: "https://randomuser.me/api/portraits/men/78.jpg",
    description: "Reliable income, full flexibility, and great security. Subrent delivers exactly what they promise. Highly trustworthy service.***Revenus fiables, flexibilité totale et excellente sécurité. Subrent tient parfaitement ses promesses. Un service digne de confiance.",
    date: "December 29, 2024***29 décembre 2024",
    rating: 5
  }
];




const Reviews = () => {
  return (
    <div id="reviews" className="section-y-padding">
      <Title>Reviews</Title>
       <div className="default-width">
         <Testimonials />
       </div>
    </div>
  )
}

export default Reviews






const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const {t} = useTranslation();

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
    <div id="reviews" className="relative w-full mx-auto pt-10">
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
              <SwiperSlide
                key={idx}
                className="px-1 py-2"
                
              >
                <div className="p-5 border-2 flex justify-between flex-col border-gray-500/30 min-h-52 sm:min-h-64 group  dark:hover:border-primary-light duration-300 select-none">
                  <div>
                    <div className="flex gap-1">
                    {new Array(5).fill(0).map((star, idx) => (
                      // <img
                      //   key={idx}
                      //   className="size-4 sm:size-5"
                      //   src={asset_star_fill}
                      //   alt="star"
                      // />
                     <IoStar className="text-orange-400" />
                    ))}
                  </div>

                  <p className="text-sm mt-6 duration-300 text-gray-900">
                    {t(review.description)}
                  </p>

                  <p className="text-xs mt-3 italic duration-300 text-gray-600">
                    {t(review.date)}
                  </p>
                  </div>

                  <div className="flex items-start gap-5 mt-5">
                    {/* <img className="size-10  aspect-square rounded-full" src={review.profilePhoto} alt="" /> */}
                    
                    <div>
                      <h3 className="text-sm  flex items-center gap-2">
                        {review.name} <RiVerifiedBadgeFill className="size-4 text-blue-600" />
                      </h3>
                      <span className="text-xs text-white/50 block">{review.designation}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
       <div className="flex items-center justify-between -mt-5">


                  <div className="flex justify-center items-center py-8">
          {/* <div className="flex gap-3">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                className={`size-2.5 rounded-full duration-500 ${
                  idx === activeIndex
                    ? "bg-black border w-7 border-white"
                    : "border border-black"
                }`}
                onClick={() => {
                  setActiveIndex(idx);
                  swiperRef.current.swiper.slideToLoop(idx);
                }}
              ></button>
            ))}
          </div> */}
        </div>

                   <div className="flex gap-3 justify-end mt-3">

          <Button onClick={handlePrev} arrow={false}  className="p-2 md:p-2 aspect-square">
            <GoArrowLeft className="duration-150 text-xl" />
          </Button>
          <Button onClick={handleNext} arrow={false} className="p-2 md:p-2 aspect-square">
             <GoArrowRight className="duration-150 text-xl" />
          </Button>
          </div>
       </div>
        </div>


      </div>
    </div>
  );
};

