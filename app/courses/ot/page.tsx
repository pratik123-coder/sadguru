import React from 'react';
import CoursePage from '@/components/course-page';

const BOTT = () => (
  <CoursePage
    title="B.Sc. in Operation Theatre Technology (BOTT)"
    heroImage="/placeholder-bott.svg"
    description="Looking to pursue a career in Operation Theatre Technology? Sadguru College of Nursing & Allied Medical Sciences in Jagatpur, Cuttack, is the perfect place to start. With top-tier education, state-of-the-art facilities, and experienced faculty, we prepare students for a successful career in managing and operating surgical theatres."
    duration="3 Years"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board with at least 50% marks (45% for PH and 40% for SC/ST)."
    location="Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, provides students with exceptional training in operation theatre technology."
    whatIs={{
      title: "What is B.Sc. in Operation Theatre Technology (BOTT)?",
      content: [
        "The B.Sc. in Operation Theatre Technology is a specialized undergraduate program that trains students to manage operation theatres, handle surgical instruments, and assist in surgical procedures. It focuses on:",
        "• Mastering surgical techniques and aseptic protocols.",
        "• Operating and maintaining advanced medical equipment.",
        "• Ensuring smooth operation of surgical theatres.",
        "At Sadguru College, we emphasize not just technical skills but also compassion, ethics, and a sense of responsibility. This ensures graduates are not only skilled professionals but also empathetic contributors to healthcare."
      ]
    }}
    benefits={{
      title: "Benefits of Pursuing BOTT",
      content: {
        description: "A career in Operation Theatre Technology comes with numerous advantages:",
        points: [
          "High Demand: Skilled professionals in this field are in constant demand in hospitals, clinics, and surgical centers.",
          "Diverse Roles: Graduates can work as operation theatre technologists, surgical assistants, or sterilization technicians.",
          "Job Security: The healthcare sector offers long-term stability and growth.",
          "Competitive Salaries: Enjoy attractive pay with opportunities for career advancement.",
          "Fulfilling Work: Play a vital role in saving lives and ensuring the success of surgeries."
        ]
      }
    }}
  />
);

export default BOTT;
