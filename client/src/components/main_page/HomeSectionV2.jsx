import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import d1 from "../../assets/d1.jpg";
import d2 from "../../assets/d2.jpg";
import d3 from "../../assets/d3.jpg";
import d4 from "../../assets/d4.jpg";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TbArrowRight } from "react-icons/tb";
import { FaShieldAlt, FaUsers, FaCalendarAlt } from "react-icons/fa";
import Badge from "../Badge";

function HomeSectionV2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const slides = [
    { image: d1, alt: "Professional counseling session" },
    { image: d2, alt: "Educational assessment" },
    { image: d3, alt: "Therapy session" },
    { image: d4, alt: "Mental health support" },
  ];

  return (
    <section className="h-svh w-full relative">
      {/* sliding image & gradient */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          speed={1500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-full w-full">
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover object-top"
                />

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 max-sm:via-60% to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div data-aos="fade-right" className="absolute inset-0 z-10">
        <div className="max-w-7xl px-6 lg:px-8 mx-auto h-full flex items-center ">
          <div className="text-white w-full sm:max-w-2xl">
            {/* badge */}
            <div className="mb-6 flex max-sm:justify-center">
              <Badge
                label={"Licensed Professionals"}
                className="text-emerald-300 bg-white/20"
              />
            </div>

            {/* header */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight max-sm:text-center">
              <span className="text-emerald-300">Evidence-Based </span>
              <br />
              Psychological Care
            </h1>

            {/* desc */}
            <p className="text-sm sm:text-base max-sm:text-center md:text-lg text-white/90 mb-8 max-w-lg">
              PRC-certified psychologists providing compassionate, personalized
              therapy using scientifically validated approaches.
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 font-medium">
              <Link
                to="/appointment"
                className="flex items-center justify-center text-sm sm:text-base gap-3 rounded-lg bg-gradient-to-r from-jungle to-therapy-blue px-8 py-3 hover:shadow-lg hover:brightness-105 transition-all max-sm:flex-1">
                Get Appointment <TbArrowRight />
              </Link>

              <Link className="px-8 py-3 outline-2 outline-white rounded-lg text-center text-sm sm:text-base hover:bg-white/10 hover:shadow-lg transition-all max-sm:flex-1">
                Our Services
              </Link>
            </div>

            {/* emblem */}
            <div className="mt-12 flex flex-wrap gap-4 sm:w-[85%]">
              <Emblem icon={<FaShieldAlt />} text={"PRC Certified"} />
              <Emblem icon={<FaUsers />} text={"15+ Experts"} />
              <Emblem icon={<FaCalendarAlt />} text={"10+ Years"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Emblem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 flex-1 rounded-lg">
      <div className="bg-jungle/10 p-2 rounded-lg text-emerald-300 text-lg sm:text-xl">
        {icon}
      </div>
      <span className="text-xs sm:text-sm font-medium">{text}</span>
    </div>
  );
};

export default HomeSectionV2;
