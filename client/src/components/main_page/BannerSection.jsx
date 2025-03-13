import React from "react";
import b1 from "../../assets/b1.jpg";
import { Link } from "react-router";

function BannerSection() {
  return (
    <div
      style={{ backgroundImage: `url(${b1})` }}
      className="mt-40 bg-center bg-cover"
    >
      <div className="px-6 py-12 lg:p-20 bg-radial-[at_-35%_15%] from-green-500/80 to-emerald-600/80 to-75% flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-xl md:text-2xl font-semibold ">
          Your Path to Growth and Well-Being Starts Here
        </h1>
        <p className="text-white text-xs md:text-sm italic mt-2 w-[80%]">
          Psychological, Counseling, and Educational Services Tailored for You
        </p>
        <Link
          to={"appointment"}
          className="bg-white text-emerald-600 text-sm md:text-base font-semibold  px-8 py-4 rounded mt-12 active:scale-95 transition-all"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}

export default BannerSection;
