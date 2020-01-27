import React from "react";

const Quotes = props => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox={props.size}
    >
      <g fill={props.color} fillRule="nonzero">
        <path d="M0 0v3.168h2.016C2.016 4.332 1.112 5.28 0 5.28v1.056c1.667 0 3.024-1.421 3.024-3.168V0H0zM5.039 0v3.168h2.016c0 1.164-.903 2.112-2.016 2.112v1.056c1.668 0 3.024-1.421 3.024-3.168V0H5.039z"></path>
      </g>
    </svg>
  );


export default Quotes;
