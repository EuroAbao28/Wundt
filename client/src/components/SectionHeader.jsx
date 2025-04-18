import classNames from "classnames";
import React from "react";
import { TbActivityHeartbeat, TbMinus } from "react-icons/tb";

function SectionHeader({ title, colorMode }) {
  return (
    <div className="flex justify-center flex-col items-center gap-2">
      <h1
        className={classNames(
          "text-2xl md:text-3xl font-semibold text-center",
          {
            "text-white": colorMode === "white" || colorMode === "dual",
          }
        )}>
        {title}
      </h1>

      <div
        className={`${
          colorMode === "white" ? "text-white" : "text-emerald-600"
        } flex items-center text-3xl`}>
        <TbMinus />
        <TbActivityHeartbeat />
        <TbMinus />
      </div>
    </div>
  );
}

export default SectionHeader;
