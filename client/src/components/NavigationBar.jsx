import React, { useEffect, useState } from "react";
import logo from "../assets/wundt_logo.png";
import { MdMenu } from "react-icons/md";
import classNames from "classnames";
import { Link, useLocation } from "react-router";
import { TbArrowRight, TbMenu2, TbX } from "react-icons/tb";

const NAV_CONTENTS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
];

function NavigationBar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [showNav, setShowNav] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        setShowNav(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowNav(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (isMobileNavOpen) return setIsMobileNavOpen(false);
  }, [pathname]);

  return (
    <nav
      className={classNames(
        "top-0 left-0 right-0 z-40 transition-transform duration-300 bg-white shadow",
        {
          "translate-y-0": showNav || pathname !== "/", // show
          "-translate-y-full": !showNav, // hide
          fixed: pathname === "/",
          sticky: pathname !== "/",
        }
      )}>
      <div className="max-w-7xl mx-auto flex flex-wrap gap-y-4 items-center justify-between px-6 lg:px-8 py-5">
        <Link to="/" className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-7 sm:w-9 aspect-square" />
          <span className="font-bold text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-jungle to-therapy-blue/80 ">
            Wundt Institute
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex items-center max-lg:justify-center gap-4 max-lg:w-full">
          {NAV_CONTENTS.map((content, index) => (
            <Link key={index} to={content.path}>
              <p
                className={classNames(
                  "text-base font-medium text-gray-600 px-4 py-2 hover:text-jungle relative",
                  {
                    "text-jungle": content.path === pathname,
                  }
                )}>
                {content.name}

                {content.path === pathname && (
                  <span className="absolute h-0.5 bg-gradient-to-r from-jungle to-therapy-blue/80 left-0 right-0 bottom-1 w-[60%] mx-auto"></span>
                )}
              </p>
            </Link>
          ))}

          <Link
            to="/appointment"
            className="text-sm sm:text-base ml-4 rounded-lg bg-gradient-to-r from-jungle to-jungle/80 px-5 py-2 hover:brightness-105 transition-all text-white font-medium whitespace-nowrap">
            Get Appointment
          </Link>
        </div>

        {/* mobile nav button */}
        <div
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
          className="block md:hidden text-2xl p-2 rounded-lg active:bg-gray-100 transition-all cursor-pointer -mr-3">
          {isMobileNavOpen ? <TbX /> : <TbMenu2 />}
        </div>
      </div>

      {/* mobile nav dropdown */}
      <div
        className={classNames(
          "absolute left-0 right-0 flex md:hidden bg-white flex-col  transition-all overflow-hidden shadow",
          {
            "max-h-96": isMobileNavOpen,
            "max-h-0": !isMobileNavOpen,
          }
        )}>
        {NAV_CONTENTS.map((content, index) => (
          <Link
            key={index}
            to={content.path}
            className={classNames(
              "text-sm sm:text-base p-2 px-6 text-center active:scale-95 transition-all active:bg-gray-50",
              {
                "bg-gray-50 text-jungle": content.path === pathname,
              }
            )}>
            {content.name}
          </Link>
        ))}

        <Link
          to="/appointment"
          className="mx-6 flex items-center justify-center text-sm sm:text-base gap-3 rounded-lg bg-gradient-to-r from-jungle to-therapy-blue py-3 hover:shadow-lg hover:brightness-105 transition-all max-sm:flex-1 text-white font-medium mt-2 mb-4">
          Get Appointment <TbArrowRight />
        </Link>
      </div>
    </nav>

    // <div className="py-4 bg-red-400 sticky top-0 left-0 right-0 z-40">
    //   tanga ka ba
    // </div>
  );
}

export default NavigationBar;
