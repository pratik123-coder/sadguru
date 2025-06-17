import React from 'react';
import CoursePage from '@/components/course-page';

const BMLT = () => (
  <CoursePage
    title="Bachelor in Medical Laboratory Technology (BMLT)"
    heroImage="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/iehx8qji1m8f3anktv2r"
    description="Looking to pursue a Bachelor in Medical Laboratory Technology (BMLT) in Jagatpur, Cuttack, Bhubaneswar, or anywhere in Odisha? Sadguru College of Nursing & Allied Medical Sciences offers a comprehensive BMLT program designed to equip students with the skills and knowledge needed to excel in diagnostic healthcare. With experienced faculty, advanced labs, and hands-on training, we ensure a strong foundation for a successful career in medical laboratory technology."
    duration="3 Years"
    qualification="Pass in +2 Science with PCB and/or Mathematics as one of the subjects from a recognized board with a minimum of 50% marks (45% for PH, 40% for SC/ST)."
    location="Sadguru College of Nursing & Allied Medical Sciences is located in Jagatpur, Cuttack, offering students access to advanced learning facilities and practical exposure."
    whatIs={{
      title: "What is Bachelor in Medical Laboratory Technology?",
      content: [
        "The BMLT program is a three-year undergraduate course that prepares students for essential roles in the healthcare system. Medical lab technologists are key contributors to patient diagnosis and treatment, working behind the scenes in diagnostic and research laboratories.",
        "Students in the BMLT program learn:",
        "• Clinical Biochemistry",
        "• Microbiology",
        "• Pathology",
        "• Hematology",
        "• Lab Techniques and Instrument Handling",
        "• Quality Control",
        "The curriculum includes theoretical learning and practical training, enabling students to analyze patient samples, perform diagnostic tests, and contribute to accurate disease diagnosis and treatment. BMLT graduates are indispensable in modern healthcare, offering expertise in clinical labs, research institutions, and public health organizations."
      ]
    }}
    benefits={{
      title: "Benefits of Pursuing BMLT",
      content: {
        description: "A BMLT degree provides numerous advantages for students aspiring to make a difference in healthcare:",
        points: [
          "High Demand: The growing need for diagnostic healthcare professionals ensures excellent job prospects.",
          "Diverse Career Paths: Work in hospitals, clinical labs, research centers, or public health facilities.",
          "Hands-On Impact: Play a direct role in diagnosing and treating diseases, improving patient outcomes.",
          "Career Growth: Competitive salaries and opportunities for specialization in areas like microbiology or clinical chemistry.",
          "Job Security: A stable and resilient healthcare sector ensures long-term employment.",
          "Fulfilling Work: Contribute to advancements in medicine and patient care, making your work meaningful and rewarding."
        ]
      }
    }}
  />
);

export default BMLT;
