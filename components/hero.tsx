"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import heroImg from "@/public/hero.jpg";
import { CoursesSection } from "./courses";


const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full"
    >
      {/* Main hero container with rounded corners */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative h-[700px] rounded-xl overflow-hidden mx-4 my-4 border-2 border-gray-200"
      >
        <Image
          src={heroImg}
          alt="Medical professional"
          fill
          className="object-cover brightness-110"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="absolute lg:bottom-20 lg:right-20 bottom-0 max-w-md bg-[#0D1B40] text-white p-8 py-12 rounded-lg space-y-4 shadow-2xl shadow-white/10"
        >
          <h1 className="text-2xl font-bold mb-4 font-montserrat">
            Sadguru College of Nursing & Allied Medical Science
          </h1>
          <a href="/about">
          <Button 
            variant="outline" 
            className="text-black border-white hover:bg-white/10 hover:text-white font-semibold"
          >
            More Details
          </Button>
          </a>
        </motion.div>
      </motion.div>
      
      <CoursesSection />
      {/* Four cards below hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.4,
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 -mt-4 pt-6"
      >
        {[
          {title:"Best Medical Courses",image:"https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/tzm9g1hxoswrlm4v6oh1"},
          {title:"Placement Assistance",image:"https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/oyy68fplqyjq4jafnhd8"},
          {title:"Practical Training",image:"https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/kqwvjqkzitporajtd2md"},
          {title:"Mentorship & Guidance",image:"https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/k1jfsikrtvol1galeold"}
        ].map(({title, image}) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative h-48 rounded-xl overflow-hidden"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold text-center px-4">
                {title}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
