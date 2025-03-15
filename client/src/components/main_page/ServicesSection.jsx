import React, { useEffect } from "react";
import {
  TbBook,
  TbBrain,
  TbHeartRateMonitor,
  TbUsersGroup,
  TbClipboardList,
  TbPresentation,
} from "react-icons/tb";
import SectionHeader from "../SectionHeader";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const contents = [
  {
    icon: <TbHeartRateMonitor />,
    title: "Psychological & Psychiatric Testing",
    subtitle: "For Employment, Legal, Clinical, and Academic Purposes",
    desc: " Comprehensive assessments tailored for employment screenings, academic needs, clinical diagnostics, and legal cases.",
  },
  {
    icon: <TbBrain />,
    title: "Child & Adolescent Assessments",
    subtitle: "Supporting Young Minds with Care",
    desc: "Specialized therapy for behavioral issues, developmental concerns, intellectual evaluations, and emotional quotient assessments.",
  },
  {
    icon: <TbUsersGroup />,
    title: "Clinical Consultation & Counseling",
    subtitle: "Personalized Care for Mental Well-being",
    desc: "Address interpersonal, marital, and trauma-related concerns through professional counseling and interventions.",
  },
  {
    icon: <TbBook />,
    title: "Tutorial & Review Classes",
    subtitle: "Guiding Future Professionals",
    desc: "Prepare for PRC Board Examinations with expert-led tutorials in psychology, psychometrics, and education.",
  },
  {
    icon: <TbClipboardList />,
    title: "Program Development & Administration",
    subtitle: "For Students, Employees, and Organizations",
    desc: "Tailored programs fostering growth through psychological insights and strategic development plans.",
  },
  {
    icon: <TbPresentation />,
    title: "Trainings & Workshops",
    subtitle: "Building Stronger Teams and Communities",
    desc: "Engage in seminars, workshops, and team-building activities promoting mental wellness and harmony.",
  },
];

function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-left" className="mt-20 sm:mt-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={"Comprehensive Services We Offer"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {contents.map((content, index) => (
            <div
              key={index}
              className="p-8 rounded flex flex-col  text-gray-500 shadow-card2 transition-all hover:shadow-card duration-500"
            >
              <div className="flex md:flex-col gap-4 items-start md:items-center">
                <p className="text-4xl text-emerald-600">{content.icon}</p>
                <div className="md:text-center md:mt-2">
                  <h3 className="font-semibold text-gray-600 text-base md:text-lg">
                    {content.title}
                  </h3>
                  <p className="text-xs md:text-sm italic">
                    {content.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xs md:text-sm md:text-center">
                {content.desc}
              </p>
            </div>
          ))}
        </div>

        <Link
          to={"services"}
          className="bg-white outline outline-emerald-600 text-emerald-600 flex items-center gap-4 text-sm   font-semibold  px-4 py-2 rounded mt-12 mx-auto w-fit"
        >
          See More
        </Link>
      </div>
    </div>
  );
}

export default ServicesSection;
