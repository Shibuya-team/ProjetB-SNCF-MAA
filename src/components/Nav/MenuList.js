import React from "react";
import styled from "styled-components";
import Contact from "../../images/icones/Contact"
import Space from "../../images/icones/Space"
import Info from "../../images/icones/Info"

const Container = styled.div`

	text-align: left;
	a {
        color: ${(props) => props.theme.colors.plum};
        fontsize: ${(props) => props.theme.fontSizes.xlarge};
        font-family: ${(props) => props.theme.fonts[1]};
	}
	
	
`;


const color = {
	grey: "#EBE8E8",
	oldpink: "#F0DBD8",
	salmon: "#FFCAB8",
	gold: "#F9C153",
	purple: "#241F5D",
	velvet: "#5353A2",
	plum: "#6767AD",
	emerald: "#78C4D2",
	turquoise: "#7ED0DF",
	asura: "#94DAD5",
	orange: "#FF8B66",
	brick: "#EB5933",
	white: "#FFFFFF",
};



const size = {
	small: "0 0 512 512",
	medium: "0 0 256 256",
	large: "0 0 128 128",
	xlarge: "0 0 64 64",
};

function MenuList() {
	return (
		<>
			<Container>
				<ul>
					<li>
                    <Contact  color={color.plum} />
						<a href="#">CONTACT</a>
					</li>
					<li>
                    <Info  color={color.plum} />
						<a href="#">INFO</a>
					</li>
					<li>
                    <Space  color={color.plum} />
						<a href="#">MON ESPACE</a>
					</li>
				</ul>
			</Container>
		</>
	);
}

export default MenuList;
