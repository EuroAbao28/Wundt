import React from "react";
import { TbPhone, TbMail, TbMapPin, TbBrandFacebook } from "react-icons/tb";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-jungle to-therapy-blue  text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About Wundt</h3>
            <p className="text-sm text-white/90 sm:pr-14">
              Providing professional psychological services with compassion and
              expertise since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/90 hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/90 hover:text-white hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/90 hover:text-white hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-white/90 hover:text-white hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm text-white/90 hover:text-white hover:underline">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-3 text-sm text-white/90">
              <div className="flex items-center">
                <TbPhone className="mr-2" />
                <span>0939-902-6188</span>
              </div>
              <div className="flex items-center">
                <TbPhone className="mr-2" />
                <span>0955-896-7345</span>
              </div>
              <div className="flex items-center">
                <TbPhone className="mr-2" />
                <span>0969-265-3903</span>
              </div>
              <div className="flex items-center">
                <TbMail className="mr-2" />
                <span>wundt_inst@yahoo.com.ph</span>
              </div>
              <div className="flex items-center">
                <TbBrandFacebook className="mr-2" />
                <span>Wundt Psychological Institute</span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Our Locations</h3>
            <div className="flex items-center">
              <TbMapPin className="mr-2" />
              <span className="text-sm text-white/90">Dagupan</span>
            </div>

            <div className="flex items-center">
              <TbMapPin className="mr-2" />
              <span className="text-sm text-white/90">Vigan</span>
            </div>

            <div className="flex items-center">
              <TbMapPin className="mr-2" />
              <span className="text-sm text-white/90">Urdaneta</span>
            </div>

            <div className="flex items-center">
              <TbMapPin className="mr-2" />
              <span className="text-sm text-white/90">Mangaldan</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/80">
          <p>
            © {new Date().getFullYear()} Wundt Psychological Institute. All
            Rights Reserved.
          </p>
          <p className="mt-2 text-xs">
            PRC-certified psychologists providing evidence-based therapies
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
