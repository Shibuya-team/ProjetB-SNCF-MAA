import React from "react";

const Close = props => (
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
        d="M4.22.62L2.677 2.163 4.22 3.705a.365.365 0 01-.515.515L2.163 2.677.621 4.22a.365.365 0 01-.515-.515l1.543-1.542L.106.62a.365.365 0 010-.514.366.366 0 01.515 0l1.542 1.543L3.705.106A.363.363 0 114.22.62z"
      ></path>
    </svg>
  );


export default Close;