"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import heroImg from "@/public/hero.png"
import placeholder from "@/public/hero-place.png"

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
        {/* Hero image with overlay */}
        <Image
          src={heroImg}
          alt="Medical professional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-12 right-12 max-w-md bg-[#1a237e] text-white p-8 rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-4">
            Sadguru College of Nursing & Allied Medical Science
          </h1>
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white/10"
          >
            More Details
          </Button>
        </motion.div>
      </motion.div>

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
          "Best Medical Courses",
          "Job Placements",
          "Practical Training",
          "Sadguru Hospital",
        ].map((title) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative h-48 rounded-xl overflow-hidden"
          >
            <Image
              src={placeholder}
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
