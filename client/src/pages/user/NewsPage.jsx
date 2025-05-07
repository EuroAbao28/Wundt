import React, { useEffect } from "react";
import { TbArrowRight } from "react-icons/tb";
import s3 from "../../assets/s3.jpg";
import s2 from "../../assets/s2.jpg";
import s7 from "../../assets/s7.jpg";
import s9 from "../../assets/s9.jpg";
import b1 from "../../assets/b1.jpg";
import Badge from "../../components/Badge";
import GradientLine from "../../components/GradientLine";
import AOS from "aos";
import "aos/dist/aos.css";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router";

const NEWS_ITEMS = [
  {
    id: 1,
    image: s9,
    title: "New Mental Health Workshop Series",
    date: "May 15, 2023",
    desc: "Join our monthly workshop series focusing on stress management techniques and mindfulness practices for better mental health.",
    category: "Workshops",
  },
  {
    id: 2,
    image: s7,
    title: "Expansion to New Location in Urdaneta",
    date: "April 28, 2023",
    desc: "We're excited to announce the opening of our new branch in Urdaneta City, making our services more accessible to the community.",
    category: "Announcements",
  },
  {
    id: 3,
    image: s2,
    title: "Child Psychology Seminar Success",
    date: "March 10, 2023",
    desc: "Our recent seminar on child development and behavioral interventions was attended by over 150 participants.",
    category: "Events",
  },
  {
    id: 4,
    image: s3,
    title: "New PRC Board Exam Review Schedule",
    date: "February 22, 2023",
    desc: "Registration is now open for our intensive review program for the upcoming Psychology board examinations.",
    category: "Programs",
  },
  {
    id: 5,
    image: s9,
    title: "Community Outreach Program Results",
    date: "January 18, 2023",
    desc: "Our free counseling initiative served over 200 individuals in underserved communities last quarter.",
    category: "Community",
  },
  {
    id: 6,
    image: s7,
    title: "Team Building Workshop for Educators",
    date: "December 5, 2022",
    desc: "Specialized workshop designed to help teachers manage classroom stress and improve student engagement.",
    category: "Workshops",
  },
];

function NewsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <PageHeader
        badge={"News & Updates"}
        title={"Latest"}
        titleHighlight={"News"}
        desc={
          "Stay updated with our announcements, events, and mental health insights"
        }
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col border border-gray-200 shadow-sm hover:shadow-md overflow-hidden rounded-xl group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-center object-cover group-hover:scale-105 transition-all duration-300"
                />

                <p className="bg-jungle text-white absolute left-4 bottom-4 text-xs md:text-sm px-2 py-1 rounded">
                  {item.category}
                </p>
              </div>

              <div className="p-6 flex-1 relative pb-16">
                <p className="text-xs md:text-sm text-gray-500">{item.date}</p>

                <h3 className="text-base md:text-lg font-semibold mt-2 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-xs md:text-sm mt-3 line-clamp-3">
                  {item.desc}
                </p>

                <Link className="flex items-center text-xs md:text-sm text-jungle font-medium group-hover:underline underline-offset-2 mt-2 w-fit pt-2 pr-2 absolute bottom-6">
                  Read more
                  <TbArrowRight className="ml-1 group-hover:ml-2 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-12 text-center">
          <Link className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-jungle to-jungle/80 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:brightness-105 text-sm md:text-base">
            Load More Articles
            <TbArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
