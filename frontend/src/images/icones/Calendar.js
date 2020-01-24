import React from "react";

const Calendar = props => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox={props.size}
    >
      <g fill={props.color}>
        <path
          fillRule="nonzero"
          d="M3.477.994a.326.326 0 00.327-.326V.327a.326.326 0 10-.653 0v.341c0 .181.146.326.326.326z"
        ></path>
        <path
          fillRule="nonzero"
          d="M4.638.565H3.98v.166a.498.498 0 11-.994 0V.565H1.658v.166a.497.497 0 11-.994 0V.565L0 .557V4.71h4.311l.332-.001L4.638.565zm-.327 3.814H.332V1.726h3.979v2.653z"
        ></path>
        <path
          fillRule="nonzero"
          d="M1.156.994c.18 0 .327-.145.327-.326V.327a.327.327 0 00-.654 0v.341c0 .181.146.326.327.326z"
        ></path>
        <path d="M1.659 2.082H2.182V2.5429999999999997H1.659z"></path>
        <path d="M2.504 2.082H3.027V2.5429999999999997H2.504z"></path>
        <path d="M3.288 2.082H3.811V2.5429999999999997H3.288z"></path>
        <path d="M1.659 2.848H2.182V3.3089999999999997H1.659z"></path>
        <path d="M2.504 2.848H3.027V3.3089999999999997H2.504z"></path>
        <path d="M3.288 2.848H3.811V3.3089999999999997H3.288z"></path>
        <path d="M1.659 3.629H2.182V4.09H1.659z"></path>
        <path d="M0.829 2.848H1.351V3.3089999999999997H0.829z"></path>
        <path d="M0.829 3.629H1.351V4.09H0.829z"></path>
        <path d="M2.504 3.629H3.027V4.09H2.504z"></path>
        <path d="M3.288 3.629H3.811V4.09H3.288z"></path>
      </g>
    </svg>
  );


export default Calendar;