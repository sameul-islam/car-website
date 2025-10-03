import React from "react";
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

export default function Hero() {
  return (
    <>
    <div className="hidden md:block">
      <DesktopHero />
    </div>
    <div className="block md:hidden">
      <MobileHero />
    </div>
    </>
  );
}





