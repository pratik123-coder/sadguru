import React from 'react';
import CoursePage from '@/components/course-page';

const CDT = () => (
  <CoursePage
    title="Certified Dialysis Technician (CDT)"
    heroImage="/placeholder-cdt.svg"
    description="Are you passionate about patient care and looking for a career in renal therapy and diagnostics? The Certified Dialysis Technician (CDT) Course at Sadguru College of Nursing & Allied Medical Sciences, located in Jagatpur, Cuttack, offers you the ideal platform to build a future in healthcare."
    duration="1 Year"
    qualification="Pass in +2 Science with PCB and/or Mathematics from a recognized board."
    location="Sadguru College of Nursing & Allied Medical Sciences, Jagatpur, Cuttack."
    whatIs={{
      title: "What is CDT?",
      content: [
        "The Certified Dialysis Technician (CDT) program is a 1-year course designed to specialize in dialysis technology, preparing students to:",
        "• Operate and maintain dialysis equipment used in renal therapy.",
        "• Monitor patient conditions during dialysis procedures to ensure safety.",
        "• Provide compassionate care to patients undergoing dialysis treatments.",
        "Students gain real-world exposure and hands-on training at Sadguru Hospitals, preparing them for effective roles in healthcare."
      ]
    }}
    benefits={{
      title: "Benefits of Becoming a Certified Dialysis Technician",
      content: {
        description: "Completing the CDT course at Sadguru College offers the following advantages:",
        points: [
          "High Demand: Skilled dialysis technicians are critical in hospitals and specialized dialysis centers.",
          "Career Growth: Enjoy competitive salaries with numerous opportunities for career advancement in healthcare.",
          "Meaningful Impact: Play a crucial role in assisting patients with life-saving renal treatments.",
          "Job Stability: The healthcare sector ensures long-term job security and demand for skilled professionals.",
          "Diverse Career Options: Work in hospitals, clinics, research labs, or specialized renal care facilities."
        ]
      }
    }}
  />
);

export default CDT;
