import React from "react";

const BasketEmpty = props => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox= {props.size}
    >
      <path
        fill={props.color}
        d="M5.67 5.622a.35.35 0 01-.284.138H.37a.35.35 0 01-.284-.138.38.38 0 01-.079-.315L.449 2.47a.37.37 0 01.363-.312h.626V1.44a1.44 1.44 0 012.88 0v.718h.626c.18 0 .33.129.363.312l.442 2.837a.38.38 0 01-.079.315zM1.438 2.16v.547a.477.477 0 00.24.893.477.477 0 00.24-.893V2.16h-.48zm2.4-.72a.96.96 0 00-1.92 0v.718h1.92V1.44zm.48 1.267V2.16h-.48v.547a.477.477 0 00.24.893.477.477 0 00.24-.893z"
      ></path>
    </svg>
  );


export default BasketEmpty;