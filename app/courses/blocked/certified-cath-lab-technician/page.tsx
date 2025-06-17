import React from 'react';
import CoursePage from '@/components/course-page';

const CCLT = () => (
  <CoursePage
    title="Certified Cath Lab Technician Course (CCLT)"
    heroImage="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/fkyqpfwyxtusonv3mifz"
    description="Are you passionate about cardiovascular health and looking for a career in cardiac diagnostics and treatment? The Certified Cath Lab Technician Course (CCLT) at Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, offers the perfect opportunity to enter this specialized and rewarding field."
    duration="2 Years"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board."
    location="Sadguru College of Nursing & Allied Medical Sciences, Jagatpur, Cuttack."
    whatIs={{
      title: "What is CCLT?",
      content: [
        "The Certified Cath Lab Technician Course (CCLT) is a 2-year program designed to train students in cardiovascular diagnostic and treatment procedures. The curriculum includes:",
        "• Understanding techniques used in catheterization labs to assist in diagnosing and treating heart diseases.",
        "• Operating advanced diagnostic tools and monitoring systems.",
        "• Learning pre- and post-procedure patient management for optimal outcomes.",
        "• Mastering precision-driven techniques used in cardiac care.",
        "Through clinical exposure at Sadguru Hospitals, students gain valuable real-world experience."
      ]
    }}
    benefits={{
      title: "Benefits of Becoming a Certified Cath Lab Technician",
      content: {
        description: "Completing the CCLT course at Sadguru College offers a range of benefits:",
        points: [
          "High Demand: Skilled Cath Lab Technicians are sought after in hospitals and healthcare facilities worldwide.",
          "Diverse Career Options: Work in hospitals, research labs, diagnostic centers, and more.",
          "Meaningful Contribution: Play an essential role in diagnosing and treating heart diseases, improving patient outcomes.",
          "Career Growth: Enjoy competitive salaries with opportunities for advancement in the healthcare field.",
          "Job Security: The demand for skilled healthcare professionals ensures long-term employment prospects.",
          "Rewarding Work: Experience the satisfaction of making a significant impact on patients' lives."
        ]
      }
    }}
  />
);

export default CCLT;
