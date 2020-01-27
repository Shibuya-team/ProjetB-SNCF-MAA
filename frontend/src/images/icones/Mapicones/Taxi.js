import React from "react";

const Taxi = props => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 7 4"
      width={props.size}
  
    >
      <path
        fill={props.color}
        d="M5.348 0c.492 0 .892.4.892.893l.411 1.785c0 .492-.4.892-.892.892H.893A.893.893 0 010 2.678L.411.893C.411.4.811 0 1.304 0h4.044zm.424 2.582V1.248h-.316v1.334h.316zm-4.152 0V1.48h.476v-.232H.828v.232h.476v1.102h.316zm2.501-1.334h-.348l.564.654-.593.68h.341l.418-.489.425.489h.348l-.593-.686.564-.648h-.341l-.389.456-.396-.456zM3.72 2.582l-.633-1.334h-.37l-.633 1.334H2.4l.14-.303h.712l.14.303h.328zm-.566-.517l-.257-.568-.259.568h.516z"
      ></path>
    </svg>
  );


export default Taxi;