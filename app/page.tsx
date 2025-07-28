import ContactUs from "@/components/contact-component";
import Hero from "@/components/hero";

import { Testimonials } from "@/components/testimonials";
import { WelcomeSection } from "@/components/welcome";
import { WhyChooseUs } from "@/components/why-us";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      
      <WelcomeSection />
      <ContactUs />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
