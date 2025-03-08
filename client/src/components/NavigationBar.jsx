import React, { useState } from "react";
import logo from "../assets/wundt_logo.jpg";
import { MdMenu } from "react-icons/md";
import classNames from "classnames";

function NavigationBar() {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  return (
    <header className=" bg-white fixed top-0 left-0 right-0 z-20 shadow-card2 px-4 sm:px-6 lg:px-12">
      <div className=" max-w-7xl mx-auto ">
        <div className="py-2 sm:py-4 flex justify-between ">
          {/* logo */}
          <div className=" flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 rounded-full" />
            <h1 className="font-black text-emerald-600 uppercase font-cardo text-sm sm:text-xl leading-4 hidden sm:block">
              Wundt Psychological Institute
            </h1>
          </div>

          {/* nav for big screen */}
          <nav className="hidden lg:flex gap-2 text-sm ">
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                Home
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                Services
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                About
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                Gallery
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                News
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
            <li className="list-none relative group py-2 px-4 cursor-pointer">
              <p className="group-hover:text-emerald-600 transition-all duration-500">
                Contact
              </p>
              <span className="absolute left-0 bottom-0 right-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 transition-all duration-500 bg-emerald-600 rounded-full"></span>
            </li>
          </nav>

          {/* nav for small screen */}
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
              "max-h-96 mb-4": isDropDownOpen,
            }
          )}
        >
          <div className="py-3">Home</div>
          <div className="py-3">Services</div>
          <div className="py-3">About</div>
          <div className="py-3">Gallery</div>
          <div className="py-3">News</div>
          <div className="py-3">Contact</div>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
