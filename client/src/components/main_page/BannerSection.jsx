import React, { useEffect } from "react";
import b1 from "../../assets/b1.jpg";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Badge from "../Badge";
import { TbArrowRight } from "react-icons/tb";

function BannerSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div data-aos="fade-up" className="relative bg-jungle py-20">
      {/* background image with gradient */}
      <div
        style={{ backgroundImage: `url(${b1})` }}
        className="absolute inset-0 bg-cover bg-center -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-jungle/90 to-therapy-blue/50"></div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center px-6 lg:px-8 text-center">
        <Badge
          label={"Begin Your Journey"}
          className="text-white bg-white/20"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-white">
          Your Path to Growth and Well-Being
        </h1>

        <p className="text-base sm:text-lg text-white mt-4">
          Professional psychological services tailored to your unique needs
        </p>

        <Link
          to="/appointment"
          className="inline-flex text-sm sm:text-base items-center px-8 py-3 border-2 border-white backdrop-blur-sm text-white mt-8 font-medium rounded-lg hover:backdrop-blur-lg transition-all ">
          Book an Appointment
          <TbArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default BannerSection;
