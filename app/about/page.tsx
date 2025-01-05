"use client";
import React, { useState, useEffect } from "react";
import { MessageBoxProps, MessageBoxDetails } from "./constants";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselArrow } from "@/components/carousel-arrow";

const MessageBox = ({ img, description, desgn, name, id }: MessageBoxProps) => {
  return (
    <CarouselItem className="w-full">
      <motion.div
        key={id}
        className="bg-[#0D1B40] rounded-2xl lg:p-8 text-white w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center lg:items-start space-y-8 mb-8 p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full flex lg:flex-row flex-col lg:items-end lg:space-x-8 space-x-0 lg:space-y-0 space-y-4"
          >
            <Image
              src={img}
              alt={name}
              width={1000}
              height={1000}
              className="w-[400px] h-[400px] object-cover rounded-2xl object-top"
            />
            <div className="flex flex-col font-serif text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl mb-2">{name}</h1>
              <h2 className="text-xl lg:text-2xl mb-4">{desgn}</h2>
            </div>
          </motion.div>
          <motion.div
            className="font-montserrat text-center lg:text-left max-lg:overflow-scroll lg:h-auto h-96"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="relative p-4"
            >
              <p
                className="leading-relaxed tracking-wide text-justify"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div> */}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </CarouselItem>
  );
};

const AboutUsPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-12">
      <div className="space-y-12 lg:mx-16 mx-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-black pb-2">
            Messages
          </h2>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {MessageBoxDetails.map((props, index) => (
                <MessageBox key={index} {...props} />
              ))}
            </CarouselContent>
            <CarouselArrow direction="left" onClick={() => api?.scrollPrev()} />
            <CarouselArrow
              direction="right"
              onClick={() => api?.scrollNext()}
            />
          </Carousel>
        </div>

        <div className="text-center">
          <span className="text-sm font-medium">
            {current} / {count}
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;

// const MessageBox = ({ img, description, desgn, name, id }: MessageBoxProps) => {
//   return (
//     <motion.div
//       key={id}
//       className="bg-[#0D1B40] rounded-2xl p-8 text-white"
//       initial={{ opacity: 0, y: 50 }} // Starts invisible and moves up
//       animate={{ opacity: 1, y: 0 }} // Fades in and reaches original position
//       transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
//     >
//       <div className="flex lg:flex-row flex-col lg:items-end items-center lg:space-x-8 mb-8 w-full">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }} // Image starts smaller and fades in
//           animate={{ scale: 1, opacity: 1 }} // Scales back to original size
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           <Image
//             src={img}
//             alt="Principal"
//             width={1000}
//             height={1000}
//             className="w-[400px] h-[400px] object-cover rounded-2xl object-top"
//           />
//         </motion.div>
//         <motion.div
//           className="font-semibold font-serif lg:text-left text-center lg:mt-0 mt-4"
//           initial={{ opacity: 0, x: -50 }} // Starts to the left and fades in
//           animate={{ opacity: 1, x: 0 }} // Animates to original position
//           transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
//         >
//           <h1 className="text-[2rem]">{name}</h1>
//           <h2 className="text-[1.3rem]">{desgn}</h2>
//         </motion.div>
//       </div>
//       <motion.div
//         initial={{ opacity: 0 }} // Starts invisible
//         animate={{ opacity: 1 }} // Fades in
//         transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
//       >
//         <p
//           className="leading-relaxed tracking-wide text-justify"
//           dangerouslySetInnerHTML={{ __html: description }}
//         ></p>
//       </motion.div>
//     </motion.div>
//   );
// };
