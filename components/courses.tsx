"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import { CarouselArrow } from "./carousel-arrow"
import lab1 from "@/public/lab.jpg"

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

export function CoursesSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [, setCurrent] = useState(0)
  const [, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const allCourses = Object.values(courses).flat()

  return (
    <section className="py-12 w-full">
      <div className="space-y-12">
        {/* Courses Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-black pb-2">
            Courses
          </h2>
        </div>

        {/* Courses Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allCourses.map((course) => (
                <CarouselItem key={course.name} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="border-none">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/4] w-full h-96 rounded-xl overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=400&width=300&text=${encodeURIComponent(course.name)}`}
                          alt={course.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-medium p-4 text-sm">
                        {course.name}
                      </h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselArrow direction="left" onClick={() => api?.scrollPrev()} />
            <CarouselArrow direction="right" onClick={() => api?.scrollNext()} />
          </Carousel>
        </div>

        {/* Collaboration Section */}
        <div className="px-4 md:px-6">
          <Card className="bg-[#121855] text-white border-none">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="relative h-full rounded-xl overflow-hidden">
                    <Image
                      src={lab1}
                      alt="Sadguru Hospital Building"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
                    Collaboration with Sadguru Hospital
                  </h3>
                  <p className="text-white/90 md:text-lg lg:text-xl">
                    Sadguru College of Nursing and Allied Medical Sciences collaborates closely with Sadguru Hospitals, a multi-specialty healthcare facility under Sadguru Medical & Research Centre Pvt. Ltd., to provide exceptional learning opportunities for students. Recognized by the H & FW Department, Government of Odisha, and approved by DMET, the college ensures students receive both quality education and practical training.
                  </p>
                  <ul className="list-disc list-inside text-white/90 text-lg mt-4 space-y-2">
                    <li>
                      <strong>Live Practical Training:</strong> Students practice in real hospital settings at Sadguru Hospital, gaining valuable hands-on experience.
                    </li>
                    <li>
                      <strong>Modern Facilities:</strong> Access to advanced medical equipment helps students learn with the latest tools and technologies.
                    </li>
                    <li>
                      <strong>Balanced Learning:</strong> Students combine theoretical knowledge with practical experience for a well-rounded education.
                    </li>
                    <li>
                      <strong>Bright Career Prospects:</strong> Training at the hospital opens doors to excellent job opportunities in the healthcare field.
                    </li>
                  </ul>
                  <p className="text-white/90 md:text-lg lg:text-xl mt-4">
                    This collaboration ensures students are well-prepared to succeed in their careers and make a meaningful difference in the healthcare industry.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

