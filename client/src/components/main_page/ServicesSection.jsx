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
  return (
    <div className="px-6 lg:px-12">
      <div className="mt-40  max-w-7xl mx-auto">
        <SectionHeader title={"Comprehensive Services We Offer"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
            <TbHeartRateMonitor className="text-4xl text-emerald-600 " />
            <h3 className="font-semibold text-slate-800 text-lg mt-4">
              Psychological & Psychiatric Testing
            </h3>
            <p className="text-xs italic">
              For Employment, Legal, Clinical, and Academic Purposes
            </p>
            <p className="mt-6">
              Comprehensive assessments tailored for employment screenings,
              academic needs, clinical diagnostics, and legal cases.
            </p>
          </div>

          <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
            <TbBrain className="text-4xl text-emerald-600 " />
            <h3 className="font-semibold text-slate-800 text-lg mt-4">
              Child & Adolescent Assessments
            </h3>
            <p className="text-xs italic">Supporting Young Minds with Care</p>
            <p className="mt-6">
              Specialized therapy for behavioral issues, developmental concerns,
              intellectual evaluations, and emotional quotient assessments.
            </p>
          </div>

          <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
            <TbUsersGroup className="text-4xl text-emerald-600 " />
            <h3 className="font-semibold text-slate-800 text-lg mt-4">
              Clinical Consultation & Counseling
            </h3>
            <p className="text-xs italic">
              Personalized Care for Mental Well-being
            </p>
            <p className="mt-6">
              Address interpersonal, marital, and trauma-related concerns
              through professional counseling and interventions.
            </p>
          </div>

          <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
            <TbBook className="text-4xl text-emerald-600 " />
            <h3 className="font-semibold text-slate-800 text-lg mt-4">
              Tutorial & Review Classes
            </h3>
            <p className="text-xs italic">Guiding Future Professionals</p>
            <p className="mt-6">
              Prepare for PRC Board Examinations with expert-led tutorials in
              psychology, psychometrics, and education.
            </p>
          </div>

          <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
            <TbClipboardList className="text-4xl text-emerald-600 " />
            <h3 className="font-semibold text-slate-800 text-lg mt-4">
              Program Development & Administration
            </h3>
            <p className="text-xs italic">
              For Students, Employees, and Organizations
            </p>
            <p className="mt-6">
              Tailored programs fostering growth through psychological insights
              and strategic development plans.
            </p>
          </div>

          <div className="p-8 rounded flex flex-col items-center text-center text-sm text-slate-500 shadow-card2 transition-all hover:shadow-card duration-500">
            <TbPresentation className="text-4xl text-emerald-600 " />
            <h3 className="font-semibold text-slate-800 text-lg mt-4">
              Trainings & Workshops
            </h3>
            <p className="text-xs italic">
              Building Stronger Teams and Communities
            </p>
            <p className="mt-6">
              Engage in seminars, workshops, and team-building activities
              promoting mental wellness and harmony.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
