import React from "react";
import { TbMailFilled } from "react-icons/tb";
import { BiSolidPhone } from "react-icons/bi";
import { MdLocationOn, MdOutlineFacebook } from "react-icons/md";
import SectionHeader from "../SectionHeader";

function ContactsSection() {
  return (
    <div className="px-6 lg:px-12">
      <div className="mt-40 mb-12  max-w-7xl mx-auto">
        <SectionHeader title={"Reach Out to Us"} />

        <div className="mt-12 flex max-lg:flex-col-reverse gap-4">
          <div className="flex flex-col gap-2  flex-1">
            <div className="outline outline-slate-300 p-4 rounded">
              <h3 className="font-semibold text-sm">Dagupan City</h3>
              <div className="mt-2 text-slate-500 flex flex-col gap-1">
                <div className="flex items-center gap-4 text-sm ">
                  <span className="text-emerald-600 text-base">
                    <BiSolidPhone />
                  </span>
                  0939-902-6188
                </div>
                <div className="flex items-center gap-4 text-sm truncate">
                  <span className="text-emerald-600 text-base">
                    <MdOutlineFacebook />
                  </span>
                  https://www.facebook.com/wundtpsychologicalinstitute
                </div>
                <div className="flex items-center gap-4 text-sm truncate">
                  <span className="text-emerald-600 text-base">
                    <TbMailFilled />
                  </span>
                  wundt_inst@yahoo.com.ph
                </div>
                <div className="flex items-start gap-4 text-sm">
                  <span className="text-emerald-600 text-base">
                    <MdLocationOn />
                  </span>
                  2/F ENCARNACION BLDG., RIOFERIO RD., COR. ARELLANO ST.,
                  DAGUPAN CITY
                </div>
              </div>
            </div>

            <div className="outline outline-slate-300 p-4 rounded">
              <h3 className="font-semibold text-sm">Vigan City</h3>
              <div className="mt-2 text-slate-500 flex flex-col gap-1">
                <div className="flex items-center gap-4 text-sm ">
                  <span className="text-emerald-600 text-base">
                    <BiSolidPhone />
                  </span>
                  0955-896-7345
                </div>
                <div className="flex items-center gap-4 text-sm truncate">
                  <span className="text-emerald-600 text-base">
                    <MdOutlineFacebook />
                  </span>
                  https://www.facebook.com/wundtvigan
                </div>
                <div className="flex items-center gap-4 text-sm truncate">
                  <span className="text-emerald-600 text-base">
                    <TbMailFilled />
                  </span>
                  wundt_inst@yahoo.com.ph
                </div>
                <div className="flex items-start gap-4 text-sm ">
                  <span className="text-emerald-600 text-base">
                    <MdLocationOn />
                  </span>
                  2/F EL SENOR JESUS APT., QUIRINO AVE., TAMAG VIGAN CITY,
                  ILOCOS SUR
                </div>
              </div>
            </div>

            <div className="outline outline-slate-300 p-4 rounded">
              <h3 className="font-semibold text-sm">Urdaneta City</h3>
              <div className="mt-2 text-slate-500 flex flex-col gap-1">
                <div className="flex items-center gap-4 text-sm ">
                  <span className="text-emerald-600 text-base">
                    <BiSolidPhone />
                  </span>
                  0969-265-3903
                </div>
                <div className="flex items-center gap-4 text-sm truncate">
                  <span className="text-emerald-600 text-base">
                    <MdOutlineFacebook />
                  </span>
                  https://www.facebook.com/wundturdaneta
                </div>
                <div className="flex items-center gap-4 text-sm truncate">
                  <span className="text-emerald-600 text-base">
                    <TbMailFilled />
                  </span>
                  wundt_inst@yahoo.com.ph
                </div>
                <div className="flex items-start gap-4 text-sm ">
                  <span className="text-emerald-600 text-base">
                    <MdLocationOn />
                  </span>
                  3/F GR8 CORPORATE CENTRE BYPASS RD., ANONAS URDANETA CITY,
                  PANGASINAN
                </div>
              </div>
            </div>

            <div className="outline outline-slate-300 p-4 rounded">
              <h3 className="font-semibold text-sm">Mangaldan</h3>
              <div className="mt-2 text-slate-500 flex flex-col gap-1">
                <div className="flex items-center gap-4 text-sm ">
                  <span className="text-emerald-600 text-base">
                    <BiSolidPhone />
                  </span>
                  0939-902-6188
                </div>
                <div className="flex items-center gap-4 text-sm truncate">
                  <span className="text-emerald-600 text-base">
                    <MdOutlineFacebook />
                  </span>
                  https://www.facebook.com/wundtpsychologicalinstitute
                </div>
                <div className="flex items-center gap-4 text-sm truncate">
                  <span className="text-emerald-600 text-base">
                    <TbMailFilled />
                  </span>
                  wundt_inst@yahoo.com.ph
                </div>
                <div className="flex items-start gap-4 text-sm ">
                  <span className="text-emerald-600 text-base">
                    <MdLocationOn />
                  </span>
                  F&M BLDG. NATIONAL HI-WAY BARI MANGALDAN, PANGASINAN
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-lg:aspect-video outline outline-slate-300 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.3322823394237!2d120.34070005301247!3d16.051283055600592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339167fd1cac4cb7%3A0x46938aef77eafeeb!2sRioferio%20Rd%2C%20Dagupan%2C%20Pangasinan!5e1!3m2!1sen!2sph!4v1740413864077!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsSection;
