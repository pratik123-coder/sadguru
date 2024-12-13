import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Blue Section */}
      <div className="w-full bg-[#0D1B40] text-white py-3 h-14 flex items-center ">
        <div className="container mx-auto flex justify-end space-x-6 px-6">
          <div className="font-serif text-2xl">
            Sadguru College of Nursing & Allied Medical Science
          </div>
        </div>
      </div>

      {/* Yellow Section */}
      <div className="w-full bg-[#FCD700] py-3 h-14 flex items-center shadow-md">
        <div className="container mx-auto flex justify-end items-center px-6">
          <ul className="flex space-x-6 text-md font-semibold">
            <li>
              <Link href="#courses" className="font-montserrat text-black hover:text-blue-600 transition-colors duration-300 transform ">
                Courses
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="font-montserrat text-black hover:text-blue-600 transition-colors duration-300 transform ">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#about-us" className="font-montserrat text-black hover:text-blue-600 transition-colors duration-300 transform ">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#contact" className="font-montserrat text-black hover:text-blue-600 transition-colors duration-300 transform ">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#apply-now"
                className="bg-white font-montserrat text-black px-4 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform "
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo Section */}
      <div className="absolute top-0 left-6">
        <Image
          src={logo}
          alt="Sadguru College Logo"
          className="h-56 w-auto drop-shadow-lg"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
};

export default Navbar;
