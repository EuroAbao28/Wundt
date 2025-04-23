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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMobileNavOpen(false); // Close mobile menu on route change

    if (location.pathname === "/") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      // Check initial scroll position
      handleScroll();

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  // On home page: hide until scrolled, fixed positioning
  // On other pages: always visible, sticky positioning
  const isHome = location.pathname === "/";
  const shouldShow = !isHome || isScrolled;

  return (
    <nav
      className={classNames(
        "top-0 left-0 right-0 z-40 transition-transform duration-300 bg-white shadow",
        {
          fixed: isHome,
          sticky: !isHome,
          "translate-y-0": shouldShow,
          "-translate-y-full": isHome && !isScrolled,
        }
      )}>
      {/* Rest of your navigation content remains the same */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        <div className="font-bold text-xl">Wundt Institute</div>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_CONTENTS.map((content, index) => (
            <Link key={index} to={content.path}>
              <p className="text-base font-medium">{content.name}</p>
            </Link>
          ))}
        </div>

        {/* mobile nav button */}
        <div
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
          className="block md:hidden text-xl p-2 rounded-lg active:bg-gray-50 transition-all cursor-pointer">
          {isMobileNavOpen ? <TbX /> : <TbMenu2 />}
        </div>
      </div>

      {/* mobile nav dropdown */}
      <div
        className={classNames(
          "absolute left-0 right-0 flex md:hidden bg-white flex-col transition-all overflow-hidden",
          {
            "max-h-96": isMobileNavOpen,
            "max-h-0": !isMobileNavOpen,
          }
        )}>
        {NAV_CONTENTS.map((content, index) => (
          <Link key={index} to={content.path} className="p-2 px-6 text-center">
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
  );
}

export default NavigationBar;
