import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import Button from "../components/Button";
import { IoStar } from "react-icons/io5";
import Title from "../components/Title";



const reviews = [
  {
    name: "Alex Johnson",
    designation: "Startup Founder***Fondateur de startup",
    profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Only Web delivered our website on time and exceeded our expectations. The UI/UX is modern and responsive, and they were great at communicating every step of the project.***Only Web a livré notre site web à temps et a dépassé nos attentes. L’UI/UX est moderne et responsive, et ils ont très bien communiqué à chaque étape du projet.",
    date: "November 25, 2024***25 novembre 2024",
    rating: 5
  },
  {
    name: "Sofia Martinez",
    designation: "Product Manager***Chef de produit",
    profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    description: "Working with this agency was seamless. They understood our requirements quickly and delivered a polished web app that perfectly matches our brand. Highly recommended for any web development needs.***Travailler avec cette agence a été fluide. Ils ont rapidement compris nos besoins et ont livré une application web soignée qui correspond parfaitement à notre marque. Hautement recommandé pour tout besoin en développement web.",
    date: "January 20, 2025***20 janvier 2025",
    rating: 5
  },
  {
    name: "Liam Chen",
    designation: "CEO***PDG",
    profilePhoto: "https://randomuser.me/api/portraits/men/22.jpg",
    description: "The team at Only Web is extremely professional and detail-oriented. They took our ideas and transformed them into a fully functional, beautiful website. We will definitely collaborate again.***L’équipe d’Only Web est extrêmement professionnelle et attentive aux détails. Ils ont transformé nos idées en un site web entièrement fonctionnel et magnifique. Nous collaborerons certainement à nouveau.",
    date: "November 22, 2024***22 novembre 2024",
    rating: 5
  },
  {
    name: "Emma Thompson",
    designation: "Marketing Head***Responsable marketing",
    profilePhoto: "https://randomuser.me/api/portraits/women/56.jpg",
    description: "Great experience! The website is fast, responsive, and easy to navigate. The agency made the whole development process effortless and transparent.***Excellente expérience ! Le site web est rapide, responsive et facile à naviguer. L’agence a rendu tout le processus de développement simple et transparent.",
    date: "December 18, 2024***18 décembre 2024",
    rating: 5
  },
  {
    name: "Rajiv Kapoor",
    designation: "Entrepreneur***Entrepreneur",
    profilePhoto: "https://randomuser.me/api/portraits/men/78.jpg",
    description: "Excellent service! The team delivered a professional, high-quality website that perfectly represents our brand. Their communication and support were top-notch throughout the project.***Service excellent ! L’équipe a livré un site web professionnel et de haute qualité qui représente parfaitement notre marque. Leur communication et leur support ont été impeccables tout au long du projet.",
    date: "December 29, 2024***29 décembre 2024",
    rating: 5
  }
];




const Reviews = () => {
  return (
    <div id="reviews" className="section-y-padding">
      <Title>Reviews</Title>
       <div className="default-padding">
         <Testimonials />
       </div>
    </div>
  )
}

export default Reviews






const Testimonials = () => {
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
                <div className="p-5 border-2 flex justify-between flex-col backdrop-blur-xl bg-black/20 border-gray-500/30 min-h-52 sm:min-h-64 rounded-2xl  group  dark:hover:border-primary-light duration-300 select-none">
                  <div>
                    <div className="flex gap-1">
                    {new Array(5).fill(0).map((star, idx) => (
                      // <img
                      //   key={idx}
                      //   className="size-4 sm:size-5"
                      //   src={asset_star_fill}
                      //   alt="star"
                      // />
                     <IoStar />
                    ))}
                  </div>

                  {/* <p className="text-white text-sm mt-6 duration-300">
                    {review.description.split(" ").filter((_, idx) => idx < 20).join(" ")} <a className="">...Read more</a>
                  </p> */}

                  <p className="text-white/50 text-xs mt-2 italic duration-300">
                    {review.date}
                  </p>
                  </div>

                  <div className="flex items-start gap-5 mt-6">
                    <img className="size-10  aspect-square rounded-full" src={review.profilePhoto} alt="" />
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
          <div className="flex gap-3">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                className={`size-2.5 rounded-full duration-500 ${
                  idx === activeIndex
                    ? "bg-white border w-7 border-white"
                    : "border border-white"
                }`}
                onClick={() => {
                  setActiveIndex(idx);
                  swiperRef.current.swiper.slideToLoop(idx);
                }}
              ></button>
            ))}
          </div>
        </div>

                   <div className="flex gap-3 justify-end">

          <Button onClick={handlePrev}  className="p-2 rounded-full border-white">
             <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button onClick={handleNext}  className="p-2 rounded-full border-white">
             <ChevronRight className="w-6 h-6" />
          </Button>
          </div>
       </div>
        </div>


      </div>
    </div>
  );
};

