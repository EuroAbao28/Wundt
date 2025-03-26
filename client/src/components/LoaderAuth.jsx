import React from "react";

function LoaderAuth() {
  return (
    <div className="h-screen flex justify-center items-center gap-3">
      <span className="loading loading-spinner loading-xs bg-emerald-600"></span>
      Authenticating.
    </div>
  );
}

export default LoaderAuth;
