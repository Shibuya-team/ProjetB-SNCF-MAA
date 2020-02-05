import React from "react";
import Slider from "infinite-react-carousel";
import Transportation from "../../images/Transportation";
import Cellphone from "../../images/Cellphone";
import People from "../../images/People";
import Interurbain from "../../images/Interurbain";

const SliderHome = () => (
	<Slider autoplay autoplaySpeed={5000} dots>
		<div>
			<Transportation />
		</div>
		<div>
			<People />
		</div>
		<div>
			<Cellphone />
		</div>
		<div>
			<Interurbain />
		</div>
	</Slider>
);
export default SliderHome;
