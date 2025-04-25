import React, { useEffect } from "react";
import b1 from "../../assets/b1.jpg";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s5 from "../../assets/s5.jpg";
import SectionHeader from "../../components/SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import Badge from "../../components/Badge";

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <div
        style={{ backgroundImage: `url(${b1})` }}
        className="relative bg-center bg-cover h-[20rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-jungle/90 via-jungle/70 to-therapy-blue/50 overflow-hidden">
          <div
            data-aos="fade-down"
            className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center">
            <Badge
              label={"Professional Care"}
              className="bg-white/20 text-white"
            />

            <h1 className="text-4xl md:text-5xl font-bold mt-6 text-white">
              Our <span className="text-emerald-300">Services</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/90 sm:mx-12 md:mx-32 lg:mx-60">
              Comprehensive psychological services tailored to your unique needs
              and circumstances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
