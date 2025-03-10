import React from "react";
import SectionHeader from "../components/SectionHeader";
import {
  TbBook,
  TbBrain,
  TbHeartRateMonitor,
  TbUsersGroup,
  TbClipboardList,
  TbPresentation,
} from "react-icons/tb";

function ServicesPage() {
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
    <div className="h-screen flex items-center justify-center">
      ServicesPage
    </div>
  );
}

export default ServicesPage;
