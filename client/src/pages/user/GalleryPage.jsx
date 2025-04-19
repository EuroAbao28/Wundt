import React, { useEffect } from "react";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import s7 from "../../assets/s7.jpg";
import s8 from "../../assets/s8.jpg";
import s9 from "../../assets/s9.jpg";
import s10 from "../../assets/s10.jpg";
import SectionHeader from "../../components/SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";

function GalleryPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div data-aos="fade-up" className=" px-6 lg:px-12 mt-10 mb-16">
      <div className="  max-w-7xl mx-auto">
        <SectionHeader title={"Our gallery"} />

        <div className="mt-12 rounded grid grid-cols-2 grid-rows-2 md:grid-cols-5 gap-2">
          <div className="overflow-hidden rounded">
            <img
              src={s10}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              loading="lazy" // Add lazy loading
            />
          </div>
          <div className="md:col-span-2 overflow-hidden rounded">
            <img
              src={s9}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              loading="lazy" // Add lazy loading
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s8}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              loading="lazy" // Add lazy loading
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s7}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              loading="lazy" // Add lazy loading
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s6}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              loading="lazy" // Add lazy loading
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s5}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              loading="lazy" // Add lazy loading
            />
          </div>
          <div className="md:col-span-2 overflow-hidden rounded">
            <img
              src={s4}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              loading="lazy" // Add lazy loading
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s3}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
              loading="lazy" // Add lazy loading
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
