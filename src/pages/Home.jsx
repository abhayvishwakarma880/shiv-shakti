import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import GemstonesSection from "../components/home/GemstonesSection";
import VideoSection from "../components/home/VideoSection";
import ProcessSection from "../components/home/ProcessSection";
import BlogSection from "../components/home/BlogSection";
import FaqSection from "../components/home/FaqSection";
import CtaBanner from "../components/ui/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <AboutSection />
      <GemstonesSection />
      <VideoSection />
      <ProcessSection />
      <BlogSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
