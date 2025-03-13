import React from "react";
import {
  TbBook,
  TbBrain,
  TbHeartRateMonitor,
  TbUsersGroup,
  TbClipboardList,
  TbPresentation,
} from "react-icons/tb";
import classNames from "classnames";
import SectionHeader from "../components/SectionHeader";

const servicesOffered = [
  {
    icon: <TbHeartRateMonitor />,
    category: "Psychological/Psychiatric Testing/Assessment",
    details: [
      "Employment/Industrial purposes",
      "Internship/OJT purposes",
      "Criminal/civil court cases",
      "Diagnostic/Clinical purposes",
      "Academic and research purposes",
    ],
  },
  {
    icon: <TbBrain />,
    category:
      "Assessment and Therapy for Children with Special Needs and Concerns",
    details: [
      "Behavioral Concerns (e.g., Conduct Disorder, ADHD, etc.)",
      "Developmental Concerns (ASD, GDD, etc.)",
      "Intellectual Ability Assessment",
      "Emotional Quotient Assessment",
      "Other special concerns of children and adolescents",
    ],
  },
  {
    icon: <TbUsersGroup />,
    category:
      "Clinical Consultation, Counseling, Psycho-social Interventions, and Referrals",
    details: [
      "Interpersonal and interpersonal concerns",
      "Marital and parenting concerns",
      "Trauma assessment and management",
      "Other special concerns",
    ],
  },
  {
    icon: <TbBook />,
    category: "Tutorial and Review Classes for PRC Board Examinations",
    details: [
      "Guidance and Counseling",
      "Psychology/Psychometrician",
      "Education",
    ],
  },
  {
    icon: <TbClipboardList />,
    category:
      "Program Development and Administration for Students, Employees, and Organizations",
    details: [],
  },
  {
    icon: <TbPresentation />,
    category:
      "Trainings, Seminars, Workshops, Recollection, and Team Building Organizing and Facilitating",
    details: [],
  },
];

function ServicesPage() {
  return (
    <div className="px-6 lg:px-12 mt-10 mb-16">
      <SectionHeader title={"Our Services"} />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-3 mt-6 md:mt-12">
        {servicesOffered.map((service, index) => (
          <div
            key={index}
            className={classNames(
              "lg:px-6 py-6 flex gap-4 bg-center bg-cover",
              {
                "lg:border-r border-slate-300": (index + 1) % 3 !== 0,
                "lg:border-b border-slate-300":
                  index < servicesOffered.length - 3,
                "max-lg:border-b border-slate-300":
                  index + 1 !== servicesOffered.length,
              }
            )}
          >
            <p className="text-3xl md:text-4xl text-emerald-600 mt-1">
              {service.icon}
            </p>
            <div className="flex-1">
              <h2 className="text-sm md:text-base font-semibold">
                {service.category}
              </h2>
              <ul className="text-sm mt-6 list-disc marker:text-emerald-600 flex flex-col gap-2">
                {service.details.map((detail, index) => (
                  <li key={index} className="text-xs md:text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
