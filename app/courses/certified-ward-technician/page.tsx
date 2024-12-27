import React from 'react';
import CoursePage from '@/components/course-page';

const CWT = () => (
  <CoursePage
    title="Certified Ward Technician (CWT)"
    heroImage="/placeholder-cwt.svg"
    description="Looking for a career in healthcare? The Certified Ward Technician (CWT) Course at Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, is your gateway to a fulfilling profession. This program provides students with the essential skills and knowledge to support healthcare professionals and contribute to patient care in hospitals, clinics, and other medical facilities."
    duration="6 Months"
    qualification="Pass in 10th"
    location="Sadguru College of Nursing & Allied Medical Sciences, Jagatpur, Cuttack."
    whatIs={{
      title: "What is CWT?",
      content: [
        "The Certified Ward Technician (CWT) program is a 6-month course designed to equip students with the skills needed to assist doctors and nurses, ensure patient comfort, and help maintain smooth hospital operations.",
        "Key Highlights of the Course include:",
        "• Practical Training at Sadguru Hospitals: Gain hands-on experience in real medical environments.",
        "• Modern Facilities: Learn in labs equipped with the latest healthcare technology.",
        "• Expert Faculty: Receive guidance from experienced healthcare professionals.",
        "• Comprehensive Curriculum: Learn all aspects of patient care and hospital support."
      ]
    }}
    benefits={{
      title: "Benefits of Becoming a Certified Ward Technician",
      content: {
        description: "Completing the CWT course at Sadguru College opens the door to a wide range of opportunities and rewards:",
        points: [
          "High Demand: Ward Technicians are essential to hospital and clinic operations, ensuring job stability.",
          "Diverse Work Environments: Work in hospitals, research centers, and healthcare facilities.",
          "Meaningful Contribution: Play a vital role in patient care and ensuring medical operations run smoothly.",
          "Competitive Salaries: Enjoy attractive compensation and opportunities for growth in healthcare.",
          "Job Security: Healthcare remains a growing and stable field with consistent demand for skilled professionals."
        ]
      }
    }}
  />
);

export default CWT;
