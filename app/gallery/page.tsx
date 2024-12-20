"use client";
import React, { useState } from "react";
import { GalleryProps, GalleryLinks } from "./constants";

const GalleryPage = () => {
    const [image, setImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleImageModal = (img: string) => () => {
    setImage(img);
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-[3rem] font-medium font-montserrat mt-16">Gallery</h1>
        <div className="mt-8  lg:mx-40 mx-8 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {GalleryLinks.map((link) => {
            return (
              <div
                key={link.id}
                className="flex flex-col items-center"
                onClick={handleImageModal(link.img)}
              >
                <img
                  src={link.img}
                  alt={link.name}
                  className="h-auto mb-5 rounded-lg"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "flex flex-col items-center justify-center" : "hidden"
        } z-40 fixed top-0 left-0 w-full h-screen bg-black/90 pt-24`}
      >
        
        {image && <img
          src={image}
          alt={image}
          className="mb-5 rounded-lg object-contain h-[28rem] px-8"
        />}
        <div className="bg-red-600 text-white p-2 px-4 rounded-xl" onClick={() => setIsOpen(false)}>
          Close
        </div>
      </div>
    </>
  )
}

export default GalleryPage