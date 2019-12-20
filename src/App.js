import React from "react";

import Theme from "./components/Theme";
import styled from "styled-components";
import MenuBurger from "./components/Nav/MenuBurger";
import LandingPage from "./components/LandingPage/LandingPage";

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	align-content: center;
	text-align: center;
	background-color: ${(props) => props.theme.colors.emerald};
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	fontsize: ${(props) => props.theme.fontSizes.large};
`;

function App() {
	return (
		<>
			<Theme>
				<MenuBurger />
				<Container>
					<LandingPage />
				</Container>
			</Theme>
		</>
	);
}

export default App;
