import CoursePage from '@/components/course-page';
import React from 'react';


const GNM = () => (
  <CoursePage
    title="General Nursing and Midwifery (GNM)"
    heroImage="/placeholder-gnm.svg"
    description="Looking to pursue a General Nursing and Midwifery (GNM) course in Jagatpur, Cuttack, or anywhere in Odisha? Sadguru College of Nursing & Allied Medical Sciences offers a comprehensive GNM program designed to shape skilled and compassionate healthcare professionals. With experienced faculty, modern facilities, and hands-on training, we provide the perfect platform to launch your career in nursing and midwifery."
    duration="3 Years"
    qualification="Pass in 10th and +2 (any stream) or equivalent from a recognized board with a minimum of 40% marks (35% for SC/ST)."
    location="Sadguru College provides an ideal platform for aspiring healthcare professionals in Odisha."
    whatIs={{
      title: "What is GNM?",
      content: [
        "General Nursing and Midwifery (GNM) is a diploma program designed to prepare students for roles as general nurses and midwives. This course focuses on equipping students with the knowledge and skills needed to provide quality nursing care and specialize in midwifery.",
        "The program combines classroom learning with practical training, covering key areas such as:",
        "• Anatomy and Physiology",
        "• Medical-Surgical Nursing",
        "• Community Health Nursing",
        "• Pediatric Nursing",
        "• Mental Health Nursing",
        "• Midwifery and Maternity Care",
        "This well-rounded curriculum ensures that graduates are prepared to meet the healthcare needs of individuals, families, and communities effectively."
      ]
    }}
    benefits={{
      title: "Benefits of Pursuing GNM",
      content: {
        description: "A GNM diploma opens doors to a range of rewarding opportunities in the healthcare sector:",
        points: [
          "High Demand: GNM graduates are always needed, ensuring stable job prospects.",
          "Diverse Career Options: Work in hospitals, clinics, community health centers, research facilities, and public health agencies.",
          "Specialization in Maternal and Child Health: Midwifery training prepares students to address the unique needs of women and newborns.",
          "Hands-On Experience: Extensive clinical training bridges the gap between academics and real-world healthcare challenges.",
          "Career Growth: Competitive salaries and opportunities for advancement.",
          "Job Security: The healthcare industry offers long-term stability."
        ]
      }
    }}
  />
);

export default GNM;
