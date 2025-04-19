import React, { useEffect, useState } from "react";
import { TbMailFilled } from "react-icons/tb";
import { BiSolidPhone } from "react-icons/bi";
import { MdLocationOn, MdOutlineFacebook } from "react-icons/md";
import SectionHeader from "../SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";

const contents = [
  {
    header: "Dagupan City",
    phoneNo: "0939-902-6188",
    fb: "www.facebook.com/wundtpsychologicalinstitute",
    email: "wundt_inst@yahoo.com.ph",
    loc: "2/F ENCARNACION BLDG., RIOFERIO RD., COR. ARELLANO ST., DAGUPAN CITY",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.3322823394237!2d120.34070005301247!3d16.051283055600592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339167fd1cac4cb7%3A0x46938aef77eafeeb!2sRioferio%20Rd%2C%20Dagupan%2C%20Pangasinan!5e1!3m2!1sen!2sph!4v1740413864077!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    ),
  },
  {
    header: "Vigan City",
    phoneNo: "0955-896-7345",
    fb: "https://www.facebook.com/wundtvigan",
    email: "wundt_inst@yahoo.com.ph",
    loc: "2/F EL SENOR JESUS APT., QUIRINO AVE., TAMAG VIGAN CITY, ILOCOS SUR",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.149546680659!2d120.38628680994634!3d17.56207644112799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e65792392c1c9%3A0xe0f28da9c5354bf5!2sEl%20Se%C3%B1or%20Jesus%20Apartelle%20Vigan!5e1!3m2!1sen!2sph!4v1741374414312!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    ),
  },
  {
    header: "Urdaneta City",
    phoneNo: "0969-265-3903",
    fb: "https://www.facebook.com/wundturdaneta",
    email: "wundt_inst@yahoo.com.ph",
    loc: "3/F GR8 CORPORATE CENTRE BYPASS RD., ANONAS URDANETA CITY, PANGASINAN",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.352285079751!2d120.57022247521374!3d15.990829684677395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33913f2daa5e4689%3A0xd56a0c67f361c08c!2sGr8%20Corporate%20Center!5e1!3m2!1sen!2sph!4v1741374673268!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    ),
  },
  {
    header: "Mangaldan",
    phoneNo: "0939-902-6188",
    fb: "https://www.facebook.com/wundtpsychologicalinstitute",
    email: "wundt_inst@yahoo.com.ph",
    loc: "F&M BLDG. NATIONAL HI-WAY BARI MANGALDAN, PANGASINAN",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.005933280481!2d120.39603546375427!3d16.05870475717928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391690020f02c03%3A0x423cf02f4fd1332b!2sThe%20Skydeck%20-%20F%26M%20Building!5e1!3m2!1sen!2sph!4v1741374960528!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    ),
  },
];

function ContactsSection() {
  const [selectedLocation, setSelectionLocation] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div data-aos="fade-up" className="mt-20 sm:mt-40 px-6 lg:px-12">
      <div className=" mb-12  max-w-7xl mx-auto">
        <SectionHeader title={"Reach Out to Us"} />

        <div className="mt-12 flex max-lg:flex-col-reverse gap-4">
          <div className="flex flex-col gap-2  flex-1">
            {contents.map((content, index) => (
              <div
                key={index}
                onClick={() => setSelectionLocation(index)}
                className={`outline outline-gray-300 p-4 rounded cursor-pointer hover: transition-all relative  ${
                  index === selectedLocation && " shadow-card2"
                }`}>
                <h3 className="font-semibold text-xs sm:text-sm">
                  {content.header}
                </h3>
                <div className="mt-2 text-gray-600 flex flex-col gap-1">
                  <div className="flex items-center  text-xs sm:text-sm">
                    <span className="text-emerald-600 text-base sticky start-0 bg-white pr-3 sm:pr-4">
                      <BiSolidPhone />
                    </span>
                    {content.phoneNo}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm overflow-x-auto scrollbar-none">
                    <span className="text-emerald-600 text-base sticky start-0 bg-white pr-3 sm:pr-4">
                      <MdOutlineFacebook />
                    </span>
                    {content.fb}
                  </div>
                  <div className="flex items-center  text-xs sm:text-sm">
                    <span className="text-emerald-600 text-base sticky start-0 bg-white pr-3 sm:pr-4">
                      <TbMailFilled />
                    </span>
                    {content.email}
                  </div>
                  <div className="flex items-start text-xs sm:text-sm">
                    <span className="text-emerald-600 text-base sticky start-0 bg-white pr-3 sm:pr-4">
                      <MdLocationOn />
                    </span>
                    {content.loc}
                  </div>
                </div>

                {selectedLocation === index && (
                  <div className="w-3 aspect-square rounded-full bg-emerald-600 absolute top-4 right-4 shadow-card"></div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1 max-lg:aspect-video outline outline-gray-300 rounded overflow-hidden">
            {contents[selectedLocation].map}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsSection;
