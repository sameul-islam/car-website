import React from "react";
import { Link } from "react-router-dom";

const Logo = () =>  {
  return (
    <Link to="/" className="inline-flex items-center">
      <img src="/logo.png" alt="Logo" className="w-28 md:w-32 object-contain" />
    </Link>
  );
}

export default Logo;