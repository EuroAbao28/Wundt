import React from "react";

function Badge({ label, className = "" }) {
  return (
    <span
      className={`uppercase text-xs font-semibold py-1 px-3 rounded-full tracking-wider inline-block ${className}`}>
      {label}
    </span>
  );
}

export default Badge;
