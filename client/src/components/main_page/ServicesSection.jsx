import React from "react";
import {
  TbBook,
  TbBrain,
  TbHeartRateMonitor,
  TbUsersGroup,
  TbClipboardList,
  TbPresentation,
} from "react-icons/tb";
import SectionHeader from "../SectionHeader";

function ServicesSection() {
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

  return (
    <div className="mt-20 sm:mt-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={"Comprehensive Services We Offer"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {contents.map((content, index) => (
            <div
              key={index}
              className="p-8 rounded flex flex-col items-center text-center text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500"
            >
              <p className="text-4xl text-emerald-600">{content.icon}</p>
              <h3 className="font-semibold text-slate-800 text-base md:text-lg mt-4">
                {content.title}
              </h3>
              <p className="text-xs md:text-sm italic">{content.subtitle}</p>
              <p className="mt-6 text-xs md:text-sm">{content.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
