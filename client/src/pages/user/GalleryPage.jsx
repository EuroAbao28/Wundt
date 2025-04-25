import React, { useEffect } from "react";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import d1 from "../../assets/d1.jpg";
import d2 from "../../assets/d2.jpg";
import d3 from "../../assets/d3.jpg";
import d4 from "../../assets/d4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Badge from "../../components/Badge";
import classNames from "classnames";
import { Link } from "react-router";
import { TbArrowRight } from "react-icons/tb";
import PageHeader from "../../components/PageHeader";

const GALLERY_ITEMS = [
  { image: d1, alt: "Psychological assessment session" },
  { image: d2, alt: "ADHD therapy workshop" },
  { image: d3, alt: "Team building recollection" },
  { image: d4, alt: "Child developmental assessment" },
  { image: s3, alt: "Wundt Institute clinic reception" },
  { image: s4, alt: "Group counseling session" },
  { image: s5, alt: "Psychometric testing administration" },
  { image: s6, alt: "PRC board exam review seminar" },
  { image: s3, alt: "Clinical consultation room" },
  { image: s4, alt: "Parent-child therapy session" },
  { image: s5, alt: "Cognitive ability evaluation" },
  { image: s6, alt: "Corporate mental health training" },
];

function GalleryPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <PageHeader
        badge={"Our Moments"}
        title={"Impactful"}
        titleHighlight={"Events"}
        desc={
          "Explore highlights from our counseling sessions, training programs, and mental health awareness events across Luzon."
        }
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className={classNames(
                "rounded overflow-hidden max-sm:h-40 h-60"
              )}>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center text-sm sm:text-base px-6 py-3 bg-gradient-to-r from-jungle to-jungle/80 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:brightness-105">
            Load More
            <TbArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
