import React from "react";

const Upload = props => (
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
      d="M4.44 4.32H3.115V2.987l.295.296a.249.249 0 00.353 0 .251.251 0 000-.355l-.695-.699a.247.247 0 00-.19-.07.245.245 0 00-.193.07l-.696.699a.253.253 0 000 .355.249.249 0 00.353 0l.295-.296V4.32H1.559a1.556 1.556 0 01-.227-3.097 1.918 1.918 0 013.703.605c.429.218.725.658.725 1.172a1.32 1.32 0 01-1.32 1.32z"
    ></path>
  </svg>
  );


export default Upload;