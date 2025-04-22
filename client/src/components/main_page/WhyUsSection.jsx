import React, { useEffect } from "react";
import {
  TbCertificate,
  TbHeartHandshake,
  TbShieldCheck,
  TbUsers,
} from "react-icons/tb";
import s2 from "../../assets/s2.jpg";
import SectionHeader from "../SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import b1 from "../../assets/s2.jpg";
import Badge from "../Badge";
import GradientLine from "../GradientLine";

const CONTENTS = [
  {
    icon: <TbShieldCheck />,
    title: "Licensed Professionals",
    description:
      "PRC-certified psychologists with specialized training in evidence-based therapies",
    stats: "15+ Certified Experts",
  },
  {
    icon: <TbHeartHandshake />,
    title: "Personalized Care",
    description:
      "Tailored treatment plans for individuals, couples, and families",
    stats: "10,000+ Clients Served",
  },
  {
    icon: <TbUsers />,
    title: "Community Focus",
    description:
      "Affordable services with outreach programs for underserved populations",
    stats: "5 Branch Locations",
  },
];

function WhyUsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="text-center">
          <Badge
            label={"Why Choose Us"}
            className="text-therapy-blue bg-therapy-blue/10"
          />

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
            The <span className="text-jungle">Wundt</span> Difference
          </h2>

          <GradientLine />
        </header>

        <div className="flex flex-wrap gap-8 mt-12">
          {CONTENTS.map((content, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 flex flex-col rounded-xl shadow-sm relative hover:shadow-md transition-all flex-1 min-w-xs overflow-hidden border border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {content.title}
              </h3>
              <p className="text-sm sm:text-base flex-1 mb-4 text-gray-600">
                {content.description}
              </p>
              <p className="text-sm font-medium text-therapy-blue">
                {content.stats}
              </p>
              <div className="rounded-full p-3 bg-jungle/10 w-fit text-8xl text-white absolute -right-4 -bottom-4">
                {content.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 flex max-sm:flex-col max-sm:items-center items-start gap-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200  mt-16">
          <div className="text-3xl sm:text-4xl text-jungle bg-jungle/10 p-3 rounded-full flex justify-center items-center">
            <TbCertificate />
          </div>
          <div className="space-y-2 max-sm:text-center">
            <h3 className="text-lg sm:text-xl font-semibold">
              Fully Accredited Practice
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Recognized by the Professional Regulation Commission (Permit No.
              03) and member of the Philippine Psychological Association
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
