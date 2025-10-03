import React from "react";
import DesktopAdvancedSearch from "./DesktopAdvancedSearch";
import MobileAdvancedSearch from "./MobileAdvancedSearch";

export default function AdvancedSearch() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopAdvancedSearch />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <MobileAdvancedSearch />
      </div>
    </div>
  );
}
