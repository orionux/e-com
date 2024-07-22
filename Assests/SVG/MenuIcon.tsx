import React from "react";

function MenuIcon({ ...props }) {
  return (
    <svg
      {...props}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.9"
        y="1.55332"
        width="19.8"
        height="19.8"
        rx="9.9"
        stroke="black"
        stroke-width="1.8"
      />
      <rect x="6.2998" y="7.85352" width="9.9" height="1.8" fill="black" />
      <rect x="6.2998" y="10.5532" width="6.3" height="1.8" fill="black" />
      <rect x="6.2998" y="13.2534" width="9.9" height="1.8" fill="black" />
    </svg>
  );
}

export default MenuIcon;
