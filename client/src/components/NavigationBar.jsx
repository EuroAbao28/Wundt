import React, { useState } from "react";
import logo from "../assets/wundt_logo.jpg";
import { MdMenu } from "react-icons/md";
import classNames from "classnames";
import { Link } from "react-router";

const navContents = [
  { name: "home" },
  { name: "services" },
  { name: "about" },
  { name: "gallery" },
  { name: "news" },
  // { name: "contact" },
];

function NavigationBar() {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  return (
    <header className=" bg-white fixed top-0 left-0 right-0 z-20 shadow-card2 px-4 sm:px-6 lg:px-12">
      <div className=" max-w-7xl mx-auto ">
        <div className="py-2 sm:py-4 flex justify-between gap-8">
          {/* logo */}
          <div className=" flex items-center gap-2 max-sm:pl-2  ">
            <img src={logo} alt="logo" className="w-8 sm:w-10 rounded-full" />
            <h1 className="font-black text-emerald-600 uppercase font-cardo text-sm sm:text-lg leading-4 hidden sm:block">
              Wundt Psychological Institute
            </h1>
          </div>

          {/* nav for big screen */}
          <nav className="hidden lg:flex gap-2 text-sm  ">
            {navContents.map((content, index) => (
              <Link
                to={`/${content.name === "home" ? "" : content.name}`}
                key={index}
                className="list-none relative group py-2 px-4 cursor-pointer"
              >
                <p className="group-hover:text-emerald-600 transition-all duration-500 capitalize">
                  {content.name}
                </p>
                <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}

            <Link className="bg-radial-[at_-50%_-50%] from-green-500 to-emerald-600 to-75% text-sm text-white  p-2 px-3 rounded ml-4 whitespace-nowrap">
              Get Appointment
            </Link>
          </nav>

          {/* button nav for small screen */}
          <div
            onClick={() => setDropDownOpen(!isDropDownOpen)}
            className=" flex lg:hidden justify-center items-center rounded active:scale-95 transition-all active:bg-slate-800/5"
          >
            <MdMenu className="text-3xl m-1" />
          </div>
        </div>

        {/* dropdown menu */}
        <div
          className={classNames(
            " text-center overflow-hidden text-sm transition-all duration-300 flex lg:hidden flex-col",
            {
              "max-h-0": !isDropDownOpen,
              "max-h-[50rem] mb-4": isDropDownOpen,
            }
          )}
        >
          {navContents.map((content, index) => (
            <Link
              key={index}
              to={`/${content.name === "home" ? "" : content.name}`}
              onClick={() => setDropDownOpen(!isDropDownOpen)}
              className="py-3 capitalize active:bg-slate-800/5 rounded active:scale-95 transition-all"
            >
              {content.name}
            </Link>
          ))}
          <Link
            to={"/appointment"}
            onClick={() => setDropDownOpen(!isDropDownOpen)}
            className="py-3 capitalize active:bg-slate-800/5 rounded  active:scale-95 transition-all text-emerald-600 w-fit mx-auto"
          >
            Get an Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
