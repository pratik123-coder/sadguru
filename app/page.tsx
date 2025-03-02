import Hero from "@/components/hero";

import { Testimonials } from "@/components/testimonials";
import { WelcomeSection } from "@/components/welcome";
import { WhyChooseUs } from "@/components/why-us";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      
      <WelcomeSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
