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
import GradientLine from "../../components/GradientLine";

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

      {/* founder  */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 ">
        {/* founder section */}
        <div className="rounded-xl sm:shadow-sm sm:p-8 flex flex-col lg:flex-row gap-12 sm:border border-gray-100">
          {/* image */}
          <div className="max-lg:mx-auto max-w-[20rem] lg:w-[35%] flex justify-center items-center">
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
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <Badge
                label={"Our Founder"}
                className="text-therapy-blue bg-therapy-blue/10"
              />

              <h1 className="text-2xl md:text-3xl font-bold">
                Visionary Leadership
              </h1>
            </div>

            <div className="text-gray-600 space-y-4 text-sm md:text-base">
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

            <div className="flex gap-4 flex-wrap">
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
                  className="border border-gray-200 rounded-lg p-4 space-y-2 flex-1 min-w-48">
                  {/* md screen up */}
                  <div className="flex items-center gap-4 max-sm:hidden">
                    <div className="rounded-full p-2 bg-jungle/20 text-jungle">
                      {item.icon}
                    </div>
                    <p className="font-bold text-jungle">{item.year}</p>
                  </div>
                  <p className="text-sm text-gray-600 max-sm:hidden">
                    {item.event}
                  </p>

                  {/* max sm screen */}
                  <div className="max-sm:flex hidden gap-4 items-start">
                    <div className="rounded-full p-2 bg-jungle/20 text-jungle text-lg sm:text-xl mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-jungle text-sm sm:text-base">
                        {item.year}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {item.event}
                      </p>
                    </div>
                  </div>
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
        <div className="py-12 bg-gradient-to-t from-jungle/90 to-therapy-blue/90 backdrop-blur-sm overflow-hidden">
          <div
            data-aos="fade-up"
            className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center">
            <Badge
              label={"Our Commitment"}
              className="bg-white/20 text-white"
            />

            <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-white">
              Our Mission & Vision
            </h2>

            <p className="mt-6 text-white text-sm sm:text-base max-w-3xl">
              Deliver quality, accessible, and affordable psychological,
              counseling and educational services that suit the needs of our
              clientele.
              <br />
              <br />
              To be the leading provider-of-choice of psychological services in
              North and Central Luzon, recognized nationally for our
              compassionate care and professional excellence.
            </p>

            <div className="w-20 h-1 bg-white/50 mx-auto mt-8"></div>
          </div>
        </div>
      </div>

      {/* care */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <header data-aos="fade-up" className="text-center">
          <Badge
            label={"Our Services"}
            className="text-therapy-blue bg-therapy-blue/10"
          />

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
            The
            <span className="text-jungle"> CARE </span> Principles
          </h2>

          <GradientLine type="blue-to-jungle" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 gap-6 ">
          {[
            {
              letter: "C",
              title: "ompanion",
              description:
                "Deliver service with compassion founded on human dignity",
              icon: <TbHeartHandshake />,
            },
            {
              letter: "A",
              title: "ccessibility",
              description:
                "Bring services closer to clients across Northern Luzon",
              icon: <TbUsers />,
            },
            {
              letter: "R",
              title: "esponsibility",
              description:
                "Serve all clients without prejudice to background or status",
              icon: <TbShieldCheck />,
            },
            {
              letter: "E",
              title: "xcellence",
              description:
                "Maintain highest professional and clinical standards",
              icon: <TbCertificate />,
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 flex flex-col rounded-xl shadow-sm relative hover:shadow-md transition-all border border-gray-200 overflow-hidden">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                <span className="text-clip bg-clip-text text-transparent bg-gradient-to-r from-jungle to-therapy-blue font-bold text-2xl sm:text-3xl md:mr-0.5">
                  {item.letter}
                </span>
                {item.title}
              </h3>
              <p className="text-sm sm:text-base flex-1 mb-4 text-gray-600">
                {item.description}
              </p>

              <div className="rounded-full p-3 bg-jungle/10 w-fit text-8xl text-white absolute -right-4 -bottom-4 -z-10">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* accreditation  */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
          <header data-aos="fade-up" className="text-center">
            <Badge
              label={"Our Credentials"}
              className="text-therapy-blue bg-therapy-blue/10"
            />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
              Professional
              <span className="text-therapy-blue"> Accreditations </span>
            </h2>

            <GradientLine type="jungle-to-blue" />
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 gap-6">
            {[
              {
                title: "PRC Certified",
                description:
                  "Recognized by the Professional Regulation Commission (Permit No. 03) and member of the Philippine Psychological Association.",
                icon: <FaShieldAlt />,
              },
              {
                title: "Solo Parent-Friendly",
                description:
                  "Certified by Q Asia Magazine for our family-friendly policies and support programs for single parents.",
                icon: <TbCertificate />,
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 flex flex-col rounded-xl shadow-sm relative hover:shadow-md transition-all flex-1 border border-gray-200 space-y-2">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg text-jungle bg-jungle/10 text-xl sm:text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base flex-1 mb-4 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* our team */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <header data-aos="fade-up" className="text-center">
          <Badge
            label={"Our Team"}
            className="text-therapy-blue bg-therapy-blue/10"
          />

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
            Meet Our
            <span className="text-jungle"> Experts </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            A multidisciplinary team offering comprehensive assessments and
            therapies - from child development to organizational mental health
            programs.
          </p>

          <GradientLine type="blue-to-jungle" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-12">
          {[
            {
              name: "Dr. Maria Santos",
              role: "Clinical Psychologist",
              specialty: "Trauma & Anxiety Disorders",
              image: d2,
            },
            {
              name: "Dr. James Reyes",
              role: "Child Psychologist",
              specialty: "Developmental Disorders",
              image: d3,
            },
            {
              name: "Dr. Andrea Cruz",
              role: "Industrial Psychologist",
              specialty: "Organizational Behavior",
              image: d1,
            },
            {
              name: "Dr. Maria Santos",
              role: "Clinical Psychologist",
              specialty: "Trauma & Anxiety Disorders",
              image: d2,
            },
            {
              name: "Dr. James Reyes",
              role: "Child Psychologist",
              specialty: "Developmental Disorders",
              image: d3,
            },
            {
              name: "Dr. Andrea Cruz",
              role: "Industrial Psychologist",
              specialty: "Organizational Behavior",
              image: d1,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md group rounded-xl overflow-hidden">
              <div className="h-[14rem] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
                />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>
                <p className="text-therapy-blue font-medium text-sm sm:text-base">
                  {item.role}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {item.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPageV2;
