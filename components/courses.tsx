"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { courses } from "@/lib/static-data"

import { useState, useEffect } from "react"
import { CarouselArrow } from "./carousel-arrow"
import lab1 from "@/public/lab.jpg"
import lab2 from "@/public/lab2.jpg"

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
              {courses.map((course) => (
                <CarouselItem key={course.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="border-none">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/4] w-full h-96 rounded-xl overflow-hidden">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-medium p-4 text-sm">
                        {course.title}
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
          <Card className="bg-[#1a237e] text-white border-none">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold">
                    Collaboration with Sadguru Hospital
                  </h3>
                  <p className="text-white/90 text-xl">
                    Sadguru College of Nursing and Allied Medical Sciences, in
                    collaboration with Sadguru Hospital, offers a unique
                    opportunity for students to excel in their healthcare
                    careers. Our partnership ensures that students not only
                    receive top-notch theoretical education but also gain
                    invaluable practical training within our state-of-the-art
                    hospital facilities. This hands-on experience equips our
                    students with the skills and confidence needed to become
                    trusted professionals in the healthcare sector. Furthermore,
                    our strong industry connections facilitate placement
                    opportunities, ensuring a bright and successful future for
                    all our graduates. Join us to embark on a fulfilling and
                    rewarding journey in the world of healthcare.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={lab1}
                      alt="Sadguru Hospital Building"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={lab2}
                      alt="Sadguru Hospital Facilities"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

