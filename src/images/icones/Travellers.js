import React from "react";

const Travellers= props => ( 
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fillRule="evenodd"
  strokeLinejoin="round"
  strokeMiterlimit="2"
  clipRule="evenodd"
  viewBox="0 0 5 5"
  width={props.size}
>
  <path fill="none" d="M0 0H4.031V4.049H0z"></path>
  <path
    fillRule="nonzero"
    fill={props.color}
    d="M2.714.57a.878.878 0 010 1.243.882.882 0 01-1.245 0 .878.878 0 010-1.243.882.882 0 011.245 0M3.442 2.703a2.45 2.45 0 00-2.701 0 .437.437 0 00-.19.363v.762h3.081v-.762a.437.437 0 00-.19-.363z"
  ></path>
</svg>
 );


export default Travellers;