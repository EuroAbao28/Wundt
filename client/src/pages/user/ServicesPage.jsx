import React, { useEffect } from "react";
import {
  TbBook,
  TbBrain,
  TbHeartRateMonitor,
  TbUsersGroup,
  TbClipboardList,
  TbPresentation,
} from "react-icons/tb";
import classNames from "classnames";
import SectionHeader from "../../components/SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import b1 from "../../assets/b1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const servicesOffered = [
  {
    icon: <TbHeartRateMonitor />,
    category: "Psychological & Psychiatric Testing/Assessments",
    details: [
      "Employment/Industrial purposes",
      "Internship/OJT purposes",
      "Criminal/civil court cases",
      "Diagnostic/Clinical purposes",
      "Academic and research purposes",
    ],
    image: [b1, b1, b1],
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
    image: [b1, b1, b1],
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
    image: [b1, b1, b1],
  },
  {
    icon: <TbBook />,
    category: "Tutorial and Review Classes for PRC Board Examinations",
    details: [
      "Guidance and Counseling",
      "Psychology/Psychometrician",
      "Education",
    ],
    image: [b1, b1, b1],
  },
  {
    icon: <TbClipboardList />,
    category:
      "Program Development and Administration for Students, Employees, and Organizations",
    details: [],
    image: [b1, b1, b1],
  },
  {
    icon: <TbPresentation />,
    category:
      "Trainings, Seminars, Workshops, Recollection, and Team Building Organizing and Facilitating",
    details: [],
    image: [b1, b1, b1],
  },
];

function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen pb-16">
      <div
        data-aos="fade-down"
        style={{ backgroundImage: `url(${b1})` }}
        className="bg-cover bg-center">
        <div className="bg-black/50 p-16">
          <SectionHeader title={"Our Services"} colorMode={"dual"} />
        </div>
      </div>

      <div className="flex-1 px-6 lg:px-12 mt-6 sm:mt-12  ">
        <div className="flex  flex-col max-w-7xl w-full mx-auto gap-16">
          {servicesOffered.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 1 ? "fade-left" : "fade-right"}
              className="flex max-lg:flex-col lg:odd:flex-row-reverse drop-shadow-md bg-white rounded-xl overflow-hidden group">
              {/* Image */}
              <div className="h-auto lg:w-[40%] overflow-hidden">
                <Swiper
                  spaceBetween={10}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="w-full h-full">
                  {service.image.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`${service.category} ${idx + 1}`}
                        className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-6 p-6 lg:p-12 ">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold ">
                  {service.category}
                </h2>

                <ul className="text-xs md:text-sm list-disc marker:text-emerald-600 pl-5 flex flex-col gap-2 text-gray-600">
                  {service.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/appointment"
                  className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% px-6 py-3 w-fit rounded-md text-white text-sm transition-all active:scale-95">
                  Get Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;

//  <div className="pb-16 min-h-screen">
//     <div
//       data-aos="fade-down"
//       style={{ backgroundImage: `url(${b1})` }}
//       className="bg-cover bg-center">
//       <div className="bg-black/50 p-16">
//         <SectionHeader title={"Our Services"} colorMode={"dual"} />
//       </div>
//     </div>

//     <div data-aos="fade-up" className="mt-6 sm:mt-12 ">
//       <div className="flex-1 px-6 lg:px-12  ">
//         <div className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
//           {servicesOffered.map((service, index) => (
//             <div
//               key={index}
//               className={classNames(
//                 "sm:px-6 py-6 flex max-sm:border-b max-sm:last:border-none gap-4 border-gray-300",
//                 {
//                   "sm:max-lg:border-b": index < servicesOffered.length - 2,
//                   "sm:max-lg:border-r": index % 2 === 0,
//                   "lg:border-r": (index + 1) % 3 !== 0,
//                   "lg:border-b": index < servicesOffered.length - 3,
//                 }
//               )}>
//               <p className="text-3xl md:text-4xl text-emerald-600 mt-1">
//                 {service.icon}
//               </p>
//               <div className="flex-1">
//                 <h2 className="text-sm md:text-base font-semibold ">
//                   {service.category}
//                 </h2>
//                 <ul className="text-sm mt-6 list-disc marker:text-emerald-600 flex flex-col gap-2">
//                   {service.details.map((detail, index) => (
//                     <li key={index} className="text-xs md:text-sm">
//                       {detail}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-12">
//           <Link
//             to={"/appointment"}
//             className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-sm text-white px-8 py-2 sm:py-4 max-sm:flex-1 text-center font-semibold rounded active:scale-95 transition uppercase">
//             Book an Appointment
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
