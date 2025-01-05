'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/logo.png";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen,] = useState(false)

  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const courses = {
    "Nursing Program": [
      { name: "General Nursing", href: "/courses/general-nursing" }
    ],
    "Bachelor of Science Programs": [
      { name: "B.Sc. Nursing", href: "/courses/nursing" },
      { name: "B.Sc. Anesthesia", href: "/courses/anesthesia" },
      { name: "B.Sc. Medical Laboratory Technology", href: "/courses/medical-lab" },
      { name: "B.Sc. Medical Radiation Technology", href: "/courses/medical-radiation" },
      { name: "B.Sc. Operation Theatre Technology", href: "/courses/ot" },
    ],
    "Diploma Programs": [
      { name: "Diploma in Medical Lab", href: "/courses/diploma-med-lab" },
      { name: "Diploma in Medical Radiation", href: "/courses/diploma-med-radiation" },
      { name: "Diploma in Medical Radiation Therapy", href: "/courses/diploma-med-rad-theryapy" },
    ],
    "Certification Programs": [
      { name: "Certified Cath Lab Technician", href: "/courses/certified-cath-lab-technician" },
      { name: "Certified Dialysis Technician", href: "/courses/certified-dialysis-technician" },
      { name: "Certified OT Technician", href: "/courses/certified-ot-technician" },
      { name: "Certified Ward Technician", href: "/courses/certified-ward-technician" },
      { name: "Certified ECG Technician", href: "/courses/ecg-technician" },
    ],
  }

  const menuItems = [
    {
      name: "Courses",
      href: "#",
      dropdownItems: Object.entries(courses).map(([category, items]) => ({
        category,
        items: items.map(item => item.name)
      }))
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];


  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Blue Section */}
      <div className="w-full bg-[#0D1B40] text-white py-3 flex items-center">
        <div className="container mx-auto flex justify-end px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-sm md:text-2xl lg:text-center text-right w-2/3 lg:w-auto text-wrap"
          >
            Sadguru College of Nursing & Allied Medical Science
          </motion.div>
        </div>
      </div>

      {/* Yellow Section */}
      <div className="w-full bg-[#FCD700] py-3 h-14 flex items-center shadow-md">
        <div className="container mx-auto flex justify-end items-center px-6">
          {!isMobile && (
            <ul className="hidden md:flex space-x-6 text-md font-semibold items-center">
              {menuItems.map((item) => (
                <NavItem 
                  key={item.name} 
                  item={item} 
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}
              <NavItem
                item={{ name: "Apply Now", href: "/admission" }}
                className="bg-white text-black px-4 py-2 rounded-full hover:bg-black hover:text-white"
              />
            </ul>
          )}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block py-2 text-black hover:text-gray-600">
                About Us
              </Link>
              <div className="space-y-2">
                <h4 className="font-medium text-black">Courses</h4>
                {Object.entries(courses).map(([category, items]) => (
                  <div key={category} className="pl-4 space-y-2">
                    <h5 className="font-medium text-sm text-gray-600">{category}</h5>
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-sm text-black hover:text-gray-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <Link href="/gallery" className="block py-2 text-black hover:text-gray-600">
                Gallery
              </Link>
              <Link href="/contact" className="block py-2 text-black hover:text-gray-600">
                Contact Us
              </Link>
              <Link
                href="/admission"
                className="inline-block bg-[#FCD700] text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute top-0 lg:left-6 left-0"
      >
        <Link href="/">
          <Image
            src={logo}
            alt="Sadguru College Logo"
            className="h-40 md:h-56 w-auto drop-shadow-lg"
            height={1000}
            width={1000}
          />
        </Link>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isOpen && <MobileMenu items={menuItems} toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </motion.div>
  );
};

const NavItem: React.FC<{ 
  item: { 
    name: string; 
    href: string; 
    dropdownItems?: { category: string; items: string[] }[] 
  }, 
  className?: string,
  activeDropdown?: string | null,
  setActiveDropdown?: (name: string | null) => void
}> = ({ item, className, activeDropdown, setActiveDropdown }) => {
  const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;

  return (
    <motion.li
      className="relative"
      onHoverStart={() => setActiveDropdown && setActiveDropdown(item.name)}
      onHoverEnd={() => setActiveDropdown && setActiveDropdown(null)}
    >
      <Link
        href={item.href}
        className={`font-montserrat text-black transition-colors duration-300 transform px-3 py-2 flex items-center ${className}`}
      >
        {item.name}
        {hasDropdown && <ChevronDown size={16} className="ml-1" />}
      </Link>
      {hasDropdown && (
        <AnimatePresence>
          {activeDropdown === item.name && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: -400 }}
              animate={{ opacity: 1, y: 0, x: -400 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-max bg-white shadow-lg rounded-md overflow-hidden z-50"
            >
              <div className="flex p-4 space-x-8">
                {item.dropdownItems && item.dropdownItems.map((category, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="font-semibold mb-2">{category.category}</h3>
                    <ul>
                      {category.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="mb-1">
                          <Link
                            href={`/courses/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm hover:text-blue-600 transition-colors duration-300"
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.li>
  );
};

const MobileMenu: React.FC<{ 
  items: { 
    name: string; 
    href: string; 
    dropdownItems?: { category: string; items: string[] }[] 
  }[], 
  toggleMenu: () => void 
}> = ({ items, toggleMenu }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-30 right-0 h-screen w-64 bg-white shadow-lg z-50 overflow-y-scroll"
    >
      <ul className="flex flex-col p-6">
        {items.map((item) => (
          <motion.li key={item.name} className="mb-4">
            {item.dropdownItems ? (
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  className="font-montserrat text-black hover:text-blue-600 transition-colors duration-300 flex items-center justify-between w-full"
                >
                  {item.name}
                  <ChevronDown size={16} className={`transform transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4"
                    >
                      {item.dropdownItems.map((category, index) => (
                        <div key={index} className="mb-2">
                          <h4 className="font-semibold mb-1">{category.category}</h4>
                          <ul className="ml-2">
                            {category.items.map((subItem, subIndex) => (
                              <li key={subIndex} className="mb-1">
                                <Link
                                  href={`/courses/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="text-sm hover:text-blue-600 transition-colors duration-300"
                                  onClick={toggleMenu}
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={item.href}
                className="font-montserrat text-black hover:text-blue-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            )}
          </motion.li>
        ))}
        <motion.li
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/admission"
            className="font-montserrat text-black hover:text-blue-600 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Apply Now
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  )
}

export default Navbar;

