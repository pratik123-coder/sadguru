"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import logo from "@/public/logo.png"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X } from 'lucide-react'

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

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Blue Section */}
      <div className="w-full bg-[#0D1B40] text-white py-3 h-14 flex items-center">
        <div className="container mx-auto flex justify-end space-x-6 px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-sm md:text-lg lg:text-2xl text-right"
          >
            Sadguru College of Nursing & Allied Medical Science
          </motion.div>
        </div>
      </div>

      {/* Yellow Section */}
      <div className="w-full bg-[#FCD700] py-3 h-14 flex items-center shadow-md">
        <div className="container mx-auto flex justify-end items-center px-4 lg:px-6">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center  space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="grid w-[500px] gap-3 p-4 md:w-[600px]  lg:w-[400px]"
                    >
                      {Object.entries(courses).map(([category, items]) => (
                        <div key={category} className="space-y-2">
                          <h4 className="font-medium leading-none text-black mb-2">{category}</h4>
                          <ul className="space-y-2">
                            {items.map((item) => (
                              <motion.li
                                key={item.name}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Link
                                  href={item.href}
                                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm text-muted-foreground"
                                >
                                  {item.name}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/gallery" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <motion.div
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link
                href="/admission"
                className="bg-white font-montserrat text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform inline-block"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
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
            className="lg:hidden bg-white shadow-md overflow-hidden"
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
        className="absolute top-0 left-4 lg:left-6"
      >
        <Link href="/">
          <Image
            src={logo}
            alt="Sadguru College Logo"
            className="h-20 w-auto lg:h-56 drop-shadow-lg"
            height={1000}
            width={1000}
          />
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Navbar

