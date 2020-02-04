import React from "react";
import Buildings from "../../images/Buildings";
import styled from "styled-components";

const Container = styled.div`
	text-align: center;
	width: 100%;
	padding: 5px;
	background-color: ${(props) => props.theme.colors.brick};
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	font-size: ${(props) => props.theme.fontSizes.small};
`;

const Footer = () => {
	return (
		<>
			<Buildings style={{ position: "absolute" }} />
			<Container>© Mobilité First</Container>
		</>
	);
};

export default Footer;
