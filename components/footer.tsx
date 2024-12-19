'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const courses = [
  "General Nursing and Midwifery (GNM)",
  "B.Sc Medical Laboratory Technology(BMLT)",
  "B.Sc Medical Imaging Technology(BMIT)",
  "B.Sc Operation Theatre Technology(BOTT)",
  "B.Sc Anesthesia",
  "Diploma in Medical Laboratory Technology(DMLT)",
  "Diploma in Medical Radiation Technology(DMRT)",
  "Diploma in Operation Theatre Technology",
  "Certified ECG Lab",
  "Certified OT Technician(COT)",
  "Certified Medical Lab Technician(CMLT)",
  "Certified CT Technician(CCT)",
  "Certified X-Ray Technician(CXT)",
  "Certified Blood Technician(CBT)",
  "Nursing"
]

const quickLinks = [
  { name: "Admission", href: "/admission" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" }
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* College Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Sadguru College<br />
              of Nursing &<br />
              Allied Medical<br />
              Science
            </h2>
            <div className="text-gray-400 space-y-2">
              <p>Sadguru Hospital</p>
              <p>Campus, Jagatpur,</p>
              <p>Cuttack, Odisha - 754021</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Courses</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {courses.map((course) => (
                <li key={course}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+917328000505" className="hover:text-white transition-colors">
                  +91 7328000505
                </a>
              </li>
              <li>
                <a href="tel:+917328000505" className="hover:text-white transition-colors">
                  +91 7328000505
                </a>
              </li>
              <li>
                <a href="mailto:sadguruhc2013@gmail.com" className="hover:text-white transition-colors">
                  sadguruhc2013@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* All Rights Reserved Section */}
      <motion.div 
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sadguru College of Nursing & Allied Medical Science. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors mr-4">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

