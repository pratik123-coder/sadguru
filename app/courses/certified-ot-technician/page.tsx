import React from 'react';
import CoursePage from '@/components/course-page';

const COTT = () => (
  <CoursePage
    title="Certified OT Technician Course (COTT)"
    heroImage="/placeholder-cott.svg"
    description="If you're passionate about healthcare and surgical assistance, the Certified OT Technician Course (COTT) at Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, is an excellent choice. This course equips students with the skills and knowledge needed to excel as operating theatre (OT) technicians, playing a crucial role in surgical care and patient safety."
    duration="1 Year"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board."
    location="Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, offers comprehensive training in the dynamic environment of operating rooms."
    whatIs={{
      title: "What is COTT?",
      content: [
        "The Certified OT Technician Course (COTT) is a 1-year program that prepares students for a rewarding career as operating theatre (OT) technicians. The curriculum covers key aspects of surgical care, including:",
        "• Understanding operating room protocols and assisting surgeons during surgeries.",
        "• Sterilization techniques and maintaining a sterile surgical environment.",
        "• Providing pre- and post-operative patient care.",
        "• Operating and maintaining surgical instruments and medical equipment.",
        "The program includes hands-on training through clinical exposure at Sadguru Hospitals, ensuring that students gain real-world experience."
      ]
    }}
    benefits={{
      title: "Benefits of Becoming a Certified OT Technician",
      content: {
        description: "Completing the COTT program at Sadguru College offers a range of benefits:",
        points: [
          "In-Demand Career: OT technicians are essential members of surgical teams, ensuring job stability and opportunities for advancement.",
          "Diverse Career Options: Graduates can work in hospitals, clinics, or medical equipment companies.",
          "Meaningful Role: Assist in life-saving procedures and contribute directly to patient care.",
          "Competitive Salaries: Enjoy financial stability and growth opportunities in the healthcare sector.",
          "Job Security: The healthcare industry provides long-term employment prospects.",
          "Rewarding Work: Experience the satisfaction of playing a key role in patient care during surgeries."
        ]
      }
    }}
  />
);

export default COTT;
