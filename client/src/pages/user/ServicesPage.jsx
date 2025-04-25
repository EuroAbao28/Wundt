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
import Badge from "../../components/Badge";

const SERVICES_OFFERED = [
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
    category:
      "Assessment and Therapy for Children with Special Needs and Concerns",
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
    category:
      "Clinical Consultation, Counseling, Psycho-social Interventions, and Referrals",
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
    category:
      "Program Development and Administration for Students, Employees, and Organizations",
    details: [],
    images: [d1, d3, d4],
  },
  {
    icon: <TbPresentation size={24} />,
    category:
      "Trainings, Seminars, Workshops, Recollection, and Team Building Organizing and Facilitating",
    details: [],
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
    <div className="bg-white overflow-hidden">
      <div
        style={{ backgroundImage: `url(${d1})` }}
        className="bg-center bg-cover">
        <div className="py-16 bg-gradient-to-br from-jungle/90 via-jungle/70 to-therapy-blue/50 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-12">
        {SERVICES_OFFERED.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white shadow-md rounded-xl flex flex-col lg:flex-row overflow-hidden lg:odd:flex-row-reverse group ">
            <div className="lg:w-1/2 h-64 md:h-80 lg:h-auto overflow-hidden">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="h-full">
                {service.images.map((image, idx) => (
                  <SwiperSlide key={idx} className="h-full">
                    <div className="h-full w-full overflow-hidden">
                      <img
                        src={image}
                        alt={`${service.category} ${idx + 1}`}
                        className="w-full h-full object-cover object-center lg:group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex-1 py-6 lg:py-8 px-8 lg:px-12 flex flex-col">
              <h2 className="text-xl md:text-2xl font-bold">
                {service.category}
              </h2>

              <ul className="space-y-2 mt-4 flex-1 list-disc marker:text-jungle ml-4">
                {service.details.map((detail, id) => (
                  <li key={id} className="text-gray-600 text-sm md:text-base">
                    {detail}
                  </li>
                ))}
              </ul>

              <Link
                to="/appointment"
                className="w-fit flex items-center text-sm sm:text-base px-6 py-3 bg-gradient-to-r from-jungle to-jungle/80 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:brightness-105 mt-4">
                Get Appointment
                <TbArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
