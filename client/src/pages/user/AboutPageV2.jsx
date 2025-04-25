import React, { useEffect } from "react";
import {
  TbShieldCheck,
  TbHeartHandshake,
  TbUsers,
  TbCertificate,
} from "react-icons/tb";
import {
  FaShieldAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "../../components/SectionHeader";
import dc from "../../assets/dc.png";
import blurHospital from "../../assets/blur-hospital.jpg";
import d1 from "../../assets/d1.jpg";
import d2 from "../../assets/d2.jpg";
import d3 from "../../assets/d3.jpg";
import Badge from "../../components/Badge";

function AboutPageV2() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <div
        style={{ backgroundImage: `url(${d1})` }}
        className="bg-center bg-cover">
        <div className="py-16 bg-gradient-to-br from-jungle/90 via-jungle/70 to-therapy-blue/50 overflow-hidden">
          <div
            data-aos="fade-down"
            className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center">
            <Badge
              label={"Established 2015"}
              className="bg-white/20 text-white"
            />

            <h1 className="text-4xl md:text-5xl font-bold mt-6 text-white">
              About <span className="text-emerald-300">Us</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/90 sm:mx-12 md:mx-32 lg:mx-60">
              PRC-licensed professionals delivering evidence-based mental health
              care across Northern Luzon.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 ">
        {/* founder section */}
        <div className="rounded-xl shadow-sm p-8 flex gap-12 border border-gray-100">
          {/* image */}
          <div className="w-[35%] flex justify-center items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={dc}
                alt="Dr. Nhorly"
                className="w-full h-full object-center object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle/30 to-transparent"></div>
            </div>
          </div>

          {/* description */}
          <div className="flex-1 space-y-6">
            <Badge
              label={"Our Founder"}
              className="text-therapy-blue bg-therapy-blue/10"
            />

            <h1 className="text-3xl font-bold">Visionary Leadership</h1>

            <div className="text-gray-600 space-y-4">
              <p>
                <span className="font-semibold text-jungle">
                  Dr. Nhorly U. Domenden
                </span>{" "}
                spent years in clinical and academic psychology witnessing
                Northern Luzon's mental health care gaps. Where others saw
                obstacles, he saw an opportunity to make a difference.
              </p>

              <p>
                In 2015, he founded Wundt Psychological Institute with a
                revolutionary approach: combining rigorous evidence-based
                practices with genuine compassion. His vision redefined mental
                healthcare standards in the region.
              </p>

              <p>
                Today, his founding principle endures as the institute grows
                from a single clinic to multiple branches across Luzon: that
                every community deserves mental health care grounded in both
                excellence and compassion.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                {
                  year: "2015",
                  event: "Institute founded in Dagupan City",
                  icon: <FaCalendarAlt />,
                },
                {
                  year: "2018",
                  event: "Expanded to Vigan and Urdaneta",
                  icon: <FaMapMarkerAlt />,
                },
                {
                  year: "2023",
                  event: "Serving 10,000+ clients annually",
                  icon: <FaUsers />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-2 bg-jungle/20 text-jungle">
                      {item.icon}
                    </div>
                    <p className="font-bold text-jungle">{item.year}</p>
                  </div>
                  <p className="text-sm text-gray-600">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      <div
        style={{ backgroundImage: `url(${d1})` }}
        className="bg-center bg-cover">
        <div className="py-8 bg-gradient-to-t from-jungle/90 to-therapy-blue/90 backdrop-blur-sm overflow-hidden">
          <div
            data-aos="fade-up"
            className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center">
            <Badge
              label={"Our Commitment"}
              className="bg-white/20 text-white"
            />

            <h1 className="text-3xl font-bold mt-4 text-white">
              Continuing The Mission
            </h1>

            <p className="mt-6 text-white text-sm sm:text-base">
              Today, we honor our founder's legacy by maintaining his commitment
              to excellence while expanding our services to meet the evolving
              needs of our community. We remain at the forefront of
              psychological care while never losing sight of the human element
              that makes our work meaningful.
            </p>

            <div className="w-20 h-1 bg-white/50 mx-auto mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageV2;
