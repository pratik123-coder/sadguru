"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/logo.png";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const path = usePathname();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Blue Section */}
      <div className="w-full bg-[#0D1B40] text-white py-3 h-14 flex items-center">
        <div className="container mx-auto flex justify-end space-x-6 px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-2xl"
          >
            Sadguru College of Nursing & Allied Medical Science
          </motion.div>
        </div>
      </div>

      {/* Yellow Section */}
      <div className="w-full bg-[#FCD700] py-3 h-14 flex items-center shadow-md">
        <div className="container mx-auto flex justify-end items-center px-6">
          <ul className="flex space-x-6 text-md font-semibold">
            {[
              { name: "Courses", href: "/courses" },
              { name: "Gallery", href: "/gallery" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="transition-transform duration-300"
              >
                <Link
                  href={item.href}
                  className="font-montserrat text-black hover:text-blue-600 transition-colors duration-300 transform px-3 py-2"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="transition-transform duration-300"
            >
              <Link
                href="/admission"
                className="bg-white font-montserrat text-black px-4 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform"
              >
                Apply Now
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute top-0 left-6"
      >
        <Link href="/">
        <Image
          src={logo}
          alt="Sadguru College Logo"
          className="h-56 w-auto drop-shadow-lg"
          height={1000}
          width={1000}
        />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
