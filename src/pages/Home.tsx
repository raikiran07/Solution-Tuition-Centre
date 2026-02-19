import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProgramsSection from "@/components/home/ProgramsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HowItWorks from "@/components/home/HowItWorks";
import ContactCTA from "@/components/home/ContactCTA";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ProgramsSection />
      <HowItWorks />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
};

export default Home;
