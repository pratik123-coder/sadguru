import React from 'react';
import CoursePage from '@/components/course-page';

const DRTT = () => (
  <CoursePage
    title="Diploma in Radiation Therapy Technology (DRTT)"
    heroImage="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/gxfzpka9kxhagnjlvany"
    description="Step into the world of advanced cancer care with a Diploma in Radiation Therapy Technology (DRTT) at Sadguru College of Nursing & Allied Medical Sciences in Jagatpur, Cuttack. This specialized program equips students with the skills and knowledge needed for a successful career in radiation therapy, a vital field in cancer treatment."
    duration="2 Years"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board."
    location="Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, provides state-of-the-art training in radiation therapy technology."
    whatIs={{
      title: "What is DRTT?",
      content: [
        "The Diploma in Radiation Therapy Technology is a two-year program designed to prepare students for a career in radiation therapy, an essential treatment modality in cancer care. At Sadguru College, students receive comprehensive training in both the technical and compassionate aspects of radiation therapy. Key elements of the course include:",
        "• Operating and maintaining radiation therapy equipment.",
        "• Treatment planning for cancer patients.",
        "• Delivering safe and effective radiation therapy while ensuring patient comfort and care.",
        "Our program blends theoretical learning with hands-on training, ensuring graduates are prepared for real-world healthcare environments."
      ]
    }}
    benefits={{
      title: "Benefits of Pursuing DRTT",
      content: {
        description: "A Diploma in Radiation Therapy Technology offers numerous benefits and career opportunities:",
        points: [
          "High Demand: Skilled radiation therapy technologists are in high demand across hospitals, cancer treatment centers, and research institutions.",
          "Diverse Career Paths: Opportunities to work in cancer care facilities, diagnostic clinics, and medical research.",
          "Making a Difference: Play a crucial role in cancer treatment and recovery, directly impacting patients' lives.",
          "Career Growth: Enjoy attractive salaries and ample opportunities for professional development.",
          "Job Security: The healthcare sector offers stable and long-term employment prospects.",
          "Rewarding Work: Gain fulfillment from helping patients during their cancer treatment journey."
        ]
      }
    }}
  />
);

export default DRTT;

