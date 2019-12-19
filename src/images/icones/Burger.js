import React from "react";

const Burger = props => (
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
        d="M5.4 2.4H.36a.36.36 0 110-.72H5.4a.36.36 0 110 .72zm0-1.68H.36a.36.36 0 110-.72H5.4a.36.36 0 110 .72zM.36 3.36H5.4a.36.36 0 110 .72H.36a.36.36 0 110-.72z"
      ></path>
    </svg>
  );

export default Burger;