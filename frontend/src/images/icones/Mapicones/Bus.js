import React from "react";

const Bus = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit="2"
		clipRule="evenodd"
		viewBox="0 0 6 6"
		size={props.size}
	>
		<path
			fill={props.color}
			fillRule="nonzero"
			d="M5.255 2.58C5.255 1.155 4.033 0 2.634 0 1.182 0 0 1.155 0 2.58c0 1.405 1.182 2.554 2.634 2.554S5.255 3.998 5.255 2.58zm-.362 0c0 1.206-1.018 2.201-2.259 2.201-1.248 0-2.273-.988-2.273-2.201C.361 1.354 1.386.346 2.634.346c1.241 0 2.259 1.014 2.259 2.234zm-.368.34c0-.263-.151-.417-.341-.52l-.144-.077c-.086-.045-.158-.116-.158-.205 0-.103.085-.174.21-.174a.58.58 0 01.223.058c.092.045.151-.013.178-.109.032-.109-.014-.147-.092-.186a.731.731 0 00-.302-.064c-.309 0-.565.199-.565.52 0 .25.131.391.341.507l.151.083c.092.051.151.122.151.218 0 .122-.118.18-.236.18a.763.763 0 01-.263-.064c-.098-.045-.151.013-.184.115-.033.109.02.154.105.193.079.038.217.07.342.07.322 0 .584-.211.584-.545zm-1.149-.064V1.79c0-.089-.092-.134-.177-.134-.092 0-.177.045-.177.134v1.021c0 .205-.066.34-.237.34-.164 0-.243-.128-.243-.34V1.79c0-.089-.099-.134-.184-.134-.098 0-.184.045-.184.134v1.059c0 .424.217.616.611.616.355 0 .591-.199.591-.609zm-1.373.077c0-.295-.21-.405-.322-.424v-.006c.132-.064.289-.186.289-.404 0-.296-.262-.437-.519-.437H.959c-.092 0-.144.071-.144.148v1.501c0 .09.091.135.177.135h.466c.283 0 .545-.148.545-.513zm-.4-.751c0 .167-.145.224-.296.224h-.138v-.449h.138c.158 0 .296.052.296.225zm.052.712c0 .173-.098.257-.308.257h-.158V2.65h.158c.131 0 .308.045.308.244z"
		></path>
	</svg>
);

export default Bus;
