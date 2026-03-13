import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import TossyStyleSection from "./components/TossyStyleSection";
import EmpathySection from "./components/EmpathySection";
import PortfolioGrid from "./components/PortfolioGrid";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import SeoHead from "./components/SeoHead";
import TokuteiLawPage from "./components/TokuteiLawPage";
import TermsPage from "./components/TermsPage";
import FooterSection from "./components/FooterSection";

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="bg-[var(--color-dark-bg)] text-white font-sans overflow-x-hidden flex flex-col min-h-screen">
      <SeoHead />
      <div className="flex-grow">
        {currentHash === "#tokutei" ? (
          <TokuteiLawPage />
        ) : currentHash === "#terms" ? (
          <TermsPage />
        ) : (
          <>
            <HeroSection />
            <EmpathySection />
            <TossyStyleSection />
            <PortfolioGrid />
            <ProcessSection />
            <PricingSection />
            <ContactSection />
          </>
        )}
      </div>
      <FooterSection />
    </div>
  )
}
