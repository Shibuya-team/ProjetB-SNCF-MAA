import React from "react";

const Luggage = (props) => (
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
		<g fillRule="nonzero">
			<path
				fill={props.color}
				d="M1.676.168a.25.25 0 00-.212.188l-.008.025v.24L1.455.86H.931v3.045h2.15V.86h-.529L2.55.621C2.549.404 2.549.379 2.544.36a.253.253 0 00-.177-.185l-.03-.009-.322-.001c-.176 0-.329.001-.339.003zM.406.858a.412.412 0 00-.31.256.546.546 0 00-.035.118c-.005.028-.005.082-.005 1.146 0 1.075 0 1.117.005 1.151.031.193.152.33.319.364a.991.991 0 00.193.007h.162V.855H.582a2.246 2.246 0 00-.176.003zM3.272.856c-.001.002-.002.688-.001 1.524l.001 1.52h.161c.142 0 .165-.001.193-.006a.39.39 0 00.28-.233.537.537 0 00.039-.129c.005-.03.006-.09.006-1.149 0-1.226.001-1.137-.019-1.207A.432.432 0 003.621.86a4.15 4.15 0 00-.349-.004z"
			></path>
		</g>
	</svg>
);

export default Luggage;
