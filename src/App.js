import React from "react";

import Theme from "./components/Theme";
import styled from "styled-components";
import MenuBurger from "./components/Nav/MenuBurger";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

const Container = styled.div`
max-width: 2440px;
margin-left: auto;
margin-right: auto;
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
	fontsize: ${(props) => props.theme.fontSizes.xlarge};
`;

function App() {
	return (
		<>
			<Theme>
				<MenuBurger />
				<Container>
					<LandingPage />
					</Container>
				<Footer/>
				
			</Theme>
		</>
	);
}

export default App;
