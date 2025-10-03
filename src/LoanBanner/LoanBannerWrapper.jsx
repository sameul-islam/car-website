import React from "react";
import LoanBannerMobile from "./LoanBannerMobile";
import LoanBanner from "./LoanBanner";

export default function LoanBannerWrapper() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block">
        <LoanBanner />
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden">
        <LoanBannerMobile />
      </div>
    </>
  );
}
