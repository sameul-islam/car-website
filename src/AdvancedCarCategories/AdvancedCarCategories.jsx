import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopAdvancedCarCategories from "./DesktopAdvancedCarCategories";
import MobileAdvancedCarCategories from "./MobileAdvancedCarCategories";

export default function AdvancedCarCategories() {

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <section className="w-full">
      {isDesktop && <DesktopAdvancedCarCategories />}
      {isMobile && <MobileAdvancedCarCategories />}
    </section>
  );
}
