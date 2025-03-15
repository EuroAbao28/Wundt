import React, { useEffect } from "react";
import { TbHeartHandshake, TbShieldCheck, TbUsers } from "react-icons/tb";
import s2 from "../../assets/s2.jpg";
import SectionHeader from "../SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyUsSection() {
  const contents = [
    {
      icon: <TbShieldCheck />,
      title: "Licensed Professionals",
      desc: "Experienced and certified experts providing ethical and reliable care.",
    },
    {
      icon: <TbHeartHandshake />,
      title: "Client-Centered Approach",
      desc: "Personalized services tailored to meet every client’s unique needs.",
    },
    {
      icon: <TbUsers />,
      title: "Accessible for All",
      desc: "Making psychological services affordable and accessible for everyone.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-right" className="mt-20 sm:mt-40 px-6 lg:px-12">
      <div className="  max-w-7xl mx-auto ">
        <SectionHeader title={"Why Choose Wundt Psychological Institute?"} />

        <div className="flex max-sm:flex-col-reverse mt-12 gap-10">
          <div className="flex-1 flex flex-col gap-8 justify-center">
            {contents.map((content, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-emerald-600 text-3xl sm:text-4xl">
                  {content.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    {content.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {content.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 h-[20rem] rounded relative">
            <img
              src={s2}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded"
            />
            <span className="absolute inset-0 bg-emerald-600 -z-10 translate-y-2 translate-x-2 rounded"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
