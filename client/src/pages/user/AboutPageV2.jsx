import React, { useEffect } from "react";
import {
  TbShieldCheck,
  TbHeartHandshake,
  TbUsers,
  TbCertificate,
} from "react-icons/tb";
import {
  FaShieldAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "../../components/SectionHeader";
import dc from "../../assets/dc.png";
import blurHospital from "../../assets/blur-hospital.jpg";
import d1 from "../../assets/d1.jpg";
import d2 from "../../assets/d2.jpg";
import d3 from "../../assets/d3.jpg";

function AboutPageV2() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-jungle/90 to-therapy-blue/90 z-10"></div>
        <img
          src={d1}
          alt="Psychological services background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
          <SectionHeader
            title="About Wundt Psychological Institute"
            subtitle="Our journey, mission, and commitment to mental health care"
            colorMode="light"
          />
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100"
          data-aos="fade-up">
          {/* Founder Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative h-72 w-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={dc}
                alt="Dr. Ninety U. Dormanian, Founder"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle/30 to-transparent"></div>
            </div>
          </div>

          {/* Founder Story */}
          <div className="w-full lg:w-2/3 space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-therapy-blue uppercase rounded-full bg-therapy-blue/10">
              Our Founder
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Visionary Leadership
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                <span className="font-semibold text-jungle">
                  Dr. Ninety U. Dormanian
                </span>{" "}
                founded Wundt Psychological Institute in 2015 with a mission to
                make quality mental health care accessible across Northern
                Luzon.
              </p>
              <p>
                After recognizing the severe shortage of psychological services
                in the region, Dr. Dormanian established the institute to bridge
                this gap, combining evidence-based practices with compassionate
                care.
              </p>
              <p>
                "Mental health is not a luxury—it's a fundamental human right,"
                remains the guiding principle that shapes our institute's
                culture and continues to inspire our team today.
              </p>
            </div>

            {/* Milestones */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  year: "2015",
                  event: "Institute founded in Dagupan City",
                  icon: <FaCalendarAlt className="text-jungle" />,
                },
                {
                  year: "2018",
                  event: "Expanded to Vigan and Urdaneta",
                  icon: <FaMapMarkerAlt className="text-jungle" />,
                },
                {
                  year: "2023",
                  event: "Serving 10,000+ clients annually",
                  icon: <FaUsers className="text-jungle" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-jungle/30 transition-all">
                  <div className="flex items-center mb-2">
                    <div className="bg-jungle/10 p-2 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-jungle">{item.year}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gradient-to-r from-jungle to-therapy-blue">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-white/20 mb-4">
            Our Commitment
          </span>
          <h2 className="text-3xl font-bold mb-6">Continuing The Mission</h2>
          <p className="text-lg leading-8 mb-8">
            Today, we honor our founder's legacy by maintaining his commitment
            to excellence while expanding our services to meet the evolving
            needs of our community. We remain at the forefront of psychological
            care while never losing sight of the human element that makes our
            work meaningful.
          </p>
          <div className="w-20 h-1 bg-white/50 mx-auto"></div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-therapy-blue uppercase rounded-full bg-therapy-blue/10 mb-4">
            Our Foundation
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            The <span className="text-jungle">CARE</span> Principles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-therapy-blue to-jungle mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              letter: "C",
              title: "Companion",
              description:
                "Deliver service with compassion founded on human dignity",
              icon: <TbHeartHandshake className="text-jungle" size={24} />,
            },
            {
              letter: "A",
              title: "Accessibility",
              description:
                "Bring services closer to clients across Northern Luzon",
              icon: <TbUsers className="text-jungle" size={24} />,
            },
            {
              letter: "R",
              title: "Responsibility",
              description:
                "Serve all clients without prejudice to background or status",
              icon: <TbShieldCheck className="text-jungle" size={24} />,
            },
            {
              letter: "E",
              title: "Excellence",
              description:
                "Maintain highest professional and clinical standards",
              icon: <TbCertificate className="text-jungle" size={24} />,
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-3xl font-bold text-jungle mr-4">
                  {item.letter}
                </div>
                <div className="bg-jungle/10 p-2 rounded-full">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditation Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-jungle uppercase rounded-full bg-jungle/10 mb-4">
              Our Credentials
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Professional{" "}
              <span className="text-therapy-blue">Accreditations</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-jungle to-therapy-blue mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-right">
              <div className="flex items-center mb-4">
                <div className="bg-jungle/10 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-jungle" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  PRC Certified
                </h3>
              </div>
              <p className="text-gray-600">
                Recognized by the Professional Regulation Commission (Permit No.
                03) and member of the Philippine Psychological Association.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-left">
              <div className="flex items-center mb-4">
                <div className="bg-jungle/10 p-3 rounded-full mr-4">
                  <TbCertificate className="text-jungle" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Solo Parent-Friendly
                </h3>
              </div>
              <p className="text-gray-600">
                Certified by Q Asia Magazine for our family-friendly policies
                and support programs for single parents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-therapy-blue uppercase rounded-full bg-therapy-blue/10 mb-4">
            Our Team
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Meet Our <span className="text-jungle">Experts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            PRC-certified psychologists providing compassionate, personalized
            therapy using scientifically validated approaches.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-therapy-blue to-jungle mx-auto mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Maria Santos",
              role: "Clinical Psychologist",
              specialty: "Trauma & Anxiety Disorders",
              image: d2,
            },
            {
              name: "Dr. James Reyes",
              role: "Child Psychologist",
              specialty: "Developmental Disorders",
              image: d3,
            },
            {
              name: "Dr. Andrea Cruz",
              role: "Industrial Psychologist",
              specialty: "Organizational Behavior",
              image: d1,
            },
          ].map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-therapy-blue font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPageV2;
