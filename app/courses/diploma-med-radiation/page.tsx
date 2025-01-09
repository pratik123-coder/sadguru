import React from 'react';
import CoursePage from '@/components/course-page';

const DMRT = () => (
  <CoursePage
    title="Diploma in Medical Radiation Technology (DMRT)"
    heroImage="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/rzhl9dejj86wwgeqaoxj"
    description="Begin your journey into the advanced field of medical imaging with a Diploma in Medical Radiation Technology (DMRT) at Sadguru College of Nursing & Allied Medical Sciences, Jagatpur, Cuttack. This program equips you with essential skills in radiographic procedures, patient care, and radiation safety, preparing you for a fulfilling career in medical radiography and imaging technology."
    duration="2 Years"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board."
    location="Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, offers state-of-the-art facilities for hands-on training in medical radiation technology."
    whatIs={{
      title: "What is DMRT?",
      content: [
        "The Diploma in Medical Radiation Technology is a two-year program designed to prepare students for careers in the medical imaging field. At Sadguru College, we provide a comprehensive education that blends theoretical knowledge with practical training in advanced radiographic techniques. Key areas of the program include:",
        "• Proficiency in radiographic and imaging techniques.",
        "• Ensuring patient safety and comfort during procedures.",
        "• Understanding and applying radiation safety standards.",
        "The program also benefits from our association with Sadguru Hospitals, where students gain hands-on experience in real-world healthcare settings."
      ]
    }}
    benefits={{
      title: "Benefits of Pursuing DMRT",
      content: {
        description: "A Diploma in Medical Radiation Technology opens doors to various career opportunities in the healthcare sector:",
        points: [
          "High Demand: Skilled DMRT professionals are essential in hospitals, diagnostic centers, and medical research facilities.",
          "Diverse Opportunities: Work in radiology departments, imaging labs, or medical research teams.",
          "Job Stability: The healthcare sector offers steady employment with opportunities for advancement.",
          "Competitive Salaries: Enjoy attractive pay packages with plenty of room for career growth.",
          "Impactful Work: Play a crucial role in diagnosing and treating illnesses, directly contributing to patient care."
        ]
      }
    }}
  />
);

export default DMRT;
