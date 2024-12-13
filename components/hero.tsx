import React from "react";
import Image from "next/image";
import Box from "./box";
import { MarqueeDemo } from "./marquee";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-cover bg-center h-screen flex flex-col justify-between p-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-background.jpg" // Replace with your background image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-white opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 lg:pt-20 text-center text-white w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Sadguru College of Nursing & Allied Medical Science
        </h1>
        <p className="text-lg md:text-xl">
          Committed to providing the best medical education and practical
          training.
        </p>
        <a
          href="#details"
          className="mt-6 inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          More Details
        </a>
      </div>

      {/* Grid Section */}
      <div className="w-full bg-white py-6">
        <MarqueeDemo />
      </div>
    </section>
  );
};

export default Hero;
