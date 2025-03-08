import React from "react";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import s7 from "../../assets/s7.jpg";
import s8 from "../../assets/s8.jpg";
import s9 from "../../assets/s9.jpg";
import s10 from "../../assets/s10.jpg";
import SectionHeader from "../SectionHeader";

function GallerySection(props, ref) {
  return (
    <div ref={ref} id="gallery" className="mt-20 sm:mt-40 px-6 lg:px-12">
      <div className="  max-w-7xl mx-auto">
        <SectionHeader title={"Our gallery"} />

        <div className="mt-12 rounded grid grid-cols-2 grid-rows-2 md:grid-cols-5 gap-2">
          <div className="overflow-hidden rounded">
            <img
              src={s10}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="md:col-span-2 overflow-hidden rounded">
            <img
              src={s9}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s8}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s7}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s6}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s5}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="md:col-span-2 overflow-hidden rounded">
            <img
              src={s4}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img
              src={s3}
              alt=""
              className="object-cover object-center w-full h-[20rem] hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="outline outline-emerald-600 px-6 py-2 text-sm rounded shadow-card2 text-emerald-600">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(GallerySection);
