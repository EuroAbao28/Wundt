import React from "react";

function GradientLine({ type = "jungle-to-blue" }) {
  const gradientClass =
    type === "blue-to-jungle"
      ? "from-therapy-blue to-jungle"
      : "from-jungle to-therapy-blue";

  return (
    <div
      className={`w-20 h-1 bg-gradient-to-r ${gradientClass} mx-auto mt-4`}></div>
  );
}

export default GradientLine;
