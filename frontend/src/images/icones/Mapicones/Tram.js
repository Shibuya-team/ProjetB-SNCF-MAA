import React from "react";

const Tram = props => (
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
        fillRule="nonzero"
        d="M4.876 2.442a2.439 2.439 0 10-4.876 0 2.426 2.426 0 002.432 2.43 2.432 2.432 0 002.444-2.43zm-.36 0a2.076 2.076 0 01-2.084 2.071A2.07 2.07 0 01.36 2.442c0-1.151.926-2.083 2.072-2.083 1.152 0 2.084.932 2.084 2.083zm-.938-.968c0-.097-.061-.189-.171-.189H1.475c-.11 0-.171.092-.171.189 0 .085.061.189.171.189h.744V3.66c0 .11.115.171.219.171.116 0 .225-.061.225-.171V1.663h.744c.11 0 .171-.104.171-.189z"
      ></path>
    </svg>
  );


export default Tram;