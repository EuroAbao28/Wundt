import React, { useEffect } from "react";
import b1 from "../../assets/b1.jpg";
import SectionHeader from "../../components/SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutPageV2() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="pb-16 min-h-screen">
      <div
        data-aos="fade-down"
        style={{ backgroundImage: `url(${b1})` }}
        className="bg-cover bg-center">
        <div className="bg-black/50 p-16">
          <SectionHeader title={"About Us"} colorMode={"dual"} />
        </div>
      </div>
    </div>
  );
}

export default AboutPageV2;
