import React from "react";
import loading_logout from "../assets/loading_logout.svg";

function LoaderLogout() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4 text-gray-600">
      <img src={loading_logout} alt="Loading Image" className="w-sm" />
      <div className="flex gap-4 items-center">
        <span className="loading loading-spinner loading-xs"></span>
        <p className="text-lg">Logging out...</p>
      </div>
    </div>
  );
}

export default LoaderLogout;
