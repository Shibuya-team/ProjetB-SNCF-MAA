import React from "react";

const Metro = props => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox={props.size}
    >
      <g fill={props.color} fillRule="nonzero">
        <path d="M4.966 2.489A2.485 2.485 0 002.477 0 2.478 2.478 0 000 2.489a2.472 2.472 0 002.477 2.477 2.478 2.478 0 002.489-2.477zm-.367 0A2.115 2.115 0 012.477 4.6 2.11 2.11 0 01.366 2.489a2.116 2.116 0 114.233 0z"></path>
        <path d="M3.694 3.552h-.292V1.647l-.753 1.905H2.33l-.766-1.893v1.893h-.292V1.414h.511l.713 1.76.697-1.76h.501v2.138z"></path>
      </g>
    </svg>
  );


export default Metro;