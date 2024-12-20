"use client";
import React from "react";
import { MessageBoxProps, MessageBoxDetails } from "./constants";
import Image from "next/image";
import { motion } from "framer-motion";

const MessageBox = ({ img, description, desgn, name, id }: MessageBoxProps) => {
  return (
    <motion.div
      key={id}
      className="bg-[#0D1B40] rounded-2xl p-8"
      initial={{ opacity: 0, y: 50 }} // Starts invisible and moves up
      animate={{ opacity: 1, y: 0 }} // Fades in and reaches original position
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
    >
      <div className="flex lg:flex-row flex-col lg:items-end items-center lg:space-x-8 mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} // Image starts smaller and fades in
          animate={{ scale: 1, opacity: 1 }} // Scales back to original size
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={img}
            alt="Principal"
            width={1000}
            height={1000}
            className="w-[400px] h-[400px] object-cover rounded-2xl object-top"
          />
        </motion.div>
        <motion.div
          className="font-semibold font-serif lg:text-left text-center lg:mt-0 mt-4"
          initial={{ opacity: 0, x: -50 }} // Starts to the left and fades in
          animate={{ opacity: 1, x: 0 }} // Animates to original position
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-[2rem]">{name}</h1>
          <h2 className="text-[1.3rem]">{desgn}</h2>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }} // Starts invisible
        animate={{ opacity: 1 }} // Fades in
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        <p
          className="leading-relaxed tracking-wide text-justify"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </motion.div>
    </motion.div>
  );
};

const AboutUsPage = () => {
  return (
    <motion.div
      className="bg-white flex flex-col pt-16 items-center lg:px-16 px-4 space-y-8 mb-32 text-white"
      initial={{ opacity: 0 }} // Page starts invisible
      animate={{ opacity: 1 }} // Fades in
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h1
        className="text-black font-semibold text-[2rem]"
        initial={{ opacity: 0, y: -20 }} // Header starts above and fades in
        animate={{ opacity: 1, y: 0 }} // Moves to original position
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Message
      </motion.h1>
      <div className="flex flex-col space-y-8">
        {MessageBoxDetails.map((props, index) => (
          <MessageBox key={index} {...props} />
        ))}
      </div>
    </motion.div>
  );
};

export default AboutUsPage;
