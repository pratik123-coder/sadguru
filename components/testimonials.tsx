"use client";


import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  course: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rakesh",
    course: "DMRT",
    image: "@/public/windows.svg",
    quote:
      "Studying DMLT At Sadguru College Has Been A Game-Changer. The Comprehensive Curriculum, Supportive Professors, And Hands-On Lab Experience Have Prepared Me For A Successful Career In Medical Laboratory Technology.",
  },
  {
    id: 2,
    name: "Anjali",
    course: "BSc Nursing",
    image: "/placeholder.svg",
    quote:
      "The BSc Nursing Program At Sadguru College Has Equipped Me With The Knowledge And Skills Needed To Excel In The Healthcare Industry. The Faculty And Facilities Are Top-Notch.",
  },
  {
    id: 3,
    name: "Vikram",
    course: "Pharmacy",
    image: "/placeholder.svg",
    quote:
      "Sadguru College's Pharmacy Program Is Outstanding. The Curriculum Is Well-Structured, And The Practical Training Has Given Me The Confidence To Pursue A Career In Pharmacy.",
  },
  {
    id: 4,
    name: "Priya",
    course: "DMLT",
    image: "/placeholder.svg",
    quote:
      "The DMLT Program At Sadguru College Has Provided Me With In-Depth Knowledge And Practical Skills. The Faculty's Expertise And The State-Of-The-Art Labs Have Made My Learning Experience Exceptional.",
  },
  {
    id: 5,
    name: "Amit",
    course: "BPT",
    image: "/placeholder.svg",
    quote:
      "Sadguru College's BPT Program Is Comprehensive And Well-Structured. The Hands-On Training And Supportive Faculty Have Prepared Me For A Rewarding Career In Physiotherapy.",
  },
  {
    id: 6,
    name: "Sneha",
    course: "BSc Nursing",
    image: "/placeholder.svg",
    quote:
      "The BSc Nursing Program At Sadguru College Has Been An Incredible Journey. The Knowledge And Skills I've Gained Here Are Invaluable, And The Faculty's Support Has Been Unwavering.",
  },
  // Add more testimonials as needed
];

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block border-b-2 border-black pb-2">
            Testimonials
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-yellow-400 border-none h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-full overflow-hidden bg-black">
                      {/* <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        /> */}
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1155 1000"
                        className="w-10"
                      >
                        <path d="m577.3 0 577.4 1000H0z" fill="#fff" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm">{testimonial.course}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-600/30" />
                    <blockquote className="text-black/80 relative z-10 pl-6">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
