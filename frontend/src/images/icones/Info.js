import React from "react";

const Info = props => (
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
        d="M2.76 0a2.76 2.76 0 100 5.52 2.76 2.76 0 000-5.52zm.36 3.96a.36.36 0 11-.72 0V2.52a.36.36 0 11.72 0v1.44zm-.36-2.04a.36.36 0 110-.72.36.36 0 010 .72z"
      ></path>
    </svg>
  );


export default Info;