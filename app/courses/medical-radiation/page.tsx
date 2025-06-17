import React from 'react';
import CoursePage from '@/components/course-page';

const BMRT = () => (
  <CoursePage
    title="Bachelor in Medical Radiation Technology (BMRT)"
    heroImage="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/oyy68fplqyjq4jafnhd8"
    description="Are you looking for the best place to pursue a Bachelor in Medical Radiation Technology (BMRT) in Jagatpur, Cuttack, or across Odisha? Sadguru College of Nursing & Allied Medical Sciences is your destination for high-quality education in healthcare. With experienced faculty, modern facilities, and practical training, we prepare students for successful careers in medical imaging and radiation technology."
    duration="3 Years"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board with a minimum of 50% marks (45% for PH, 40% for SC/ST)."
    location="Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, offers a comprehensive BMRT program with access to modern imaging equipment and clinical training facilities."
    whatIs={{
      title: "What is Bachelor in Medical Radiation Technology?",
      content: [
        "A Bachelor in Medical Radiation Technology (BMRT) is a three-year undergraduate program that equips students with the skills to work with advanced medical imaging equipment and contribute to diagnosing and treating various medical conditions.",
        "Students gain expertise in:",
        "• Operating X-ray, CT scan, MRI, and other imaging equipment",
        "• Radiation therapy techniques",
        "• Safety protocols and quality control",
        "• Supporting accurate diagnoses and treatments",
        "At Sadguru College, the BMRT curriculum balances classroom learning with hands-on training, ensuring students are ready to meet the demands of the healthcare industry."
      ]
    }}
    benefits={{
      title: "Benefits of Pursuing BMRT",
      content: {
        description: "A degree in BMRT opens doors to a wide range of opportunities in the healthcare sector:",
        points: [
          "High Demand: Medical imaging and radiation experts are always in demand.",
          "Diverse Career Paths: Work in hospitals, diagnostic labs, cancer treatment centers, or research facilities.",
          "Impactful Work: Contribute directly to patient care through accurate diagnoses and effective treatments.",
          "Competitive Salaries: Enjoy attractive pay scales and potential for career growth.",
          "Job Security: The healthcare sector is stable, offering long-term employment.",
          "Fulfilling Career: Make a meaningful difference in the lives of patients and communities."
        ]
      }
    }}
  />
);

export default BMRT;
