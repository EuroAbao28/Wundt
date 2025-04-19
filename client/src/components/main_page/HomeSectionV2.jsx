import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
import {
  FaUniversity,
  FaHandsHelping,
  FaNewspaper,
  FaCalendarCheck,
} from "react-icons/fa";

const images = [d1, d2, d3, d4];

function HomeSectionV2() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div data-aos="fade-down" className="w-full h-[35rem] relative -z-10">
        <div className="bg-black/50 flex flex-col justify-center absolute z-10 inset-0">
          <div className="max-w-7xl mx-auto  px-6 lg:px-12">
            <div className="  text-white flex flex-col justify-center items-center text-center">
              <h1 className="font-bold text-2xl sm:text-4xl">
                Premiere Provider of{" "}
                <span className="underline underline-offset-4 decoration-emerald-600">
                  Psychological Counseling
                </span>{" "}
                <br></br> &{" "}
                <span className="underline underline-offset-4 decoration-emerald-600">
                  {" "}
                  Educational Services
                </span>{" "}
              </h1>

              <p className="mt-4 text-xs sm:text-base">
                Professional Regulation Commission - Board of Psychology Permit
                to Operate No. 03
              </p>

              <Link
                to={"/appointment"}
                className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-sm text-white px-8 py-4 font-semibold rounded-md active:scale-95 transition mt-8 uppercase">
                Get Appointment
              </Link>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={2500}
          className="w-full h-full -z-10">
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="px-6 lg:px-12 -mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <Card
            header="About Us"
            body="Founded in 2015, Wundt aims to make psychological services more accessible and affordable."
            Icon={FaUniversity}
          />

          <Card
            header="Our Services"
            body="We offer testing, counseling, therapy, review classes, seminars, and more for all age groups."
            Icon={FaHandsHelping}
          />

          <Card
            header="News & Updates"
            body="New branches opened in 2023 and 2024, with more events and programs coming soon."
            Icon={FaNewspaper}
          />

          <Card
            header="Appointments"
            body="Clients may book online or visit any of our branches across Northern and Central Luzon."
            Icon={FaCalendarCheck}
          />
        </div>
      </div> */}
    </>
  );
}

const Card = ({ header, body, Icon }) => {
  return (
    <div
      data-aos="fade-up"
      className="flex-1 flex flex-col gap-4 bg-radial-[at_-50%_-50%] from-green-500  to-emerald-600 to-75% text-white p-8 rounded relative">
      <h3 className="font-semibold text-lg">{header}</h3>
      <p className="text-sm flex-1">{body}</p>
      <Icon className="absolute -bottom-6 -right-6 text-9xl text-white/20" />
    </div>
  );
};

export default HomeSectionV2;
