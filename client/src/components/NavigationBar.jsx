import React from "react";
import logo from "../assets/wundt_logo.jpg";

function NavigationBar() {
  return (
    <header className=" bg-white fixed top-0 left-0 right-0 z-20 shadow-card2 px-6 lg:px-12">
      <div className=" max-w-7xl mx-auto py-4 flex justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 rounded-full" />
          <h1 className="font-black text-emerald-600 uppercase font-cardo text-base sm:text-xl leading-6">
            Wundt Psychological Institute
          </h1>
        </div>

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
      </div>
    </header>
  );
}

export default NavigationBar;
