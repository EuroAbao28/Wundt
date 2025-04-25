import React from "react";
import d1 from "../assets/d1.jpg";
import Badge from "./Badge";

function PageHeader({ badge, title, titleHighlight, desc }) {
  return (
    <div
      style={{ backgroundImage: `url(${d1})` }}
      className="bg-center bg-cover">
      <div className="py-16 bg-gradient-to-br from-jungle/90 via-jungle/70 to-therapy-blue/80 overflow-hidden">
        <div
          data-aos="fade-down"
          className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center">
          <Badge label={badge} className="bg-white/20 text-white" />

          <h1 className="text-4xl md:text-5xl font-bold mt-6 text-white">
            {title} <span className="text-emerald-300">{titleHighlight}</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90 sm:mx-12 md:mx-32 lg:mx-60">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
