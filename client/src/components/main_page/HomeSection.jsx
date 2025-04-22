import React, { useEffect } from "react";
import b1 from "../../assets/b1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

function HomeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      data-aos="fade">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${b1})` }}>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className="max-w-2xl backdrop-blur-sm bg-white/90 p-8 rounded-xl shadow-xl"
            data-aos="fade-right"
            data-aos-delay="300">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
              Premiere Provider of <br />
              <span className="text-emerald-600">
                Psychological Counseling
              </span>{" "}
              & <br />
              <span className="text-emerald-600">Educational Services</span>
            </h1>

            <p className="text-gray-700 mb-8 text-sm sm:text-base">
              Professional Regulation Commission - Board of Psychology Permit to
              Operate No. 03
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointment"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-center">
                Get Appointment
              </Link>
              <Link
                to="/services"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 font-semibold rounded-lg hover:bg-emerald-50 transition-colors duration-300 text-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="800">
        <div className="animate-bounce w-6 h-6 border-4 border-white rounded-full"></div>
      </div>
    </section>
  );
}

export default HomeSection;
