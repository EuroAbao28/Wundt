import React from "react";
import s3 from "../../assets/s3.jpg";
import s2 from "../../assets/s2.jpg";
import s7 from "../../assets/s7.jpg";
import s9 from "../../assets/s9.jpg";
import b1 from "../../assets/b1.jpg";
import SectionHeader from "../SectionHeader";

function NewsSection() {
  const contents = [
    {
      image: s9,
      title: "Lorem ipsum dolor sit Molestiae, sit.",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem eos ratione explicabo earum dignissimos laudantium dolorum assumenda animi.",
    },
    {
      image: s7,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit.",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem eos ratione explicabo earum dignissimos laudantium dolorum assumenda animi.",
    },
    {
      image: s2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit.",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem eos ratione explicabo earum dignissimos laudantium dolorum assumenda animi.",
    },
    {
      image: s3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem eos ratione explicabo earum dignissimos laudantium dolorum assumenda animi.",
    },
    {
      image: s9,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit.",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem eos ratione explicabo earum dignissimos laudantium dolorum assumenda animi.",
    },
    {
      image: s7,
      title: "Lorem  adipisicing elit. Molestiae, sit.",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem eos ratione explicabo earum dignissimos laudantium dolorum assumenda animi.",
    },
    {
      image: s9,
      title: "Lorem ipsum dolo  adipisicing elit. Molestiae, sit.",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem eos ratione explicabo earum dignissimos laudantium dolorum assumenda animi.",
    },
    {
      image: s2,
      title: "Lorem ipsum dolor sit amet   adipisicing elit. Molestiae, sit.",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem eos ratione explicabo earum dignissimos laudantium dolorum assumenda animi.",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${b1})` }}
      className="mt-20 sm:mt-40  bg-center bg-cover">
      <div className="px-6 pb-6 lg:px-12 lg:pb-12 bg-gradient-to-b from-white from-5% to-emerald-600/60 backdrop-blur-sm">
        <div className=" max-w-7xl mx-auto">
          <SectionHeader title={"Latest News & Updates"} />

          <div className="mt-12 flex gap-2 snap-x snap-mandatory overflow-x-auto pt-2 scroll-smooth scrollbar scrollbar-thumb-white scrollbar-track-white/30 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-6">
            {contents.map((content, index) => (
              <div
                key={index}
                className="rounded overflow-hidden aspect-square relative group transition-all hover:-translate-y-1 duration-500 w-[16rem] md:w-[20rem] shrink-0 snap-center">
                <img
                  src={content.image}
                  alt=""
                  loading="lazy"
                  className="object-center object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2  gap-2 bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/90 transition-all duration-500">
                  <p className="text-xs md:text-sm text-white font-semibold">
                    {content.title}
                  </p>
                  <p className="text-white/80 text-xs md:text-sm line-clamp-3">
                    {content.desc}
                  </p>
                  <button className="text-center py-2 text-xs md:text-sm font-semibold bg-emerald-600 text-white rounded">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
