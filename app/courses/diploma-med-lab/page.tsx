import React from 'react';
import CoursePage from '@/components/course-page';

const DMLT = () => (
  <CoursePage
    title="Diploma in Medical Laboratory Technology (DMLT)"
    heroImage="/placeholder-dmlt.svg"
    description="Kickstart your journey in the healthcare industry with a Diploma in Medical Laboratory Technology (DMLT) at Sadguru College of Nursing & Allied Medical Sciences in Jagatpur, Cuttack. Our program equips you with essential skills in laboratory techniques, diagnostics, and patient care, preparing you for a fulfilling career in medical diagnostics."
    duration="2 Years"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board."
    location="Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, offers a comprehensive DMLT program with advanced lab facilities and practical training opportunities."
    whatIs={{
      title: "What is DMLT?",
      content: [
        "The Diploma in Medical Laboratory Technology is a two-year program that offers in-depth knowledge and practical training in medical diagnostics. At Sadguru College, we combine theoretical learning with hands-on experience in advanced laboratory settings. Key aspects of the course include:",
        "• Mastering modern laboratory techniques and diagnostic procedures.",
        "• Understanding the role of laboratory technology in patient care and disease diagnosis.",
        "• Developing skills to operate advanced medical equipment.",
        "In association with Sadguru Hospitals, students receive real-world exposure and practical training, making them industry-ready and well-prepared to meet the growing demands of the healthcare sector."
      ]
    }}
    benefits={{
      title: "Benefits of Pursuing DMLT",
      content: {
        description: "A Diploma in Medical Laboratory Technology opens doors to numerous career opportunities:",
        points: [
          "High Demand: Skilled DMLT professionals are in constant demand in hospitals, diagnostic labs, and research facilities.",
          "Diverse Roles: Work as lab technicians, diagnostic assistants, or research associates.",
          "Job Security: The healthcare sector offers stable and long-term career prospects.",
          "Competitive Salaries: Enjoy attractive pay packages and opportunities for growth.",
          "Fulfilling Career: Play a vital role in diagnosing and treating diseases, contributing to better patient care."
        ]
      }
    }}
  />
);

export default DMLT;
