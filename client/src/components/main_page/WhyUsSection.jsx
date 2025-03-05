import React from "react";
import { TbHeartHandshake, TbShieldCheck, TbUsers } from "react-icons/tb";
import s2 from "../../assets/s2.jpg";
import SectionHeader from "../SectionHeader";

function WhyUsSection() {
  return (
    <div className="mt-40 px-6 lg:px-12">
      <div className="  max-w-7xl mx-auto ">
        <SectionHeader title={"Why Choose Wundt Psychological Institute?"} />

        <div className="flex max-sm:flex-col-reverse mt-12 gap-6 xs:gap-8">
          <div className="flex-1 flex flex-col gap-8 justify-center">
            <div className="flex items-start gap-4">
              <div className="text-emerald-600 text-4xl">
                <TbShieldCheck />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Licensed Professionals
                </h3>
                <p className="text-sm text-slate-500">
                  Experienced and certified experts providing ethical and
                  reliable care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-emerald-600 text-4xl">
                <TbHeartHandshake />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Client-Centered Approach
                </h3>
                <p className="text-sm text-slate-500">
                  Personalized services tailored to meet every client’s unique
                  needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-emerald-600 text-4xl">
                <TbUsers />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Accessible for All</h3>
                <p className="text-sm text-slate-500">
                  Making psychological services affordable and accessible for
                  everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 h-[20rem] rounded relative">
            <img
              src={s2}
              alt=""
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
