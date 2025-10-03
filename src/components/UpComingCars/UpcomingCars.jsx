
import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopUpcomingSlider from "./DesktopUpcomingSlider";
import MobileUpcomingSlider from "./MobileUpcomingSlider";

export default function UpcomingCars() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isDesktop ? <DesktopUpcomingSlider /> : <MobileUpcomingSlider />}
    </>
  );
}
