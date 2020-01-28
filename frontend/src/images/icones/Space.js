import React from "react";

const Space = props => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox={props.size}
    >
      <path
        fill={props.color}
        d="M4.44 5.76H.36A.36.36 0 010 5.4V2.52a.36.36 0 01.36-.36h.6v-.72a1.44 1.44 0 012.88 0v.72h.6a.36.36 0 01.36.36V5.4a.36.36 0 01-.36.36zm-2.4-.96h.72l-.188-.753a.479.479 0 10-.344 0L2.04 4.8zm1.32-3.36a.96.96 0 00-1.92 0v.72h1.92v-.72z"
      ></path>
    </svg>
  );


export default Space;