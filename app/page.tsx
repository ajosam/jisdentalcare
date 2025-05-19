import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import PersonalTouchSection from "@/components/PersonalTouchSection";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-10 gap-1  font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <PersonalTouchSection />
      <DoctorsSection />
      <TestimonialsSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
