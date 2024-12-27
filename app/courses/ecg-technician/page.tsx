import React from 'react';
import CoursePage from '@/components/course-page';

const CECGT = () => (
  <CoursePage
    title="Certified ECG Technician Course (CECGT)"
    heroImage="/placeholder-cecgt.svg"
    description="If you’re passionate about diagnostics and patient care, the Certified ECG Technician Course (CECGT) at Sadguru College of Nursing & Allied Medical Sciences in Jagatpur, Cuttack, is the perfect choice. This course provides the essential knowledge and practical skills needed to excel in the field of electrocardiography, an integral part of modern healthcare."
    duration="6 Months"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board."
    location="Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, provides a comprehensive training environment for aspiring ECG technicians."
    whatIs={{
      title: "What is CECGT?",
      content: [
        "The Certified ECG Technician Course (CECGT) is a 6-month program designed to equip students with the skills needed to become proficient ECG technicians. The program combines theoretical knowledge with practical, hands-on experience, focusing on the operation of ECG machines and understanding ECG reports. Key components of the course include:",
        "• Operating ECG machines and interpreting ECG reports.",
        "• Assisting physicians in diagnosing and managing cardiovascular diseases.",
        "• Providing patient care and communication during diagnostic procedures.",
        "The course offers clinical exposure at Sadguru Hospitals, ensuring that graduates are job-ready and able to provide excellent patient care."
      ]
    }}
    benefits={{
      title: "Benefits of Becoming a Certified ECG Technician",
      content: {
        description: "Completing the CECGT course opens up a wide range of opportunities in the healthcare sector:",
        points: [
          "High Demand: ECG technicians are in high demand across hospitals, clinics, and diagnostic labs.",
          "Diverse Career Options: Opportunities to work in hospitals, research institutions, and public health organizations.",
          "Impactful Role: Contribute to diagnosing and managing heart diseases, directly improving patient care.",
          "Competitive Salaries: Enjoy financial stability and growth in the healthcare sector.",
          "Job Security: The healthcare industry ensures long-term career prospects.",
          "Rewarding Work: Experience the fulfillment of making a difference in patients' lives by helping them with heart disease diagnosis and care."
        ]
      }
    }}
  />
);

export default CECGT;
