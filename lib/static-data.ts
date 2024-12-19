import course from "@/public/course.png"
export interface Course {
  id: string
  title: string
  image: string
  description: string
}

export const courses: Course[] = Array.from({ length: 8 }, (_, i) => ({
  id: `course-${i + 1}`,
  title: "B. Sc. Medical Radiation (BMRT) Technology",
  image: course,
  description: "Comprehensive program in medical radiation technology and imaging sciences."
}))

