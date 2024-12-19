import { CoursesSection } from "@/components/courses";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { WelcomeSection } from "@/components/welcome";
import { WhyChooseUs } from "@/components/why-us";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <CoursesSection />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
