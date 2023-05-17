import React from "react";
import "./styles.css";

function Header() {
  return (
    <div className="bg-[#154194] h-14 flex justify-start items-center text-white">
      <svg
        className="h-8 mx-4 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <h2 className="font-sans font-semibold text-[20px]">João vitor Silva</h2>
    </div>
  );
}

export default Header;
