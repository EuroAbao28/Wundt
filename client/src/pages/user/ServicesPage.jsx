import React, { useEffect } from "react";
import {
  TbBook,
  TbBrain,
  TbHeartRateMonitor,
  TbUsersGroup,
  TbClipboardList,
  TbPresentation,
  TbArrowRight,
} from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "../../components/SectionHeader";
import d1 from "../../assets/d1.jpg";
import d2 from "../../assets/d2.jpg";
import d3 from "../../assets/d3.jpg";
import d4 from "../../assets/d4.jpg";

const servicesOffered = [
  {
    icon: <TbHeartRateMonitor size={24} />,
    category: "Psychological & Psychiatric Testing/Assessments",
    details: [
      "Employment/Industrial purposes",
      "Internship/OJT purposes",
      "Criminal/civil court cases",
      "Diagnostic/Clinical purposes",
      "Academic and research purposes",
    ],
    images: [d1, d2, d3],
  },
  {
    icon: <TbBrain size={24} />,
    category: "Assessment and Therapy for Children with Special Needs",
    details: [
      "Behavioral Concerns (e.g., Conduct Disorder, ADHD, etc.)",
      "Developmental Concerns (ASD, GDD, etc.)",
      "Intellectual Ability Assessment",
      "Emotional Quotient Assessment",
      "Other special concerns of children and adolescents",
    ],
    images: [d2, d3, d4],
  },
  {
    icon: <TbUsersGroup size={24} />,
    category: "Clinical Consultation & Counseling",
    details: [
      "Interpersonal and interpersonal concerns",
      "Marital and parenting concerns",
      "Trauma assessment and management",
      "Other special concerns",
    ],
    images: [d3, d4, d1],
  },
  {
    icon: <TbBook size={24} />,
    category: "Tutorial and Review Classes for PRC Board Examinations",
    details: [
      "Guidance and Counseling",
      "Psychology/Psychometrician",
      "Education",
    ],
    images: [d4, d1, d2],
  },
  {
    icon: <TbClipboardList size={24} />,
    category: "Program Development for Organizations",
    details: [
      "Customized mental health programs",
      "Employee wellness initiatives",
      "Student support systems",
    ],
    images: [d1, d3, d4],
  },
  {
    icon: <TbPresentation size={24} />,
    category: "Workshops & Team Building Activities",
    details: [
      "Mental wellness seminars",
      "Stress management workshops",
      "Leadership development programs",
      "Team cohesion activities",
    ],
    images: [d2, d4, d1],
  },
];

function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        {/* Background with layered gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-jungle/90 via-jungle/70 to-therapy-blue/50 z-10"></div>
          <img
            src={d1}
            alt="Psychological services background"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Centered content container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl px-6 lg:px-8">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-white uppercase rounded-full bg-white/20 backdrop-blur-sm">
              Professional Care
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Our
              <span className="text-emerald-300 ml-2">Services</span>
            </h1>
          </div>

          <p className="text-lg text-white/90 md:pr-12">
            Comprehensive psychological services tailored to your unique
            <br />
            needs and circumstances.
          </p>
        </div>

        {/* Subtle bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900/10 to-transparent z-10"></div>
      </div>

      {/* Services List */}
      <div className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid gap-12">
          {servicesOffered.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              className="flex flex-col lg:flex-row gap-8 bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
              {/* Image Slider */}
              <div className="lg:w-1/2 h-64 md:h-80 lg:h-auto overflow-hidden">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="h-full">
                  {service.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative h-full w-full">
                        <img
                          src={img}
                          alt={`${service.category} ${idx + 1}`}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-6 md:p-8 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-jungle/10 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {service.category}
                  </h2>
                </div>

                <ul className="flex-1 space-y-3 text-gray-600 mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-jungle rounded-full mt-2 mr-2"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-jungle to-therapy-blue text-white font-medium rounded-md hover:shadow-lg transition-all hover:brightness-105">
                    Book This Service
                    <TbArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 bg-gradient-to-r from-jungle to-therapy-blue rounded-xl p-8 md:p-12 text-center"
          data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our team can help assess your needs and recommend the most
            appropriate services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-jungle font-medium rounded-md hover:shadow-lg transition-all hover:brightness-105">
            Contact Our Team
            <TbArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
