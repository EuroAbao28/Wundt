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
import Badge from "../Badge";
import { TbArrowRight } from "react-icons/tb";
import GradientLine from "../GradientLine";

const CONTENTS = [
  {
    icon: <TbHeartRateMonitor />,
    title: "Psychological Testing",
    description:
      "Comprehensive assessments for employment, academic, clinical, and legal purposes.",
  },
  {
    icon: <TbBrain />,
    title: "Child Assessments",
    description:
      "Specialized evaluations for behavioral and developmental concerns.",
  },
  {
    icon: <TbUsersGroup />,
    title: "Clinical Counseling",
    description:
      "Personalized therapy for individuals, couples, and trauma recovery.",
  },
  {
    icon: <TbBook />,
    title: "Review Classes",
    description: "Preparation for PRC Board Examinations in psychology.",
  },
  {
    icon: <TbClipboardList />,
    title: "Program Development",
    description:
      "Customized programs for students, employees and organizations.",
  },
  {
    icon: <TbPresentation />,
    title: "Workshops",
    description: "Seminars and team-building activities for mental wellness.",
  },
];

function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header data-aos="fade-up" className="text-center">
          <Badge
            label={"Our Services"}
            className="text-therapy-blue bg-therapy-blue/10"
          />

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
            Comprehensive
            <span className="text-therapy-blue"> Psychological</span> Services
          </h2>

          <GradientLine type="blue-to-jungle" />
        </header>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENTS.map((content, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 shadow-sm hover:shadow-md border border-gray-100 rounded-xl group transition-all">
              <div className="text-therapy-blue text-2xl p-3 rounded-lg bg-therapy-blue/10 w-fit">
                {content.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{content.title}</h3>
              <p className="mt-4 text-gray-600 text-sm">
                {content.description}
              </p>

              <Link className="text-sm flex items-center text-jungle mt-6 gap-2 group-hover:underline underline-offset-2 font-medium w-fit">
                Learn more
                <TbArrowRight className="group-hover:ml-1 transition-all" />
              </Link>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-12 flex justify-center">
          <Link
            to="/services"
            className="flex items-center text-sm sm:text-base px-6 py-3 bg-gradient-to-r from-jungle to-jungle/80 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:brightness-105">
            View All Services
            <TbArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
