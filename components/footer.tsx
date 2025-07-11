'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { usePathname } from "next/navigation"

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
    { name: "General Nursing And Midwifery (GNM)", href: "/courses/general-nursing" },
    { name: "B.Sc. Nursing", href: "/courses/nursing" },
    { name: "Post Basic B.Sc Nursing", href: "/courses/post-basic-nursing"},
    // { name: "B.Sc. Anesthesia Technology (BAT)", href: "/courses/anesthesia" },
    { name: "Bachelor in Medical Laboratory Technology (BMLT)", href: "/courses/medical-lab" },
    { name: "Bachelor in Medical Radiation Technology (BMRT)", href: "/courses/medical-radiation" },
    // { name: "B.Sc. Operation Theatre Technology (BOTT)", href: "/courses/ot" },
    { name: "Diploma in Medical Labratory Technology (DMLT)", href: "/courses/diploma-med-lab" },
    { name: "Diploma in Medical Radiation Technology (DMRT)", href: "/courses/diploma-med-radiation" },
    { name: "Diploma in Medical Radiation Therapy Technology (DRTT)", href: "/courses/diploma-med-rad-theryapy" },
    // { name: "Certified Cath Lab Technician (CCLT)", href: "/courses/certified-cath-lab-technician" },
    { name: "Certified Dialysis Technician (CDT)", href: "/courses/certified-dialysis-technician" },
    { name: "Certified OT Technician (COTT)", href: "/courses/certified-ot-technician" },
    // { name: "Certified Ward Technician (CWT)", href: "/courses/certified-ward-technician" },
    // { name: "Certified ECG Technician (CECGT)", href: "/courses/ecg-technician" },
  ]

const quickLinks = [
  { name: "Admission", href: "/admission" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" }
]

export function Footer() {
  const path = usePathname();
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
              <p>Khairapola, Immamnagar, Jagatpur</p>
              <p>Cuttack, Odisha - 754021</p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/12GTSswq12n/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/sadgurumedicalcollege?igsh=NHJtanJxaTFjcjZk" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/sadguru-college-of-nursing-allied-medical-sciences/?viewAsMember=true" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Courses</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {courses.map((course) => (
                <li key={course.name}>
                    <Link href={course.href} className={`hover:text-white transition-colors ${path === course.href ? 'text-yellow-500' : ''}`}>
                    {course.name}
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
                <a href="tel:+917381000504" className="hover:text-white transition-colors">
                  +91 7381000504
                </a>
              </li>
              <li>
                <a href="tel:+917381000505" className="hover:text-white transition-colors">
                  +91 7381000505
                </a>
              </li>
              <li>
                <a href="mailto:sadguruhet2013@gmail.com" className="hover:text-white transition-colors">
                  sadguruhet2013@gmail.com
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
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sadguru College of Nursing & Allied Medical Science. All Rights Reserved.
            </p>
            
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

