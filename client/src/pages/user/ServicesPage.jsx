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
    <div>
      <div className="py-12 px-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quas
        labore quisquam vero adipisci repellendus maiores, corporis numquam odio
        inventore architecto magnam dignissimos? Enim debitis vero accusantium
        quas, et maxime? Ea optio temporibus, ipsa laboriosam, accusantium
        itaque reiciendis id sunt dolorem expedita totam iusto facere saepe
        doloremque esse, architecto laudantium velit maxime officia. Magni
        accusantium repellat hic quod, fugiat voluptate itaque voluptatum
        temporibus placeat eum laborum odit error exercitationem quas numquam
        atque ipsam, libero illo incidunt dicta consequuntur. Fugit alias
        perferendis quis quasi nihil maiores, enim nemo animi numquam ex
        praesentium excepturi commodi assumenda neque blanditiis exercitationem
        atque illum similique!
      </div>

      <div className="py-12 px-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quas
        labore quisquam vero adipisci repellendus maiores, corporis numquam odio
        inventore architecto magnam dignissimos? Enim debitis vero accusantium
        quas, et maxime? Ea optio temporibus, ipsa laboriosam, accusantium
        itaque reiciendis id sunt dolorem expedita totam iusto facere saepe
        doloremque esse, architecto laudantium velit maxime officia. Magni
        accusantium repellat hic quod, fugiat voluptate itaque voluptatum
        temporibus placeat eum laborum odit error exercitationem quas numquam
        atque ipsam, libero illo incidunt dicta consequuntur. Fugit alias
        perferendis quis quasi nihil maiores, enim nemo animi numquam ex
        praesentium excepturi commodi assumenda neque blanditiis exercitationem
        atque illum similique!
      </div>

      <div className="py-12 px-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quas
        labore quisquam vero adipisci repellendus maiores, corporis numquam odio
        inventore architecto magnam dignissimos? Enim debitis vero accusantium
        quas, et maxime? Ea optio temporibus, ipsa laboriosam, accusantium
        itaque reiciendis id sunt dolorem expedita totam iusto facere saepe
        doloremque esse, architecto laudantium velit maxime officia. Magni
        accusantium repellat hic quod, fugiat voluptate itaque voluptatum
        temporibus placeat eum laborum odit error exercitationem quas numquam
        atque ipsam, libero illo incidunt dicta consequuntur. Fugit alias
        perferendis quis quasi nihil maiores, enim nemo animi numquam ex
        praesentium excepturi commodi assumenda neque blanditiis exercitationem
        atque illum similique!
      </div>
    </div>
  );
}

export default ServicesPage;
