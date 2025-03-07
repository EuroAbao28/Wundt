import React from "react";
import b1 from "../../assets/b1.jpg";
import logo from "../../assets/wundt_logo.jpg";

function HomeSection() {
  return (
    <div
      style={{ backgroundImage: `url(${b1})` }}
      className="h-svh bg-cover bg-center"
    >
      <div className="h-full backdrop-blur-sm bg-gradient-to-r from-white to-white/0 max-sm:to-white/10 px-6 lg:px-12">
        <div className="h-full max-w-7xl mx-auto flex items-center gap-8">
          <div className="max-w-[45rem] max-sm:text-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={logo} alt="" className="w-28 rounded-full" />
              <h1 className="font-cardo text-2xl font-black text-emerald-600">
                Wundt Psychological <br></br> Institute
              </h1>
            </div>
            <div className="mt-20">
              <h1 className="font-bold text-2xl sm:text-4xl">
                Premiere Provider of
                <span className="text-emerald-600">
                  {" "}
                  Psychological Counseling
                </span>{" "}
                &<span className="text-emerald-600"> Educational Services</span>
              </h1>

              <p className="mt-4 text-xs sm:text-sm">
                Professional Regulation Commission - Board of Psychology Permit
                to Operate No. 03
              </p>

              <button className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-sm text-white px-8 py-4 font-semibold rounded mt-8 ">
                Get Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
