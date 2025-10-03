import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, filterType, setFilterType }}
    >
      {children}
    </SearchContext.Provider>
  );
}









