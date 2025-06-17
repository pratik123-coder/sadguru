import React from 'react';
import CoursePage from '@/components/course-page';

const PBSN = () => (
  <CoursePage
    title="P.B. B.Sc Nursing"
    heroImage="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/tzm9g1hxoswrlm4v6oh1"
    description="Looking to advance your nursing career in Jagatpur, Cuttack, or anywhere in Odisha? Sadguru College of Nursing & Allied Sciences offers a top-tier Post Basic B.Sc Nursing (P.B. B.Sc Nursing) program, tailored for registered nurses aiming to elevate their skills and qualifications."
    duration="2 Years"
    qualification="GNM (General Nursing and Midwifery) passed and registered as a Nurse with any State Nursing Counci and OJEE (Odisha Joint Entrance Examination) qualified candidates are eligible to apply."
    location="Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, provides students with exceptional training in operation theatre technology."
    whatIs={{
      title: "What is Post Basic B.Sc Nursing?",
      content: [
        "The Post Basic B.Sc Nursing program at Sadguru College of Nursing & Allied Sciences is designed for diploma-qualified nurses who wish to upgrade their education and take on more advanced roles in the healthcare system.",
        "The program balances theoretical knowledge with practical exposure, enabling students to bridge the gap between nursing practice and modern healthcare advancements."
      ]
    }}
    benefits={{
      title: "Benefits of Post Basic B.Sc Nursing",
      content: {
        description: "A career in Post Basic B.Sc Nursing comes with numerous advantages:",
        points: [
          "Career Advancement: Upgrade from staff nurse roles to higher designations like nurse educators, supervisors, and administrators.",
          "Skill Enhancement: Gain deeper clinical and theoretical knowledge for better decision-making and patient care.",
          "Higher Education Access: Opens pathways to pursue M.Sc Nursing and further specialization.",
          "Professional Recognition: Elevate your status and credibility in the nursing profession.",
          "Expanded Opportunities: Work in hospitals, educational institutions, NGOs, public health, and international healthcare settings.",
          "Personal Fulfillment: Reinforce your commitment to compassionate care while growing professionally."
        ]
      }
    }}
  />
);

export default PBSN;
