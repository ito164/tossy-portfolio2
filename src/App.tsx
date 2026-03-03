import HeroSection from "./components/HeroSection";
import TossyStyleSection from "./components/TossyStyleSection";
import EmpathySection from "./components/EmpathySection";
import PortfolioGrid from "./components/PortfolioGrid";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import SeoHead from "./components/SeoHead";

export default function App() {
  return (
    <div className="bg-[var(--color-dark-bg)] text-white font-sans overflow-x-hidden">
      <SeoHead />
      <HeroSection />
      <EmpathySection />
      <TossyStyleSection />
      <PortfolioGrid />
      <PricingSection />
      <ContactSection />
    </div>
  )
}
