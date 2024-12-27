import CoursePage from '@/components/course-page';
import React from 'react';


const BAT = () => (
  <CoursePage
    title="B.Sc. in Anesthesia Technology (BAT)"
    heroImage="/placeholder-bat.svg"
    description="Are you looking to build a career in anesthesia technology in Cuttack, Odisha, or nearby areas? Sadguru College of Nursing & Allied Medical Sciences offers an excellent B.Sc. in Anesthesia Technology program. With experienced faculty, modern infrastructure, and practical exposure, our program is designed to prepare students for a successful career in this critical field of healthcare."
    duration="3 Years"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board with at least 50% marks (45% for PH, 40% for SC/ST)."
    location="Sadguru College of Nursing & Allied Medical Sciences is located in Jagatpur, Cuttack, offering students access to modern facilities and a comprehensive learning environment."
    whatIs={{
      title: "What is B.Sc. in Anesthesia Technology?",
      content: [
        "A B.Sc. in Anesthesia Technology is an undergraduate course that trains students to assist anesthesiologists and ensure patient safety during surgeries and medical procedures. The program blends theoretical learning with hands-on clinical training, equipping students with skills to:",
        "• Operate and maintain anesthesia equipment.",
        "• Monitor patients’ vital signs during surgery.",
        "• Assist in pre-operative and post-operative care.",
        "This course prepares graduates for essential roles in hospitals, surgical centers, and critical care units, making it a valuable qualification in the healthcare sector."
      ]
    }}
    benefits={{
      title: "Benefits of Pursuing a Career in Anesthesia Technology",
      content: {
        description: "Pursuing a career in anesthesia technology offers numerous advantages:",
        points: [
          "High Demand: Anesthesia technologists are vital for surgical procedures, ensuring consistent demand for skilled professionals.",
          "Diverse Career Paths: Work in hospitals, surgical centers, ICUs, or emergency departments.",
          "Competitive Salaries: Enjoy attractive pay with opportunities for career advancement.",
          "Job Security: Specialized skills in this field ensure long-term employment stability.",
          "Fulfilling Work: Contribute directly to patient care and safety, making a positive impact on lives.",
          "Growth Opportunities: Further your expertise with certifications or advanced degrees to unlock higher roles and salaries."
        ]
      }
    }}
  />
);

export default BAT;
