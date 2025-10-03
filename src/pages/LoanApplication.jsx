import React, { useEffect } from "react";
import LoanFormDesktop from "../components/LoanForm/LoanFormDesktop";
import LoanFormMobile from "../components/LoanForm/LoanFormMobile";
import DesktopBenefits from "../components/LoanForm/DesktopBenefits";
import DesktopContact from "../components/LoanForm/DesktopContact";
import DesktopEligibility from "../components/LoanForm/DesktopEligibility";
import DesktopEMICalculator from "../components/LoanForm/DesktopEMICalculator";
import DesktopTestimonials from "../components/LoanForm/DesktopTestimonials";
import DesktopFAQ from "../components/LoanForm/DesktopFAQ";
import LoanDesktopHero from "../components/LoanForm/LoanDesktopHero";
import LoanMobileHero from "../components/LoanForm/LoanMobileHero";
import MobileBenefits from "../components/LoanForm/MobileBenefits";
import MobileContact from "../components/LoanForm/MobileContact";
import MobileEligibility from "../components/LoanForm/MobileEligibility";
import MobileEMICalculator from "../components/LoanForm/MobileEMICalculator";
import MobileFAQ from "../components/LoanForm/MobileFAQ";
import MobileTestimonials from "../components/LoanForm/MobileTestimonials";

export default function LoanApplication() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden md:block w-full">
        <LoanDesktopHero />
        <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
          <LoanFormDesktop />
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <DesktopBenefits />
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <DesktopEligibility />
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <DesktopEMICalculator />
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <DesktopFAQ />
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <DesktopTestimonials />
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16 mb-16">
          <DesktopContact />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full">
        <LoanMobileHero />
        <div className="px-4 -mt-16 relative z-20">
          <LoanFormMobile />
        </div>
        <div className="px-4 mt-10">
          <MobileBenefits />
        </div>
        <div className="px-4 mt-10">
          <MobileEligibility />
        </div>
        <div className="px-4 mt-10">
          <MobileEMICalculator />
        </div>
        <div className="px-4 mt-10">
          <MobileFAQ />
        </div>
        <div className="px-4 mt-10">
          <MobileTestimonials />
        </div>
        <div className="px-4 mt-10 mb-16">
          <MobileContact />
        </div>
      </div>
    </div>
  );
}
