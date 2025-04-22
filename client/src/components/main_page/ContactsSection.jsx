import React, { useEffect, useState } from "react";
import { TbMailFilled } from "react-icons/tb";
import { BiSolidPhone } from "react-icons/bi";
import { MdLocationOn, MdOutlineFacebook } from "react-icons/md";
import SectionHeader from "../SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import classNames from "classnames";
import Badge from "../Badge";
import GradientLine from "../GradientLine";
import iconFb from "../../assets/icon-fb.png";
import iconGmail from "../../assets/icon-gmail.png";
import iconLocation from "../../assets/icon-location.png";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const CONTENTS = [
  {
    id: 1,
    city: "Dagupan City",
    phone: "0939-902-6188",
    facebook: "wundtpsychologicalinstitute",
    facebookUrl: "https://www.facebook.com/wundtpsychologicalinstitute",
    email: "wundt_inst@yahoo.com.ph",
    address:
      "2/F ENCARNACION BLDG., RIOFERIO RD., COR. ARELLANO ST., DAGUPAN CITY",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.3322823394237!2d120.34070005301247!3d16.051283055600592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339167fd1cac4cb7%3A0x46938aef77eafeeb!2sRioferio%20Rd%2C%20Dagupan%2C%20Pangasinan!5e1!3m2!1sen!2sph!4v1740413864077!5m2!1sen!2sph",
  },
  {
    id: 2,
    city: "Vigan City",
    phone: "0955-896-7345",
    facebook: "wundtvigan",
    facebookUrl: "https://www.facebook.com/wundtvigan",
    email: "wundt_inst@yahoo.com.ph",
    address:
      "2/F EL SENOR JESUS APT., QUIRINO AVE., TAMAG VIGAN CITY, ILOCOS SUR",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.149546680659!2d120.38628680994634!3d17.56207644112799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e65792392c1c9%3A0xe0f28da9c5354bf5!2sEl%20Se%C3%B1or%20Jesus%20Apartelle%20Vigan!5e1!3m2!1sen!2sph!4v1741374414312!5m2!1sen!2sph",
  },
  {
    id: 3,
    city: "Urdaneta City",
    phone: "0969-265-3903",
    facebook: "wundturdaneta",
    facebookUrl: "https://www.facebook.com/wundturdaneta",
    email: "wundt_inst@yahoo.com.ph",
    address:
      "3/F GR8 CORPORATE CENTRE BYPASS RD., ANONAS URDANETA CITY, PANGASINAN",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.352285079751!2d120.57022247521374!3d15.990829684677395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33913f2daa5e4689%3A0xd56a0c67f361c08c!2sGr8%20Corporate%20Center!5e1!3m2!1sen!2sph!4v1741374673268!5m2!1sen!2sph",
  },
  {
    id: 4,
    city: "Mangaldan",
    phone: "0939-902-6188",
    facebook: "wundtpsychologicalinstitute",
    facebookUrl: "https://www.facebook.com/wundtpsychologicalinstitute",
    email: "wundt_inst@yahoo.com.ph",
    address: "F&M BLDG. NATIONAL HI-WAY BARI MANGALDAN, PANGASINAN",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.005933280481!2d120.39603546375427!3d16.05870475717928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391690020f02c03%3A0x423cf02f4fd1332b!2sThe%20Skydeck%20-%20F%26M%20Building!5e1!3m2!1sen!2sph!4v1741374960528!5m2!1sen!2sph",
  },
];

function ContactsSection() {
  const [selectedLocation, setSelectionLocation] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header data-aos="fade-up" className="text-center">
          <Badge
            label={"Our Locations"}
            className="text-therapy-blue bg-therapy-blue/10"
          />

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
            Find Us
            <span className="text-jungle"> Near You</span>
          </h2>

          <GradientLine />
        </header>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* location cards */}
          <div className="grid grid-cols-1 gap-4 order-2 lg:order-1">
            {CONTENTS.map((content, index) => (
              <div
                key={content.id}
                onClick={() => setSelectionLocation(index)}
                className={classNames(
                  "rounded-xl border cursor-pointer border-gray-200 p-6 shadow-sm hover:shadow-md transition-all",
                  {
                    "bg-jungle/10 border-jungle": selectedLocation === index,
                  }
                )}>
                <h3 className="text-lg font-semibold">{content.city}</h3>

                <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-jungle/10 p-2 rounded-full text-jungle hidden sm:flex items-center justify-center text-lg">
                      <FaPhoneAlt />
                    </div>
                    <p className="text-gray-600">{content.phone}</p>
                  </div>

                  <div className="bg-jungle/10 p-2 rounded-full text-jungle flex items-center justify-center text-lg">
                    <FaFacebookF />
                  </div>

                  <div className="bg-jungle/10 p-2 rounded-full text-jungle flex items-center justify-center text-lg">
                    <BiLogoGmail />
                  </div>

                  <div className="bg-jungle/10 p-2 rounded-full text-jungle flex items-center justify-center text-lg">
                    <HiLocationMarker />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* map section */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 order-1 lg:order-2">
            <iframe
              src={CONTENTS[selectedLocation].mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactsSection;
