'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { courseEntry } from "@/action/course.action"
import toast from "react-hot-toast"
import { useState } from "react"


interface CoursePageProps {
  title: string
  heroImage: string
  description: string
  duration: string
  qualification: string
  location: string
  whatIs: {
    title: string
    content: string[]
  }
  benefits: {
    title: string
    content: {
      description: string
      points: string[]
    }
  }
}

export default function CoursePage({
  title,
  heroImage,
  description,
  duration,
  qualification,
  location,
  whatIs,
  benefits,
}: CoursePageProps) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const values = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      course: title,
    };

    const result = await courseEntry(values);
    setSubmitting(true);
    if (result.success) {
      toast.success("Entry created successfully!");
      form.reset();
      setSubmitting(false);
    } else {
      toast.error("Failed to create entry.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div className="relative h-full w-full">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center px-4 max-w-3xl">
            {title}
          </h1>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a2649] text-white rounded-lg p-8 mb-8"
        >
          <p className="text-lg mb-6">{description}</p>
          <div className="space-y-2 text-sm">
            <p>Duration: {duration}</p>
            <p>Qualification: {qualification}</p>
            <p className="text-sm leading-relaxed">{location}</p>
          </div>
        </motion.div>

        {/* What Is Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">{whatIs.title}</h2>
          <div className="space-y-4">
            {whatIs.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a2649] text-white rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">{benefits.title}</h2>
          <p className="text-white mb-4">{benefits.content.description}</p>
          <ul className="list-disc pl-5 space-y-2 text-white">
            {benefits.content.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Get Course Details</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
